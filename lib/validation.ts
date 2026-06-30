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

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(120),
  email: z.string().trim().email("A valid email is required."),
  // Required: we cannot run an audit without the site URL.
  website: z.string().trim().url("A valid website URL is required.").max(2048),
  service: z.preprocess(emptyToUndefined, z.string().trim().max(120).optional()),
  city: z.preprocess(emptyToUndefined, z.string().trim().max(120).optional()),
  // Optional free-text context.
  message: z.preprocess(emptyToUndefined, z.string().trim().max(5000).optional()),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
