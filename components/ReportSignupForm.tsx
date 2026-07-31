import { LeadSourceFields } from "@/components/LeadSourceFields";
import { site } from "@/lib/site";

type ReportSignupFormProps = {
  variant?: "inline" | "banner";
  sent?: boolean;
  /** True when a previous submission failed to save (e.g. CRM unavailable). Shows an inline error instead of silently claiming success. */
  failed?: boolean;
};

/**
 * Soft-gate email capture for the Texas Digital Marketing Report. The report
 * itself stays fully public (required for GEO/AI-citation and SEO indexing —
 * see project notes on why this isn't a hard content gate). This form exists
 * purely to capture an opt-in lead alongside the already-public content.
 */
export function ReportSignupForm({ variant = "inline", sent = false, failed = false }: ReportSignupFormProps) {
  if (sent) {
    return (
      <div className="rounded-[2rem] border border-mint/30 bg-mint/[0.06] p-8 text-center">
        <p className="font-display text-lg font-black text-cloud">You&rsquo;re on the list.</p>
        <p className="mt-2 text-sm text-mist">
          We sent a link to the report to your inbox, and we&rsquo;ll let you know when the next edition
          publishes.
        </p>
      </div>
    );
  }

  const isBanner = variant === "banner";

  return (
    <form
      action="/api/report-signup"
      method="POST"
      className={
        isBanner
          ? "flex flex-col gap-3 rounded-[2rem] border border-sky/20 bg-sky/[0.04] p-6 sm:flex-row sm:items-center"
          : "rounded-[2rem] border border-line bg-navy p-7"
      }
    >
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this field empty
          <input name="hp_field" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <LeadSourceFields />

      {failed && (
        <div className="mb-4 rounded-xl border border-orange/40 bg-orange/[0.08] px-4 py-3 text-sm text-cloud">
          Something went wrong saving your request. Please try again, or email us directly at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-mint hover:underline">
            {site.email}
          </a>
          .
        </div>
      )}

      {!isBanner && (
        <>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky">Stay updated</p>
          <p className="mt-2 text-sm leading-6 text-mist">
            Get notified when the 2027 edition publishes — no spam, just the data.
          </p>
        </>
      )}

      <div className={isBanner ? "flex flex-1 flex-col gap-2 sm:flex-row" : "mt-4 flex flex-col gap-2 sm:flex-row"}>
        <input
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="min-w-0 flex-1 rounded-full border border-line bg-obsidian px-4 py-2.5 text-sm text-cloud placeholder:text-slate-mid/60 focus:border-mint/40 focus:outline-none focus:ring-1 focus:ring-mint/20"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange/90"
        >
          Notify me
        </button>
      </div>
    </form>
  );
}
