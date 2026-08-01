import { afterEach, describe, expect, it, vi } from "vitest";
import { ProviderNotConfiguredError, ProviderRequestError } from "@/lib/services/lead-log";

const sendContactEmail = vi.fn();
const sendLeadConfirmation = vi.fn();
const upsertLeadContact = vi.fn();

vi.mock("@/lib/services/contact", () => ({
  sendContactEmail: (...args: unknown[]) => sendContactEmail(...args),
  sendLeadConfirmation: (...args: unknown[]) => sendLeadConfirmation(...args),
}));
vi.mock("@/lib/services/brevo", () => ({
  upsertLeadContact: (...args: unknown[]) => upsertLeadContact(...args),
}));

// Imported after the mocks above so the route picks up the mocked modules.
const { POST } = await import("@/app/api/contact/route");

const validFields: Record<string, string> = {
  name: "Jane Doe",
  email: "jane@example.com",
  website: "https://example.com",
  service: "SEO Services",
  city: "Dallas",
  message: "We need help ranking in Dallas.",
};

function makeRequest(fields: Record<string, string> = validFields): Request {
  const body = new URLSearchParams(fields);
  return new Request("https://seovize.com/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
}

afterEach(() => {
  vi.clearAllMocks();
});

describe("POST /api/contact", () => {
  it("rejects validation failures without calling any provider", async () => {
    const res = await POST(makeRequest({ ...validFields, email: "not-an-email" }));
    expect(res.status).toBe(303);
    expect(res.headers.get("location")).toContain("error=validation");
    expect(sendContactEmail).not.toHaveBeenCalled();
    expect(upsertLeadContact).not.toHaveBeenCalled();
  });

  it("silently accepts honeypot-filled submissions without calling any provider", async () => {
    const res = await POST(makeRequest({ ...validFields, hp_field: "i-am-a-bot" }));
    expect(res.status).toBe(303);
    expect(res.headers.get("location")).toContain("success=true");
    expect(sendContactEmail).not.toHaveBeenCalled();
    expect(upsertLeadContact).not.toHaveBeenCalled();
  });

  it("reports success when neither provider is configured -> failure (not a false success)", async () => {
    upsertLeadContact.mockRejectedValue(new ProviderNotConfiguredError("brevo", "no key"));
    sendContactEmail.mockRejectedValue(new ProviderNotConfiguredError("resend", "no key"));

    const res = await POST(makeRequest());
    expect(res.headers.get("location")).toContain("error=send");
  });

  it("succeeds when only the primary (Brevo) provider succeeds", async () => {
    upsertLeadContact.mockResolvedValue(undefined);
    sendContactEmail.mockRejectedValue(new ProviderRequestError("resend", 500, "down"));
    sendLeadConfirmation.mockResolvedValue(undefined);

    const res = await POST(makeRequest());
    expect(res.headers.get("location")).toContain("success=true");
  });

  it("succeeds when only the secondary (Resend) provider succeeds", async () => {
    upsertLeadContact.mockRejectedValue(new ProviderRequestError("brevo", 500, "down"));
    sendContactEmail.mockResolvedValue(undefined);
    sendLeadConfirmation.mockResolvedValue(undefined);

    const res = await POST(makeRequest());
    expect(res.headers.get("location")).toContain("success=true");
  });

  it("succeeds when both providers succeed", async () => {
    upsertLeadContact.mockResolvedValue(undefined);
    sendContactEmail.mockResolvedValue(undefined);
    sendLeadConfirmation.mockResolvedValue(undefined);

    const res = await POST(makeRequest());
    expect(res.headers.get("location")).toContain("success=true");
  });

  it("fails when both providers fail", async () => {
    upsertLeadContact.mockRejectedValue(new ProviderRequestError("brevo", 500, "down"));
    sendContactEmail.mockRejectedValue(new ProviderRequestError("resend", 500, "down"));

    const res = await POST(makeRequest());
    expect(res.headers.get("location")).toContain("error=send");
  });

  it("logs partial_success (not plain success) when exactly one provider succeeds", async () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    upsertLeadContact.mockResolvedValue(undefined);
    sendContactEmail.mockRejectedValue(new ProviderRequestError("resend", 500, "down"));
    sendLeadConfirmation.mockResolvedValue(undefined);

    await POST(makeRequest());

    const summary = logSpy.mock.calls
      .map((c) => JSON.parse(c[0] as string))
      .find((l) => l.event === "lead_submission");
    expect(summary?.outcome).toBe("partial_success");
  });

  it("derives a stable idempotency key so a duplicate (same content) submission reuses it", async () => {
    upsertLeadContact.mockResolvedValue(undefined);
    sendContactEmail.mockResolvedValue(undefined);
    sendLeadConfirmation.mockResolvedValue(undefined);

    await POST(makeRequest());
    await POST(makeRequest());

    const firstKey = sendContactEmail.mock.calls[0]?.[1];
    const secondKey = sendContactEmail.mock.calls[1]?.[1];
    expect(firstKey).toBeTruthy();
    expect(firstKey).toBe(secondKey);
  });

  it("treats a provider timeout the same as a provider failure (does not hang or crash)", async () => {
    upsertLeadContact.mockImplementation(() => new Promise(() => {})); // never resolves
    sendContactEmail.mockResolvedValue(undefined);
    sendLeadConfirmation.mockResolvedValue(undefined);

    const res = await POST(makeRequest());
    // Resend (secondary) succeeded, Brevo (primary) timed out -> still a
    // durable-enough capture per the route's own success definition.
    expect(res.headers.get("location")).toContain("success=true");
  }, 15000);
});
