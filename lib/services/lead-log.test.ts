import { afterEach, describe, expect, it, vi } from "vitest";
import {
  classifyProviderError,
  contentIdempotencyKey,
  logLeadOutcome,
  logProviderOutcome,
  ProviderNotConfiguredError,
  ProviderRequestError,
  ProviderTimeoutError,
  withProviderTimeout,
} from "@/lib/services/lead-log";

afterEach(() => {
  vi.restoreAllMocks();
  vi.useRealTimers();
});

describe("classifyProviderError", () => {
  it("classifies a ProviderNotConfiguredError as not_configured", () => {
    expect(classifyProviderError(new ProviderNotConfiguredError("resend", "missing key"))).toBe("not_configured");
  });

  it("classifies a ProviderRequestError as request_failed", () => {
    expect(classifyProviderError(new ProviderRequestError("brevo", 500, "server error"))).toBe("request_failed");
  });

  it("classifies a ProviderTimeoutError as timeout", () => {
    expect(classifyProviderError(new ProviderTimeoutError("resend", "timed out"))).toBe("timeout");
  });

  it("classifies any other error (or non-error) as unknown", () => {
    expect(classifyProviderError(new Error("generic"))).toBe("unknown");
    expect(classifyProviderError("not even an error")).toBe("unknown");
    expect(classifyProviderError(undefined)).toBe("unknown");
  });
});

describe("logProviderOutcome", () => {
  it("logs a single structured JSON line with route, provider, role, outcome, status", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    logProviderOutcome("/api/contact", "resend", "secondary", "request_failed", 500);

    expect(spy).toHaveBeenCalledTimes(1);
    const logged = JSON.parse(spy.mock.calls[0][0] as string);
    expect(logged).toMatchObject({
      event: "lead_provider_attempt",
      route: "/api/contact",
      provider: "resend",
      role: "secondary",
      outcome: "request_failed",
      status: 500,
    });
  });
});

describe("logLeadOutcome", () => {
  it("logs the overall outcome without any provider detail", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    logLeadOutcome("/api/report-signup", "partial_success");

    const logged = JSON.parse(spy.mock.calls[0][0] as string);
    expect(logged).toMatchObject({ event: "lead_submission", route: "/api/report-signup", outcome: "partial_success" });
    expect(Object.keys(logged).sort()).toEqual(["event", "outcome", "route", "timestamp"]);
  });
});

describe("contentIdempotencyKey", () => {
  it("produces the same key for the same content (duplicate submission)", () => {
    const a = contentIdempotencyKey("contact", ["jane@example.com", "https://example.com", "hello"]);
    const b = contentIdempotencyKey("contact", ["jane@example.com", "https://example.com", "hello"]);
    expect(a).toBe(b);
  });

  it("is case- and whitespace-insensitive (same person, trivially re-typed)", () => {
    const a = contentIdempotencyKey("contact", ["Jane@Example.com", "https://example.com", "hello"]);
    const b = contentIdempotencyKey("contact", [" jane@example.com ", "https://example.com", " hello "]);
    expect(a).toBe(b);
  });

  it("produces a different key for genuinely different content", () => {
    const a = contentIdempotencyKey("contact", ["jane@example.com", "https://example.com", "hello"]);
    const b = contentIdempotencyKey("contact", ["jane@example.com", "https://example.com", "a different message"]);
    expect(a).not.toBe(b);
  });

  it("is prefixed for readability in logs/headers", () => {
    expect(contentIdempotencyKey("report-signup", ["jane@example.com"])).toMatch(/^report-signup-[0-9a-f]{48}$/);
  });
});

describe("withProviderTimeout", () => {
  it("resolves normally when the promise settles before the timeout", async () => {
    await expect(withProviderTimeout("brevo", Promise.resolve("ok"), 50)).resolves.toBe("ok");
  });

  it("rejects with ProviderTimeoutError when the promise takes too long", async () => {
    const hung = new Promise(() => {}); // never settles
    await expect(withProviderTimeout("resend", hung, 20)).rejects.toBeInstanceOf(ProviderTimeoutError);
  });

  it("propagates the original rejection when the promise fails before the timeout", async () => {
    await expect(withProviderTimeout("brevo", Promise.reject(new Error("boom")), 50)).rejects.toThrow("boom");
  });
});
