import { afterEach, describe, expect, it, vi } from "vitest";
import { contactFormSchema } from "@/lib/validation";
import {
  buildConfirmationPayload,
  buildResendPayload,
  getEmailEnv,
  sendContactEmail,
  type EmailEnv,
} from "@/lib/services/contact";

const validInput = {
  name: "Jane Doe",
  email: "jane@example.com",
  website: "https://example.com",
  service: "SEO Services",
  city: "Dallas",
  message: "We need help ranking in Dallas.",
};

const env: EmailEnv = {
  RESEND_API_KEY: "test-key",
  CONTACT_TO_EMAIL: "info@seovize.com",
  CONTACT_FROM_EMAIL: "info@seovize.com",
  CONTACT_FROM_NAME: "Seovize Website",
};

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

describe("contactFormSchema", () => {
  it("accepts a complete valid payload", () => {
    expect(contactFormSchema.safeParse(validInput).success).toBe(true);
  });

  it("normalizes empty optional fields to undefined", () => {
    const parsed = contactFormSchema.parse({ ...validInput, service: "", city: "", message: "" });
    expect(parsed.service).toBeUndefined();
    expect(parsed.city).toBeUndefined();
    expect(parsed.message).toBeUndefined();
  });

  it("rejects missing name and bad email", () => {
    expect(contactFormSchema.safeParse({ ...validInput, name: "" }).success).toBe(false);
    expect(contactFormSchema.safeParse({ ...validInput, email: "not-an-email" }).success).toBe(false);
  });

  it("requires a valid website URL (needed to run the audit)", () => {
    expect(contactFormSchema.safeParse({ ...validInput, website: "" }).success).toBe(false);
    expect(contactFormSchema.safeParse({ ...validInput, website: "notaurl" }).success).toBe(false);
  });

  it("allows an omitted message", () => {
    const parsed = contactFormSchema.safeParse({ ...validInput, message: "" });
    expect(parsed.success).toBe(true);
  });
});

describe("buildResendPayload", () => {
  it("routes to the configured inbox and replies to the lead", () => {
    const data = contactFormSchema.parse(validInput);
    const payload = buildResendPayload(data, env);
    expect(payload.to).toEqual(["info@seovize.com"]);
    expect(payload.from).toBe("Seovize Website <info@seovize.com>");
    expect(payload.reply_to).toBe("jane@example.com");
    expect(payload.subject).toContain("SEO Services");
    expect(payload.text).toContain("We need help ranking in Dallas.");
  });

  it("escapes HTML in user content to prevent injection", () => {
    const data = contactFormSchema.parse({ ...validInput, message: "<script>alert(1)</script>" });
    const payload = buildResendPayload(data, env);
    expect(payload.html).not.toContain("<script>");
    expect(payload.html).toContain("&lt;script&gt;");
  });

  it("falls back gracefully when no message is provided", () => {
    const data = contactFormSchema.parse({ ...validInput, message: "" });
    const payload = buildResendPayload(data, env);
    expect(payload.text).toContain("(no message provided)");
  });
});

describe("buildConfirmationPayload", () => {
  it("sends the auto-reply to the lead and replies to the inbox", () => {
    const data = contactFormSchema.parse(validInput);
    const payload = buildConfirmationPayload(data, env);
    expect(payload.to).toEqual(["jane@example.com"]);
    expect(payload.reply_to).toBe("info@seovize.com");
    expect(payload.subject).toMatch(/received/i);
    expect(payload.text).toContain("Hi Jane,");
  });
});

describe("getEmailEnv", () => {
  it("throws a clear error when RESEND_API_KEY is missing", () => {
    vi.stubEnv("RESEND_API_KEY", "");
    expect(() => getEmailEnv()).toThrow(/RESEND_API_KEY/);
  });

  it("applies sensible defaults when only the key is set", () => {
    vi.stubEnv("RESEND_API_KEY", "k");
    vi.stubEnv("CONTACT_TO_EMAIL", "");
    vi.stubEnv("CONTACT_FROM_EMAIL", "");
    vi.stubEnv("CONTACT_FROM_NAME", "");
    const resolved = getEmailEnv();
    expect(resolved.CONTACT_TO_EMAIL).toBe("info@seovize.com");
    expect(resolved.CONTACT_FROM_NAME).toBe("Seovize Website");
  });
});

describe("sendContactEmail", () => {
  it("POSTs to Resend with the Bearer auth header on success", async () => {
    vi.stubEnv("RESEND_API_KEY", "secret");
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ id: "abc" }), { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    await expect(sendContactEmail(contactFormSchema.parse(validInput))).resolves.toBeUndefined();

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.resend.com/emails");
    expect((init.headers as Record<string, string>).Authorization).toBe("Bearer secret");
  });

  it("throws when Resend returns a non-2xx response", async () => {
    vi.stubEnv("RESEND_API_KEY", "secret");
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("bad request", { status: 422 })));
    await expect(sendContactEmail(contactFormSchema.parse(validInput))).rejects.toThrow(/Resend send failed/);
  });
});
