import { z } from "zod";

/**
 * Contact form payload validation.
 *
 * Mirrors the fields in app/contact/page.tsx. Optional fields accept an empty
 * string from the HTML form and are normalized to `undefined` so downstream
 * code can treat "not provided" consistently.
 */
const emptyToUndefined = (v: unknown) =>
  typeof v === "string" && v.trim() === "" ? undefined : v;

const optionalText = (max: number) =>
  z.preprocess(emptyToUndefined, z.string().trim().max(max).optional());

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(120),
  email: z.string().trim().email("A valid email is required."),
  // Required: we cannot run an audit without the site URL.
  website: z.string().trim().url("A valid website URL is required.").max(2048),
  service: optionalText(120),
  city: optionalText(120),
  // Optional free-text context.
  message: optionalText(5000),
  // Optional contact/qualification fields.
  phone: optionalText(40),
  company: optionalText(160),
  // Lead-source metadata — captured client-side, used for Brevo segmentation only.
  sourcePage: optionalText(2048),
  utmSource: optionalText(160),
  utmMedium: optionalText(160),
  utmCampaign: optionalText(160),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
