import { afterEach, describe, expect, it, vi } from "vitest";
import { ProviderNotConfiguredError, ProviderRequestError } from "@/lib/services/lead-log";

const upsertReportSignup = vi.fn();
const sendReportSignupConfirmation = vi.fn();

vi.mock("@/lib/services/brevo", () => ({
  upsertReportSignup: (...args: unknown[]) => upsertReportSignup(...args),
}));
vi.mock("@/lib/services/report-signup", () => ({
  sendReportSignupConfirmation: (...args: unknown[]) => sendReportSignupConfirmation(...args),
}));

const { POST } = await import("@/app/api/report-signup/route");

function makeRequest(fields: Record<string, string> = { email: "jane@example.com" }): Request {
  const body = new URLSearchParams(fields);
  return new Request("https://seovize.com/api/report-signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Referer: "https://seovize.com/research/texas-digital-marketing-report-2026",
    },
    body: body.toString(),
  });
}

afterEach(() => {
  vi.clearAllMocks();
});

describe("POST /api/report-signup", () => {
  it("rejects validation failures (missing/invalid email) without calling Brevo", async () => {
    const res = await POST(makeRequest({ email: "not-an-email" }));
    expect(res.headers.get("location")).toContain("report=error");
    expect(upsertReportSignup).not.toHaveBeenCalled();
  });

  it("silently accepts honeypot-filled submissions without calling any provider", async () => {
    const res = await POST(makeRequest({ email: "jane@example.com", hp_field: "bot" }));
    expect(res.headers.get("location")).toContain("report=sent");
    expect(upsertReportSignup).not.toHaveBeenCalled();
  });

  it("fails honestly (report=error) when Brevo is not configured — never a false success", async () => {
    upsertReportSignup.mockRejectedValue(new ProviderNotConfiguredError("brevo", "no key"));
    const res = await POST(makeRequest());
    expect(res.headers.get("location")).toContain("report=error");
  });

  it("fails honestly (report=error) when the Brevo request itself fails", async () => {
    upsertReportSignup.mockRejectedValue(new ProviderRequestError("brevo", 500, "down"));
    const res = await POST(makeRequest());
    expect(res.headers.get("location")).toContain("report=error");
  });

  it("succeeds when Brevo succeeds, even if the confirmation email fails (best-effort)", async () => {
    upsertReportSignup.mockResolvedValue(undefined);
    sendReportSignupConfirmation.mockRejectedValue(new ProviderRequestError("resend", 500, "down"));

    const res = await POST(makeRequest());
    expect(res.headers.get("location")).toContain("report=sent");
  });

  it("succeeds when both Brevo and the confirmation email succeed", async () => {
    upsertReportSignup.mockResolvedValue(undefined);
    sendReportSignupConfirmation.mockResolvedValue(undefined);

    const res = await POST(makeRequest());
    expect(res.headers.get("location")).toContain("report=sent");
  });

  it("treats a Brevo timeout as a failure, not a hang or a false success", async () => {
    upsertReportSignup.mockImplementation(() => new Promise(() => {}));
    const res = await POST(makeRequest());
    expect(res.headers.get("location")).toContain("report=error");
  }, 15000);
});
