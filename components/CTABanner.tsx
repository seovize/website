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
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-orange/20 bg-navy p-10 md:p-14">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange/[0.14] blur-3xl" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange">Start here</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-black tracking-tight text-cloud md:text-5xl">
          {headline}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-mist">{subhead}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center rounded-full bg-orange px-7 py-3.5 text-sm font-bold text-white shadow-sm dark:shadow-[0_0_40px_rgba(249,115,22,0.3)] transition hover:bg-orange/90"
          >
            {primaryLabel}
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-mist transition hover:border-cloud/30 hover:text-cloud"
          >
            Email us directly
          </a>
        </div>
      </div>
    </section>
  );
}
