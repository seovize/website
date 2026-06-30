import { z } from "zod";
import type { ContactFormData } from "@/lib/validation";

/**
 * Lead persistence + segmentation via Brevo's contact database.
 *
 * Architecture split: Resend (lib/services/contact.ts) handles transactional
 * delivery — the lead notification and auto-reply. Brevo is the system of
 * record for the lead itself (contact + custom attributes + list membership)
 * and the platform nurture sequences are built on, since Resend has no
 * built-in marketing automation.
 *
 * This module is intentionally best-effort: a Brevo failure must never
 * prevent a lead from being emailed. Callers should wrap `upsertLeadContact`
 * in try/catch and log on failure rather than propagate.
 *
 * Required env: BREVO_API_KEY
 * Optional env: BREVO_LIST_ID (defaults to the "Website Leads" list, id 4,
 * created under the "Seovize Website" folder)
 */
const BREVO_CONTACTS_ENDPOINT = "https://api.brevo.com/v3/contacts";

const brevoEnvSchema = z.object({
  BREVO_API_KEY: z.string().min(1, "BREVO_API_KEY is not configured"),
  BREVO_LIST_ID: z.coerce.number().int().positive().default(4),
});

export type BrevoEnv = z.infer<typeof brevoEnvSchema>;

export function getBrevoEnv(): BrevoEnv {
  const blankToUndefined = (v: string | undefined) => (v && v.trim() !== "" ? v : undefined);
  const parsed = brevoEnvSchema.safeParse({
    BREVO_API_KEY: process.env.BREVO_API_KEY,
    BREVO_LIST_ID: blankToUndefined(process.env.BREVO_LIST_ID),
  });
  if (!parsed.success) {
    const reason = parsed.error.issues.map((i) => i.message).join("; ");
    throw new Error(`Brevo environment misconfigured: ${reason}`);
  }
  return parsed.data;
}

export interface BrevoContactPayload {
  email: string;
  updateEnabled: true;
  listIds: number[];
  attributes: Record<string, string>;
}

/** Pure: build the Brevo upsert-contact request body from validated form data. */
export function buildBrevoContactPayload(data: ContactFormData, env: BrevoEnv): BrevoContactPayload {
  const [firstName, ...rest] = data.name.trim().split(/\s+/);
  const lastName = rest.join(" ");

  // Brevo's normal text attributes don't accept arbitrarily long values —
  // keep the message a short preview; the full text already lives in the
  // Resend notification email.
  const messagePreview = data.message ? data.message.slice(0, 300) : "";

  const attributes: Record<string, string> = {
    FIRSTNAME: firstName,
    ...(lastName ? { LASTNAME: lastName } : {}),
    WEBSITE: data.website,
    SERVICE_INTEREST: data.service ?? "General enquiry",
    FUNNEL_STAGE: "lead",
    // PHONE_NUMBER is a plain-text custom attribute (not Brevo's "SMS" field,
    // which validates as a sendable phone number and rejects free-form input —
    // confirmed via a live test where "512-555-0100" was rejected with
    // "Invalid phone number" and silently dropped the whole contact upsert).
    ...(data.phone ? { PHONE_NUMBER: data.phone } : {}),
    ...(data.company ? { COMPANY: data.company } : {}),
    ...(data.city ? { CITY: data.city } : {}),
    ...(data.sourcePage ? { SOURCE_PAGE: data.sourcePage } : {}),
    ...(data.utmSource ? { UTM_SOURCE: data.utmSource } : {}),
    ...(data.utmMedium ? { UTM_MEDIUM: data.utmMedium } : {}),
    ...(data.utmCampaign ? { UTM_CAMPAIGN: data.utmCampaign } : {}),
    ...(messagePreview ? { MESSAGE_PREVIEW: messagePreview } : {}),
  };

  return {
    email: data.email,
    updateEnabled: true,
    listIds: [env.BREVO_LIST_ID],
    attributes,
  };
}

/**
 * Upsert the lead into Brevo's contact database. Throws on misconfiguration
 * or a non-2xx Brevo response — callers must treat this as best-effort and
 * catch failures so a Brevo outage never blocks lead delivery.
 */
export async function upsertLeadContact(data: ContactFormData): Promise<void> {
  const env = getBrevoEnv();
  const payload = buildBrevoContactPayload(data, env);

  const res = await fetch(BREVO_CONTACTS_ENDPOINT, {
    method: "POST",
    headers: {
      "api-key": env.BREVO_API_KEY,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  // Brevo returns 204 on update-of-existing-contact, 201 on create.
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Brevo contact upsert failed (${res.status}): ${body}`);
  }
}
