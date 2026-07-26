import { getEmailEnv, type ResendEmailPayload } from "@/lib/services/contact";
import type { NurtureStep } from "@/lib/nurture-sequence";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/** Pure: build the Resend payload for a given nurture step + recipient. */
export function buildNurtureEmailPayload(
  step: NurtureStep,
  recipientEmail: string,
  firstName: string,
  env: ReturnType<typeof getEmailEnv>,
): ResendEmailPayload {
  return {
    from: `${env.CONTACT_FROM_NAME} <${env.CONTACT_FROM_EMAIL}>`,
    to: [recipientEmail],
    reply_to: env.CONTACT_TO_EMAIL,
    subject: step.subject,
    html: step.buildHtml(firstName),
    text: step.buildText(firstName),
  };
}

/** Send one nurture-sequence email. Throws on failure — caller decides how to handle per-recipient errors. */
export async function sendNurtureEmail(step: NurtureStep, recipientEmail: string, firstName: string): Promise<void> {
  const env = getEmailEnv();
  const payload = buildNurtureEmailPayload(step, recipientEmail, firstName, env);

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
