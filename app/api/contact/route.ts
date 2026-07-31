import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { sendContactEmail, sendLeadConfirmation } from "@/lib/services/contact";
import { upsertLeadContact } from "@/lib/services/brevo";
import { classifyProviderError, logLeadOutcome, ProviderRequestError } from "@/lib/services/lead-log";

function redirect(request: Request, query: string) {
  return NextResponse.redirect(new URL(`/contact?${query}`, request.url), { status: 303 });
}

// Source of truth for "success" on this route: the internal lead
// notification email (Resend) reaching the inbox. That's the only step
// that actually gets a human to see the lead, so it's what a success
// message must be conditioned on. Brevo persistence and the optional
// webhook are best-effort CRM/segmentation — useful, but their failure
// must never turn a delivered lead into a shown error.
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

  try {
    await sendContactEmail(parsed.data);
  } catch (err) {
    const outcome = classifyProviderError(err) === "not_configured" ? "email_not_configured" : "email_send_failed";
    logLeadOutcome("/api/contact", outcome, {
      provider: "resend",
      status: err instanceof ProviderRequestError ? err.status : undefined,
    });
    return redirect(request, "error=send");
  }

  // Confirmation auto-reply to the lead — best-effort, never blocks the lead.
  try {
    await sendLeadConfirmation(parsed.data);
  } catch {
    console.error("[contact] confirmation auto-reply failed (non-blocking)");
  }

  // Persist the lead into Brevo (system of record + nurture segmentation).
  // Best-effort: a Brevo outage must never cost the lead, since the
  // notification + auto-reply above have already gone out.
  try {
    await upsertLeadContact(parsed.data);
  } catch (err) {
    const outcome = classifyProviderError(err) === "not_configured" ? "crm_not_configured" : "crm_upsert_failed";
    logLeadOutcome("/api/contact", outcome, { provider: "brevo" });
  }

  // Best-effort secondary delivery (e.g. CRM/Slack). Never blocks the lead.
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, submittedAt: new Date().toISOString() }),
      });
    } catch {
      console.error("[contact] webhook failed (non-blocking)");
    }
  }

  logLeadOutcome("/api/contact", "success");
  return redirect(request, "success=true");
}
