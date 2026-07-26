import { z } from "zod";
import type { ContactFormData, ReportSignupData } from "@/lib/validation";

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
  attributes: Record<string, string | number>;
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

async function postContactToBrevo(payload: BrevoContactPayload, apiKey: string): Promise<void> {
  const res = await fetch(BREVO_CONTACTS_ENDPOINT, {
    method: "POST",
    headers: {
      "api-key": apiKey,
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

/**
 * Upsert the lead into Brevo's contact database. Throws on misconfiguration
 * or a non-2xx Brevo response — callers must treat this as best-effort and
 * catch failures so a Brevo outage never blocks lead delivery.
 */
export async function upsertLeadContact(data: ContactFormData): Promise<void> {
  const env = getBrevoEnv();
  await postContactToBrevo(buildBrevoContactPayload(data, env), env.BREVO_API_KEY);
}

/**
 * Pure: build the Brevo upsert-contact request body for a report-signup lead.
 * `today` is injected (rather than computed with `new Date()` inline) so this
 * stays a pure, deterministic function for testing.
 */
export function buildReportSignupPayload(
  data: ReportSignupData,
  env: BrevoEnv,
  today: string,
): BrevoContactPayload {
  const [firstName, ...rest] = (data.name ?? "").trim().split(/\s+/).filter(Boolean);
  const lastName = rest.join(" ");

  const attributes: Record<string, string | number> = {
    ...(firstName ? { FIRSTNAME: firstName } : {}),
    ...(lastName ? { LASTNAME: lastName } : {}),
    FUNNEL_STAGE: "report_download",
    // Nurture-sequence state (see lib/nurture-sequence.ts) — SIGNUP_DATE is
    // the sequence clock, SEQUENCE_STEP is how far the daily cron job has
    // progressed. Step 0 = only the immediate confirmation email sent.
    SIGNUP_DATE: today,
    SEQUENCE_STEP: 0,
    SOURCE_PAGE: data.sourcePage ?? "/research/texas-digital-marketing-report-2026",
    ...(data.utmSource ? { UTM_SOURCE: data.utmSource } : {}),
    ...(data.utmMedium ? { UTM_MEDIUM: data.utmMedium } : {}),
    ...(data.utmCampaign ? { UTM_CAMPAIGN: data.utmCampaign } : {}),
  };

  return {
    email: data.email,
    updateEnabled: true,
    listIds: [env.BREVO_LIST_ID],
    attributes,
  };
}

/**
 * Upsert a report-signup lead into Brevo, tagged FUNNEL_STAGE=report_download
 * so it can be segmented separately from audit-request leads and used as the
 * trigger for the Texas report nurture sequence (Phase 2).
 */
export async function upsertReportSignup(data: ReportSignupData): Promise<void> {
  const env = getBrevoEnv();
  const today = new Date().toISOString().slice(0, 10);
  await postContactToBrevo(buildReportSignupPayload(data, env, today), env.BREVO_API_KEY);
}

export interface NurtureContact {
  email: string;
  firstName: string;
  signupDate: string;
  sequenceStep: number;
  lastSentDate: string | null;
}

/**
 * Fetch every contact in the Website Leads list tagged FUNNEL_STAGE=report_download
 * with valid nurture-sequence state, paginating through Brevo's list-contacts
 * endpoint. Used by the daily cron job (app/api/cron/nurture/route.ts) — this
 * doubles as the "database" for sequence state, so no separate DB is needed.
 */
export async function getReportDownloadContacts(): Promise<NurtureContact[]> {
  const env = getBrevoEnv();
  const results: NurtureContact[] = [];
  const limit = 50;
  let offset = 0;

  for (;;) {
    const res = await fetch(
      `https://api.brevo.com/v3/contacts/lists/${env.BREVO_LIST_ID}/contacts?limit=${limit}&offset=${offset}`,
      { headers: { "api-key": env.BREVO_API_KEY, accept: "application/json" } },
    );
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`Brevo list-contacts fetch failed (${res.status}): ${body}`);
    }
    const data = (await res.json()) as {
      contacts: { email: string; attributes: Record<string, unknown> }[];
      count: number;
    };

    for (const c of data.contacts) {
      const attrs = c.attributes;
      if (attrs.FUNNEL_STAGE !== "report_download") continue;
      if (typeof attrs.SIGNUP_DATE !== "string") continue;
      results.push({
        email: c.email,
        firstName: typeof attrs.FIRSTNAME === "string" ? attrs.FIRSTNAME : "there",
        signupDate: attrs.SIGNUP_DATE,
        sequenceStep: typeof attrs.SEQUENCE_STEP === "number" ? attrs.SEQUENCE_STEP : 0,
        lastSentDate: typeof attrs.LAST_SENT_DATE === "string" ? attrs.LAST_SENT_DATE : null,
      });
    }

    offset += limit;
    if (offset >= data.count || data.contacts.length === 0) break;
  }

  return results;
}

/**
 * Advance a contact's nurture-sequence progress after successfully sending a
 * step's email. Also stamps LAST_SENT_DATE=today, which the cron route uses
 * as a same-day guard — without it, a contact that's badly overdue (e.g. the
 * cron was down for a week, or it's manually re-triggered) would cascade
 * through several steps in a single run instead of advancing at most once
 * per calendar day.
 */
export async function advanceSequenceStep(email: string, step: number, today: string): Promise<void> {
  const env = getBrevoEnv();
  const res = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`, {
    method: "PUT",
    headers: {
      "api-key": env.BREVO_API_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify({ attributes: { SEQUENCE_STEP: step, LAST_SENT_DATE: today } }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Brevo sequence-step update failed (${res.status}): ${body}`);
  }
}
