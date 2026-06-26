import Link from "next/link";
import { site } from "@/lib/site";

type CTABannerProps = {
  headline?: string;
  subhead?: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export function CTABanner({
  headline = "Ready to build authority and capture demand?",
  subhead = "Start with a Growth Roadmap — a structured review of your search visibility, content gaps, and conversion path.",
  primaryLabel = "Get a Growth Roadmap",
  primaryHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="px-4 py-14 md:py-20 sm:px-5">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-line bg-navy p-8 md:rounded-[2.5rem] md:p-14">
        {/* Mint glow — intelligence accent; orange is reserved for the button only */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-mint/[0.10] blur-3xl" aria-hidden="true" />
        <div className="relative">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-mint">Start here</p>
          <h2 className="mt-4 font-display text-3xl font-black leading-tight tracking-tight text-cloud md:text-5xl md:leading-[1.1]">
            {headline}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-[1.75] text-mist md:text-lg">{subhead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={primaryHref}
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-orange px-7 text-sm font-bold text-white transition hover:bg-orange/90 dark:shadow-[0_0_40px_rgba(249,115,22,0.3)]"
            >
              {primaryLabel}
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-line px-7 text-sm font-semibold text-mist transition hover:border-cloud/30 hover:text-cloud"
            >
              Email us directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
