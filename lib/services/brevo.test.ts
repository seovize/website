import { afterEach, describe, expect, it, vi } from "vitest";
import { contactFormSchema, reportSignupSchema } from "@/lib/validation";
import {
  advanceSequenceStep,
  buildBrevoContactPayload,
  buildReportSignupPayload,
  getBrevoEnv,
  getReportDownloadContacts,
  upsertLeadContact,
  upsertReportSignup,
  type BrevoEnv,
} from "@/lib/services/brevo";

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
    expect(String(payload.attributes.MESSAGE_PREVIEW).length).toBe(300);
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

describe("buildReportSignupPayload", () => {
  it("tags the lead with FUNNEL_STAGE=report_download and seeds nurture-sequence state", () => {
    const data = reportSignupSchema.parse({
      name: "Jamie Rivera",
      email: "jamie@example.com",
      utmSource: "linkedin",
    });
    const payload = buildReportSignupPayload(data, env, "2026-07-01");
    expect(payload.email).toBe("jamie@example.com");
    expect(payload.listIds).toEqual([4]);
    expect(payload.attributes.FUNNEL_STAGE).toBe("report_download");
    expect(payload.attributes.FIRSTNAME).toBe("Jamie");
    expect(payload.attributes.LASTNAME).toBe("Rivera");
    expect(payload.attributes.UTM_SOURCE).toBe("linkedin");
    expect(payload.attributes.SOURCE_PAGE).toBe("/research/texas-digital-marketing-report-2026");
    expect(payload.attributes.SIGNUP_DATE).toBe("2026-07-01");
    expect(payload.attributes.SEQUENCE_STEP).toBe(0);
  });

  it("works with only an email — name is optional for this soft-gate form", () => {
    const data = reportSignupSchema.parse({ email: "anon@example.com" });
    const payload = buildReportSignupPayload(data, env, "2026-07-01");
    expect(payload.attributes.FIRSTNAME).toBeUndefined();
    expect(payload.attributes.FUNNEL_STAGE).toBe("report_download");
  });
});

describe("upsertReportSignup", () => {
  it("POSTs to Brevo with the api-key header on success", async () => {
    vi.stubEnv("BREVO_API_KEY", "secret");
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ id: 2 }), { status: 201 }));
    vi.stubGlobal("fetch", fetchMock);

    await expect(
      upsertReportSignup(reportSignupSchema.parse({ email: "lead@example.com" })),
    ).resolves.toBeUndefined();

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.brevo.com/v3/contacts");
    expect((init.headers as Record<string, string>)["api-key"]).toBe("secret");
  });
});

describe("getReportDownloadContacts", () => {
  it("filters to report_download contacts and maps nurture-sequence fields", async () => {
    vi.stubEnv("BREVO_API_KEY", "secret");
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify({
            count: 2,
            contacts: [
              {
                email: "a@example.com",
                attributes: { FUNNEL_STAGE: "report_download", SIGNUP_DATE: "2026-06-01", SEQUENCE_STEP: 2, FIRSTNAME: "Ava" },
              },
              {
                email: "b@example.com",
                attributes: { FUNNEL_STAGE: "lead", SIGNUP_DATE: "2026-06-01" },
              },
            ],
          }),
          { status: 200 },
        ),
      ),
    );

    const contacts = await getReportDownloadContacts();
    expect(contacts).toHaveLength(1);
    expect(contacts[0]).toEqual({
      email: "a@example.com",
      firstName: "Ava",
      signupDate: "2026-06-01",
      sequenceStep: 2,
      lastSentDate: null,
    });
  });

  it("defaults sequenceStep to 0 and firstName to 'there' when missing", async () => {
    vi.stubEnv("BREVO_API_KEY", "secret");
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify({
            count: 1,
            contacts: [{ email: "c@example.com", attributes: { FUNNEL_STAGE: "report_download", SIGNUP_DATE: "2026-06-01" } }],
          }),
          { status: 200 },
        ),
      ),
    );

    const contacts = await getReportDownloadContacts();
    expect(contacts[0].sequenceStep).toBe(0);
    expect(contacts[0].firstName).toBe("there");
  });
});

describe("advanceSequenceStep", () => {
  it("PUTs the new step to Brevo's single-contact endpoint", async () => {
    vi.stubEnv("BREVO_API_KEY", "secret");
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 204 }));
    vi.stubGlobal("fetch", fetchMock);

    await expect(advanceSequenceStep("a@example.com", 3, "2026-07-26")).resolves.toBeUndefined();

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.brevo.com/v3/contacts/a%40example.com");
    expect(init.method).toBe("PUT");
    expect(JSON.parse(init.body as string)).toEqual({
      attributes: { SEQUENCE_STEP: 3, LAST_SENT_DATE: "2026-07-26" },
    });
  });
});
