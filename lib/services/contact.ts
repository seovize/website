import { z } from "zod";
import type { ContactFormData } from "@/lib/validation";

/**
 * Contact-submission delivery via Resend transactional email.
 *
 * The route handler is a thin boundary; all email logic lives here so it can be
 * unit-tested in isolation. The Resend payload builder is a pure function.
 *
 * Required env: RESEND_API_KEY
 * Optional env (with defaults): CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL, CONTACT_FROM_NAME
 *
 * NOTE: CONTACT_FROM_EMAIL must be on a domain you have verified in Resend
 * (Domains → Add Domain → DNS records). Until the domain is verified you can only
 * send from `onboarding@resend.dev` to your own account email.
 */
const RESEND_ENDPOINT = "https://api.resend.com/emails";

const emailEnvSchema = z.object({
  RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY is not configured"),
  CONTACT_TO_EMAIL: z.string().email().default("info@seovize.com"),
  CONTACT_FROM_EMAIL: z.string().email().default("info@seovize.com"),
  CONTACT_FROM_NAME: z.string().min(1).default("Seovize Website"),
});

export type EmailEnv = z.infer<typeof emailEnvSchema>;

export function getEmailEnv(): EmailEnv {
  // Treat blank env values (e.g. `CONTACT_TO_EMAIL=`) as unset so defaults apply.
  const blankToUndefined = (v: string | undefined) => (v && v.trim() !== "" ? v : undefined);
  const parsed = emailEnvSchema.safeParse({
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CONTACT_TO_EMAIL: blankToUndefined(process.env.CONTACT_TO_EMAIL),
    CONTACT_FROM_EMAIL: blankToUndefined(process.env.CONTACT_FROM_EMAIL),
    CONTACT_FROM_NAME: blankToUndefined(process.env.CONTACT_FROM_NAME),
  });
  if (!parsed.success) {
    const reason = parsed.error.issues.map((i) => i.message).join("; ");
    throw new Error(`Email environment misconfigured: ${reason}`);
  }
  return parsed.data;
}

/** Escape user-supplied text before embedding in HTML email body. */
function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export interface ResendEmailPayload {
  from: string;
  to: string[];
  reply_to: string;
  subject: string;
  html: string;
  text: string;
}

/** Pure: build the Resend request body from validated form data + resolved env. */
export function buildResendPayload(data: ContactFormData, env: EmailEnv): ResendEmailPayload {
  const service = data.service ?? "General enquiry";
  const message = data.message ?? "(no message provided)";
  const subject = `New audit request — ${service} — ${data.name}`;

  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Website", data.website],
    ["Service", service],
    ["Texas city", data.city ?? "—"],
  ];

  const text = [
    "New contact request from seovize.com",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#0B1020">
      <h2 style="margin:0 0 16px">New contact request — seovize.com</h2>
      <table style="border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:4px 12px 4px 0;color:#475569"><strong>${esc(
                k,
              )}</strong></td><td style="padding:4px 0">${esc(v)}</td></tr>`,
          )
          .join("")}
      </table>
      <p style="margin:16px 0 4px;color:#475569"><strong>Message</strong></p>
      <p style="white-space:pre-wrap;font-size:14px;line-height:1.6">${esc(message)}</p>
    </div>`.trim();

  return {
    from: `${env.CONTACT_FROM_NAME} <${env.CONTACT_FROM_EMAIL}>`,
    to: [env.CONTACT_TO_EMAIL],
    // Reply-To the lead so a reply in the inbox goes straight back to them.
    reply_to: data.email,
    subject,
    html,
    text,
  };
}

/** Pure: build the confirmation auto-reply sent back to the lead. */
export function buildConfirmationPayload(data: ContactFormData, env: EmailEnv): ResendEmailPayload {
  const firstName = data.name.split(/\s+/)[0] || data.name;
  const subject = "We received your request — Seovize";

  const text = [
    `Hi ${firstName},`,
    "",
    "Thanks for reaching out to Seovize. Your request has been received.",
    "Abdul Ghani will personally review your site and respond within one business day with a prioritized growth roadmap.",
    "",
    "— Seovize · Build authority. Capture demand.",
  ].join("\n");

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#0B1020;line-height:1.6">
      <p>Hi ${esc(firstName)},</p>
      <p>Thanks for reaching out to <strong>Seovize</strong>. Your request has been received.</p>
      <p>Abdul Ghani will personally review your site and respond within <strong>one business day</strong>
      with a prioritized growth roadmap.</p>
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

async function postToResend(payload: ResendEmailPayload, apiKey: string): Promise<void> {
  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Resend send failed (${res.status}): ${body}`);
  }
}

/** Send the internal lead notification. Throws on misconfiguration or a non-2xx Resend response. */
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const env = getEmailEnv();
  await postToResend(buildResendPayload(data, env), env.RESEND_API_KEY);
}

/** Send the confirmation auto-reply to the lead. Throws on failure (caller decides if non-blocking). */
export async function sendLeadConfirmation(data: ContactFormData): Promise<void> {
  const env = getEmailEnv();
  await postToResend(buildConfirmationPayload(data, env), env.RESEND_API_KEY);
}
