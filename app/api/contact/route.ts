import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { sendContactEmail, sendLeadConfirmation } from "@/lib/services/contact";
import { upsertLeadContact } from "@/lib/services/brevo";
import {
  classifyProviderError,
  contentIdempotencyKey,
  logLeadOutcome,
  logProviderOutcome,
  withProviderTimeout,
  type ProviderOutcome,
} from "@/lib/services/lead-log";

function redirect(request: Request, query: string) {
  return NextResponse.redirect(new URL(`/contact?${query}`, request.url), { status: 303 });
}

const PROVIDER_TIMEOUT_MS = 8000;

/**
 * Source of truth for this route: a submission is successful only when at
 * least one authorized durable capture method stores or delivers the
 * complete enquiry.
 *
 * Primary: Brevo contact upsert (persistent CRM record — this is where the
 * enquiry is durably stored; upsert-by-email also makes it naturally
 * idempotent, see lib/services/brevo.ts).
 * Secondary: Resend internal notification email (how a human actually
 * learns about the lead right now, but not itself durable storage).
 *
 * - Both succeed -> success.
 * - Exactly one succeeds -> still success (the enquiry made it somewhere
 *   real), but logged as partial_success so a human watching logs knows one
 *   channel needs attention (e.g. Brevo captured it but nobody got
 *   notified, or vice versa).
 * - Both fail -> failure. The user is told, not silently lied to.
 *
 * The confirmation auto-reply to the lead is a third, non-authoritative
 * message layered on top once at least one durable path has succeeded —
 * its own failure never changes the outcome.
 */
async function attemptProvider(
  provider: "brevo" | "resend",
  role: "primary" | "secondary",
  route: "/api/contact",
  fn: () => Promise<void>,
): Promise<ProviderOutcome> {
  try {
    await withProviderTimeout(provider, fn(), PROVIDER_TIMEOUT_MS);
    logProviderOutcome(route, provider, role, "succeeded");
    return "succeeded";
  } catch (err) {
    const outcome = classifyProviderError(err) as ProviderOutcome;
    const status = (err as { status?: number })?.status;
    logProviderOutcome(route, provider, role, outcome, status);
    return outcome;
  }
}

export async function POST(request: Request) {
  const formData = await request.formData();

  // Honeypot: bots fill the hidden "hp_field" input. Pretend success, drop silently.
  // (Named distinctly from the real "company" field so legitimate leads who
  // fill in their company name are never mistaken for bots.)
  if (String(formData.get("hp_field") || "").trim() !== "") {
    logLeadOutcome("/api/contact", "spam_rejected");
    return redirect(request, "success=true");
  }

  const parsed = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    website: formData.get("website"),
    service: formData.get("service"),
    city: formData.get("city"),
    message: formData.get("message"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    sourcePage: formData.get("sourcePage"),
    utmSource: formData.get("utmSource"),
    utmMedium: formData.get("utmMedium"),
    utmCampaign: formData.get("utmCampaign"),
  });

  if (!parsed.success) {
    logLeadOutcome("/api/contact", "validation_failed");
    return redirect(request, "error=validation");
  }

  const data = parsed.data;
  // Duplicate-submission protection: deterministic from content, not wall
  // clock, so a double-click or client retry of the *same* enquiry within
  // 24h is deduplicated by Resend, but a genuinely new enquiry from the
  // same person is not suppressed.
  const idempotencyKey = contentIdempotencyKey("contact", [data.email, data.website, data.message]);

  const [primary, secondary] = await Promise.all([
    attemptProvider("brevo", "primary", "/api/contact", () => upsertLeadContact(data)),
    attemptProvider("resend", "secondary", "/api/contact", () => sendContactEmail(data, idempotencyKey)),
  ]);

  const primaryOk = primary === "succeeded";
  const secondaryOk = secondary === "succeeded";

  if (!primaryOk && !secondaryOk) {
    logLeadOutcome("/api/contact", "failure");
    return redirect(request, "error=send");
  }

  logLeadOutcome("/api/contact", primaryOk && secondaryOk ? "success" : "partial_success");

  // Confirmation auto-reply to the lead — best-effort, never blocks the
  // outcome above; the enquiry has already been captured by at least one
  // durable path by the time this runs.
  try {
    await withProviderTimeout("resend", sendLeadConfirmation(data), PROVIDER_TIMEOUT_MS);
  } catch {
    console.error("[contact] confirmation auto-reply failed (non-blocking)");
  }

  // Best-effort secondary delivery (e.g. CRM/Slack). Never blocks the lead.
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
      });
    } catch {
      console.error("[contact] webhook failed (non-blocking)");
    }
  }

  return redirect(request, "success=true");
}
