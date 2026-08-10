import type { ReportSignupData } from "@/lib/validation";
import { getEmailEnv, type ResendEmailPayload } from "@/lib/services/contact";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Pure: build the confirmation email sent to a report-signup lead. */
export function buildReportSignupConfirmation(
  data: ReportSignupData,
  env: ReturnType<typeof getEmailEnv>,
): ResendEmailPayload {
  const firstName = data.name?.trim().split(/\s+/)[0];
  const greeting = firstName ? `Hi ${firstName},` : "Hi,";
  const noticeUrl = "https://seovize.com/research/texas-digital-marketing-report-2026";
  const contactUrl = "https://seovize.com/contact";
  const subject = "About the Texas report you requested — Seovize";

  const text = [
    greeting,
    "",
    "Thanks for requesting the Texas Small Business Digital Marketing Report.",
    "",
    "Straight answer: we withdrew it. On review, several of its headline figures did not meet the evidence standard we hold our client work to, so we removed them outright rather than quietly re-sourcing or softening them. You can read exactly what came out and why here:",
    noticeUrl,
    "",
    "We would rather tell you that than send you numbers we cannot stand behind.",
    "",
    "What we can offer instead is real: a free audit of your actual site — technical issues found, keyword opportunities, and one clear competitor gap. No template.",
    contactUrl,
    "",
    "— Seovize · Build authority. Capture demand.",
  ].join("\n");

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#0B1020;line-height:1.6">
      <p>${esc(greeting)}</p>
      <p>Thanks for requesting the <strong>Texas Small Business Digital Marketing Report</strong>.</p>
      <p>Straight answer: we withdrew it. On review, several of its headline figures did not meet the evidence standard we hold our client work to, so we removed them outright rather than quietly re-sourcing or softening them. <a href="${noticeUrl}" style="color:#14B8A6">Here is exactly what came out, and why →</a></p>
      <p>We would rather tell you that than send you numbers we cannot stand behind.</p>
      <p>What we can offer instead is real: a free audit of your actual site — technical issues found, keyword opportunities, and one clear competitor gap. No template.</p>
      <p><a href="${contactUrl}" style="color:#14B8A6;font-weight:600">Get your free audit →</a></p>
      <p style="color:#475569;font-size:13px;margin-top:24px">— Seovize · Build authority. Capture demand.</p>
    </div>`.trim();

  return {
    from: `${env.CONTACT_FROM_NAME} <${env.CONTACT_FROM_EMAIL}>`,
    to: [data.email],
    reply_to: env.CONTACT_TO_EMAIL,
    subject,
    html,
    text,
  };
}

/** Send the report-signup confirmation. Throws on failure — caller decides if non-blocking. */
export async function sendReportSignupConfirmation(data: ReportSignupData): Promise<void> {
  const env = getEmailEnv();
  const payload = buildReportSignupConfirmation(data, env);

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Resend send failed (${res.status}): ${body}`);
  }
}
