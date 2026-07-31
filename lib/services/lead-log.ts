/**
 * Shared error types and structured logging for the two lead-capture routes
 * (/api/contact, /api/report-signup). Both routes call into lib/services/
 * (contact.ts, brevo.ts, report-signup.ts) for the actual provider calls;
 * this module lets the routes classify *why* a call failed — missing
 * configuration vs. a request the provider itself rejected — without each
 * route re-implementing string-matching on error messages.
 */

export class ProviderNotConfiguredError extends Error {
  constructor(
    public readonly provider: "resend" | "brevo",
    message: string,
  ) {
    super(message);
    this.name = "ProviderNotConfiguredError";
  }
}

export class ProviderRequestError extends Error {
  constructor(
    public readonly provider: "resend" | "brevo",
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = "ProviderRequestError";
  }
}

export type LeadOutcome =
  | "validation_failed"
  | "spam_rejected"
  | "email_not_configured"
  | "email_send_failed"
  | "crm_not_configured"
  | "crm_upsert_failed"
  | "success";

/** Classify a caught error into a bucket without ever logging its message. */
export function classifyProviderError(err: unknown): "not_configured" | "request_failed" | "unknown" {
  if (err instanceof ProviderNotConfiguredError) return "not_configured";
  if (err instanceof ProviderRequestError) return "request_failed";
  return "unknown";
}

/**
 * Structured, PII-free log line for a lead-submission outcome. Deliberately
 * takes only a route/outcome/provider/status — never the submitted
 * name/email/message/phone, a raw error message, or a provider response
 * body, since any of those could carry personal information or (in a
 * provider error body) an echo of the submitted payload.
 */
export function logLeadOutcome(
  route: "/api/contact" | "/api/report-signup",
  outcome: LeadOutcome,
  detail?: { provider?: "resend" | "brevo"; status?: number },
): void {
  console.log(
    JSON.stringify({
      event: "lead_submission",
      route,
      outcome,
      provider: detail?.provider,
      status: detail?.status,
      timestamp: new Date().toISOString(),
    }),
  );
}
