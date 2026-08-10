import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Texas Local Business Social Media Benchmark 2026 — Methodology (In Progress)",
  description:
    "Planned original research on social media activity among Texas local service businesses. This page documents the methodology and sampling rules only — no findings have been published yet.",
  alternates: { canonical: "/research/texas-local-business-social-media-benchmark-2026" },
  robots: { index: false, follow: true },
};

const sampleFrame = [
  { title: "Categories sampled", detail: "Home services/contractors, HVAC, cleaning, med spas, restaurants, and professional services — the categories where Seovize has direct client or prospect visibility." },
  { title: "Geography", detail: "Public business listings in Dallas–Fort Worth, Houston, Austin and San Antonio, drawn from publicly visible Google Business Profile and social media presence — not private client data." },
  { title: "Minimum sample size", detail: "A target minimum of 40 businesses per category before any city- or industry-level figure is published — smaller samples will be labeled as directional, not benchmark-grade." },
  { title: "Collection window", detail: "A defined, dated collection period will be stated on publication, so figures can be understood as a snapshot rather than an evergreen claim." },
];

const measures = [
  "Posting frequency by platform (Instagram, Facebook, LinkedIn, TikTok) over the collection window",
  "Public engagement signals (likes, comments, shares) as observed, not estimated",
  "Presence and cadence of before/after or proof-of-work content, where applicable to the category",
  "Public review count and review velocity on Google Business Profile, where publicly visible",
  "Whether a business publishes on a business website in addition to social platforms",
];

const rules = [
  "No figure is published without a stated sample size, collection window and category definition alongside it.",
  "No projection, industry-wide claim or percentage is asserted without a documented data source — modeled or assumed numbers are not presented as measured findings.",
  "No claim about AI assistant (ChatGPT, Claude, Gemini, etc.) citation behavior is made unless an actual, repeatable test was run and its method is disclosed.",
  "Individual businesses sampled are not named or identified in published findings without separate permission.",
  "This page and any resulting report stay noindexed until real data has been collected, reviewed and the methodology above has actually been followed — not before.",
];

export default function BenchmarkMethodologyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Social Media Benchmark 2026", href: "/research/texas-local-business-social-media-benchmark-2026" }]} />
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-mint">Research — in progress</p>
          <h1 className="mt-5 font-display text-4xl font-black tracking-tight text-cloud md:text-6xl">
            Texas Local Business Social Media Benchmark 2026
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-mist">
            This page documents the planned methodology, sample frame and sampling rules for an original
            benchmark study — before any data has been collected. No statistics, percentages or findings
            appear below because none have been measured yet. We&rsquo;d rather publish nothing than publish
            invented numbers.
          </p>
        </div>
      </section>

      <Section eyebrow="Sample frame" title="Who gets sampled, and how many.">
        <div className="grid gap-4 md:grid-cols-2">
          {sampleFrame.map((s) => (
            <div key={s.title} className="rounded-2xl border border-line bg-navy p-6">
              <p className="font-display text-lg font-bold text-cloud">{s.title}</p>
              <p className="mt-2 text-sm leading-7 text-mist">{s.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="navy" eyebrow="What gets measured" title="The collection template.">
        <ul className="max-w-2xl space-y-3 text-sm leading-7 text-mist">
          {measures.map((m) => (
            <li key={m}>— {m}</li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Publication rules" title="What has to be true before anything ships.">
        <ul className="max-w-2xl space-y-3 text-sm leading-7 text-mist">
          {rules.map((r) => (
            <li key={r}>— {r}</li>
          ))}
        </ul>
      </Section>

      <section className="px-5 pb-20">
        <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-navy px-7 py-6">
          <p className="text-sm leading-7 text-mist">
            Have data, a category, or a Texas market you think should be included? Email{" "}
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
