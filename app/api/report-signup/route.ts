import { NextResponse } from "next/server";
import { reportSignupSchema } from "@/lib/validation";
import { upsertReportSignup } from "@/lib/services/brevo";
import { sendReportSignupConfirmation } from "@/lib/services/report-signup";
import { classifyProviderError, logLeadOutcome } from "@/lib/services/lead-log";

function redirect(request: Request, query: string) {
  const referer = request.headers.get("referer");
  const base = referer && referer.includes("/research/texas-digital-marketing-report-2026")
    ? referer.split("?")[0]
    : new URL("/research/texas-digital-marketing-report-2026", request.url).toString();
  return NextResponse.redirect(`${base}?${query}`, { status: 303 });
}

// Source of truth for "success" on this route: the Brevo upsert. Brevo is
// the only place a report-signup lead is ever recorded (see the comment on
// getReportDownloadContacts in lib/services/brevo.ts — it doubles as the
// database for nurture-sequence state; there is no separate DB). A
// confirmation email without a Brevo record is not a captured lead, so
// success must require CRM persistence to succeed. The confirmation email
// itself stays best-effort: it's a nice-to-have on top of an already-real
// signup, not the thing that makes the signup real.
export async function POST(request: Request) {
  const formData = await request.formData();

  // Honeypot: bots fill the hidden "hp_field" input. Pretend success, drop silently.
  if (String(formData.get("hp_field") || "").trim() !== "") {
    logLeadOutcome("/api/report-signup", "spam_rejected");
    return redirect(request, "report=sent");
  }

  const parsed = reportSignupSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    sourcePage: formData.get("sourcePage"),
    utmSource: formData.get("utmSource"),
    utmMedium: formData.get("utmMedium"),
    utmCampaign: formData.get("utmCampaign"),
  });

  if (!parsed.success) {
    logLeadOutcome("/api/report-signup", "validation_failed");
    return redirect(request, "report=error");
  }

  try {
    await upsertReportSignup(parsed.data);
  } catch (err) {
    const outcome = classifyProviderError(err) === "not_configured" ? "crm_not_configured" : "crm_upsert_failed";
    logLeadOutcome("/api/report-signup", outcome, { provider: "brevo" });
    return redirect(request, "report=error");
  }

  // Confirmation email — best-effort, never blocks success once the lead is
  // already captured in Brevo above.
  try {
    await sendReportSignupConfirmation(parsed.data);
  } catch {
    console.error("[report-signup] confirmation email failed (non-blocking)");
  }

  logLeadOutcome("/api/report-signup", "success");
  return redirect(request, "report=sent");
}
