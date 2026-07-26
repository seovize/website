import { afterEach, describe, expect, it, vi } from "vitest";
import { reportSignupSchema } from "@/lib/validation";
import { buildReportSignupConfirmation, sendReportSignupConfirmation } from "@/lib/services/report-signup";
import type { EmailEnv } from "@/lib/services/contact";

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

describe("buildReportSignupConfirmation", () => {
  it("greets the lead by first name and links the report", () => {
    const data = reportSignupSchema.parse({ name: "Jamie Rivera", email: "jamie@example.com" });
    const payload = buildReportSignupConfirmation(data, env);
    expect(payload.to).toEqual(["jamie@example.com"]);
    expect(payload.text).toContain("Hi Jamie,");
    expect(payload.html).toContain("texas-digital-marketing-report-2026");
  });

  it("falls back to a generic greeting when no name is provided", () => {
    const data = reportSignupSchema.parse({ email: "anon@example.com" });
    const payload = buildReportSignupConfirmation(data, env);
    expect(payload.text).toContain("Hi,");
  });
});

describe("sendReportSignupConfirmation", () => {
  it("POSTs to Resend with the Bearer auth header on success", async () => {
    vi.stubEnv("RESEND_API_KEY", "secret");
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ id: "abc" }), { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    await expect(
      sendReportSignupConfirmation(reportSignupSchema.parse({ email: "jamie@example.com" })),
    ).resolves.toBeUndefined();

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.resend.com/emails");
    expect((init.headers as Record<string, string>).Authorization).toBe("Bearer secret");
  });

  it("throws when Resend returns a non-2xx response", async () => {
    vi.stubEnv("RESEND_API_KEY", "secret");
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("bad request", { status: 422 })));
    await expect(
      sendReportSignupConfirmation(reportSignupSchema.parse({ email: "jamie@example.com" })),
    ).rejects.toThrow(/Resend send failed/);
  });
});
