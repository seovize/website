import { afterEach, describe, expect, it, vi } from "vitest";
import {
  classifyProviderError,
  logLeadOutcome,
  ProviderNotConfiguredError,
  ProviderRequestError,
} from "@/lib/services/lead-log";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("classifyProviderError", () => {
  it("classifies a ProviderNotConfiguredError as not_configured", () => {
    expect(classifyProviderError(new ProviderNotConfiguredError("resend", "missing key"))).toBe("not_configured");
  });

  it("classifies a ProviderRequestError as request_failed", () => {
    expect(classifyProviderError(new ProviderRequestError("brevo", 500, "server error"))).toBe("request_failed");
  });

  it("classifies any other error (or non-error) as unknown", () => {
    expect(classifyProviderError(new Error("generic"))).toBe("unknown");
    expect(classifyProviderError("not even an error")).toBe("unknown");
    expect(classifyProviderError(undefined)).toBe("unknown");
  });
});

describe("logLeadOutcome", () => {
  it("logs a single structured JSON line with the route, outcome, and detail", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    logLeadOutcome("/api/contact", "email_send_failed", { provider: "resend", status: 500 });

    expect(spy).toHaveBeenCalledTimes(1);
    const logged = JSON.parse(spy.mock.calls[0][0] as string);
    expect(logged).toMatchObject({
      event: "lead_submission",
      route: "/api/contact",
      outcome: "email_send_failed",
      provider: "resend",
      status: 500,
    });
    expect(typeof logged.timestamp).toBe("string");
  });

  it("never includes any field beyond the known-safe set (no PII surface)", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    logLeadOutcome("/api/report-signup", "success");

    // provider/status are omitted (not just empty) when no detail is passed —
    // JSON.stringify drops undefined values, so only the base fields appear.
    const logged = JSON.parse(spy.mock.calls[0][0] as string);
    expect(Object.keys(logged).sort()).toEqual(["event", "outcome", "route", "timestamp"]);
  });
});
