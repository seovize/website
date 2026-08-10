import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { breadcrumbSchema, speakableSchema } from "@/lib/schema";
import { site } from "@/lib/site";

// CORRECTED (2026-08-02): this page previously published a "Texas Small
// Business Digital Marketing Report 2026" presenting invented statistics —
// specific percentages and engagement rates with no real source, a claimed
// "Seovize analysis... across 200+ market engagements" that never happened,
// and a claimed analysis of ChatGPT/Claude/Gemini citation behavior that was
// never run. See the internal claim table for the full list. All of it has
// been removed rather than softened or re-sourced. This page stays live (for
// old inbound links and the report-signup email flow) but is noindexed, has
// no invented figures, and is not linked as "original research" anywhere.
// Do not restore any of the removed statistics without a real, disclosed
// methodology and sample behind each one.
export const metadata: Metadata = {
  title: "Texas Digital Marketing Report 2026 — Correction Notice",
  description:
    "This report previously included unverified statistics. They have been removed. See the current status and where real research will be published.",
  alternates: { canonical: "/research/texas-digital-marketing-report-2026" },
  robots: { index: false, follow: true },
};

export default function TexasDigitalMarketingReportPage() {
  const url = `${site.domain}/research/texas-digital-marketing-report-2026`;
  return (
    <>
      <JsonLd data={speakableSchema(url)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Texas Digital Marketing Report — Correction", url },
        ])}
      />
      <Breadcrumbs items={[{ name: "Texas Digital Marketing Report — Correction", href: "/research/texas-digital-marketing-report-2026" }]} />

      <section className="px-5 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-mint">Correction notice</p>
          <h1 className="mt-5 font-display text-4xl font-black tracking-tight text-cloud md:text-6xl">
            This report contained unverified statistics. We removed them.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-mist">
            An earlier version of this page presented specific percentages, engagement-rate benchmarks
            and a claimed analysis of AI assistant citation behavior as original Seovize research. On
            review, none of it had a real, disclosed methodology or sample behind it, and no such
            analysis of AI assistant behavior was ever conducted. We&rsquo;ve removed all of it rather
            than rephrase it into softer, still-unsupported language.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-mist">
            We&rsquo;d rather publish nothing than publish invented numbers. A real benchmark study —
            with a stated sample size, collection window and public methodology before any figure is
            published — is in progress. You can read its methodology now at{" "}
            <Link href="/research/texas-local-business-social-media-benchmark-2026" className="font-semibold text-mint hover:underline">
              /research/texas-local-business-social-media-benchmark-2026
            </Link>
            . Nothing will be published there until it has actually been collected.
          </p>
          <p className="mt-4 text-sm text-slate-mid">
            Questions about this correction? Email{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-mint hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
