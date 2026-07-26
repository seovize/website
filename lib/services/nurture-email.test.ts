import { afterEach, describe, expect, it, vi } from "vitest";
import { buildNurtureEmailPayload, sendNurtureEmail } from "@/lib/services/nurture-email";
import { nurtureSchedule } from "@/lib/nurture-sequence";
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

describe("buildNurtureEmailPayload", () => {
  it("builds a payload addressed to the recipient using the step's subject and personalized content", () => {
    const step = nurtureSchedule[0];
    const payload = buildNurtureEmailPayload(step, "jamie@example.com", "Jamie", env);
    expect(payload.to).toEqual(["jamie@example.com"]);
    expect(payload.subject).toBe(step.subject);
    expect(payload.text).toContain("Jamie");
    expect(payload.html).toContain("Jamie");
  });
});

describe("sendNurtureEmail", () => {
  it("POSTs to Resend with the Bearer auth header on success", async () => {
    vi.stubEnv("RESEND_API_KEY", "secret");
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ id: "abc" }), { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    await expect(sendNurtureEmail(nurtureSchedule[0], "jamie@example.com", "Jamie")).resolves.toBeUndefined();

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.resend.com/emails");
    expect((init.headers as Record<string, string>).Authorization).toBe("Bearer secret");
  });

  it("throws when Resend returns a non-2xx response", async () => {
    vi.stubEnv("RESEND_API_KEY", "secret");
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("bad request", { status: 422 })));
    await expect(sendNurtureEmail(nurtureSchedule[0], "jamie@example.com", "Jamie")).rejects.toThrow(
      /Resend send failed/,
    );
  });
});
