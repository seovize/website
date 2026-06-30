import { afterEach, describe, expect, it, vi } from "vitest";
import { contactFormSchema } from "@/lib/validation";
import { buildBrevoContactPayload, getBrevoEnv, upsertLeadContact, type BrevoEnv } from "@/lib/services/brevo";

const validInput = {
  name: "Jane Doe",
  email: "jane@example.com",
  website: "https://example.com",
  service: "SEO Services",
  city: "Dallas",
  message: "We need help ranking in Dallas.",
  phone: "555-123-4567",
  company: "Acme Co",
  sourcePage: "https://seovize.com/pricing",
  utmSource: "newsletter",
  utmMedium: "email",
  utmCampaign: "spring-launch",
};

const env: BrevoEnv = {
  BREVO_API_KEY: "test-key",
  BREVO_LIST_ID: 4,
};

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

describe("buildBrevoContactPayload", () => {
  it("maps form data onto Brevo attributes and the configured list", () => {
    const data = contactFormSchema.parse(validInput);
    const payload = buildBrevoContactPayload(data, env);
    expect(payload.email).toBe("jane@example.com");
    expect(payload.listIds).toEqual([4]);
    expect(payload.updateEnabled).toBe(true);
    expect(payload.attributes.FIRSTNAME).toBe("Jane");
    expect(payload.attributes.LASTNAME).toBe("Doe");
    expect(payload.attributes.COMPANY).toBe("Acme Co");
    expect(payload.attributes.PHONE_NUMBER).toBe("555-123-4567");
    expect(payload.attributes.SERVICE_INTEREST).toBe("SEO Services");
    expect(payload.attributes.CITY).toBe("Dallas");
    expect(payload.attributes.SOURCE_PAGE).toBe("https://seovize.com/pricing");
    expect(payload.attributes.UTM_SOURCE).toBe("newsletter");
    expect(payload.attributes.FUNNEL_STAGE).toBe("lead");
  });

  it("omits optional attributes that were not provided", () => {
    const data = contactFormSchema.parse({
      name: "Solo",
      email: "solo@example.com",
      website: "https://example.com",
    });
    const payload = buildBrevoContactPayload(data, env);
    expect(payload.attributes.LASTNAME).toBeUndefined();
    expect(payload.attributes.COMPANY).toBeUndefined();
    expect(payload.attributes.PHONE_NUMBER).toBeUndefined();
    expect(payload.attributes.SERVICE_INTEREST).toBe("General enquiry");
  });

  it("truncates long messages to a short preview", () => {
    const longMessage = "x".repeat(500);
    const data = contactFormSchema.parse({ ...validInput, message: longMessage });
    const payload = buildBrevoContactPayload(data, env);
    expect(payload.attributes.MESSAGE_PREVIEW.length).toBe(300);
  });
});

describe("getBrevoEnv", () => {
  it("throws a clear error when BREVO_API_KEY is missing", () => {
    vi.stubEnv("BREVO_API_KEY", "");
    expect(() => getBrevoEnv()).toThrow(/BREVO_API_KEY/);
  });

  it("defaults BREVO_LIST_ID to 4 when unset", () => {
    vi.stubEnv("BREVO_API_KEY", "k");
    vi.stubEnv("BREVO_LIST_ID", "");
    expect(getBrevoEnv().BREVO_LIST_ID).toBe(4);
  });
});

describe("upsertLeadContact", () => {
  it("POSTs to Brevo with the api-key header on success", async () => {
    vi.stubEnv("BREVO_API_KEY", "secret");
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ id: 1 }), { status: 201 }));
    vi.stubGlobal("fetch", fetchMock);

    await expect(upsertLeadContact(contactFormSchema.parse(validInput))).resolves.toBeUndefined();

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.brevo.com/v3/contacts");
    expect((init.headers as Record<string, string>)["api-key"]).toBe("secret");
  });

  it("throws when Brevo returns a non-2xx response (caller must catch)", async () => {
    vi.stubEnv("BREVO_API_KEY", "secret");
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("bad request", { status: 400 })));
    await expect(upsertLeadContact(contactFormSchema.parse(validInput))).rejects.toThrow(
      /Brevo contact upsert failed/,
    );
  });
});
