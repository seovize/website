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
  const reportUrl = "https://seovize.com/research/texas-digital-marketing-report-2026";
  const subject = "Your Texas Digital Marketing Report link — Seovize";

  const text = [
    greeting,
    "",
    "Thanks for your interest in the Texas Small Business Digital Marketing Report 2026.",
    `Read it here: ${reportUrl}`,
    "",
    "We'll send you a note when the next edition is published — no spam, no daily emails.",
    "",
    "— Seovize · Build authority. Capture demand.",
  ].join("\n");

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#0B1020;line-height:1.6">
      <p>${esc(greeting)}</p>
      <p>Thanks for your interest in the <strong>Texas Small Business Digital Marketing Report 2026</strong>.</p>
      <p><a href="${reportUrl}" style="color:#14B8A6;font-weight:600">Read the full report →</a></p>
      <p>We'll send you a note when the next edition is published — no spam, no daily emails.</p>
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
