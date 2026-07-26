import { NextResponse } from "next/server";
import { reportSignupSchema } from "@/lib/validation";
import { upsertReportSignup } from "@/lib/services/brevo";
import { sendReportSignupConfirmation } from "@/lib/services/report-signup";

function redirect(request: Request, query: string) {
  const referer = request.headers.get("referer");
  const base = referer && referer.includes("/research/texas-digital-marketing-report-2026")
    ? referer.split("?")[0]
    : new URL("/research/texas-digital-marketing-report-2026", request.url).toString();
  return NextResponse.redirect(`${base}?${query}`, { status: 303 });
}

export async function POST(request: Request) {
  const formData = await request.formData();

  // Honeypot: bots fill the hidden "hp_field" input. Pretend success, drop silently.
  if (String(formData.get("hp_field") || "").trim() !== "") {
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
    return redirect(request, "report=error");
  }

  // Persist to Brevo first — this is the actual lead capture. Best-effort:
  // don't fail the user-facing flow if Brevo has a hiccup.
  try {
    await upsertReportSignup(parsed.data);
  } catch (err) {
    console.error("[report-signup] Brevo upsert failed (non-blocking):", err);
  }

  // Confirmation email — also best-effort, never blocks the success state.
  try {
    await sendReportSignupConfirmation(parsed.data);
  } catch (err) {
    console.error("[report-signup] confirmation email failed (non-blocking):", err);
  }

  return redirect(request, "report=sent");
}
