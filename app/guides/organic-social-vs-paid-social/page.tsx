import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema, speakableSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Organic Social vs Paid Social: What Each One Actually Does",
  description:
    "Understand the real difference between organic social media management and paid social advertising — what each builds, what it costs, and when you need both.",
  alternates: { canonical: "/guides/organic-social-vs-paid-social" },
  openGraph: {
    title: "Organic Social vs Paid Social | Seovize",
    description: "What organic social media builds, what paid social builds, and why conflating the two leads to bad expectations.",
    url: `${site.domain}/guides/organic-social-vs-paid-social`,
  },
};

const rows = [
  { factor: "What it builds", organic: "Trust, brand presence, search-relevant content over time", paid: "Immediate, targeted reach and lead volume" },
  { factor: "Cost structure", organic: "Flat monthly management fee", paid: "Management fee plus separate ad spend billed to the platform" },
  { factor: "Speed to results", organic: "Compounds over months", paid: "Can generate leads within days of launch" },
  { factor: "What happens if you stop", organic: "Existing content and audience remain", paid: "Lead flow stops almost immediately" },
  { factor: "Best measured by", organic: "Engagement quality, follower relevance, inbound inquiries", paid: "Cost per lead, lead quality, conversion rate" },
];

const faqs = [
  {
    q: "Should I do organic social or paid social first?",
    a: "Most businesses get more sustainable value starting with organic — it builds the content foundation and brand presence that paid campaigns later perform better against. Paid social without any organic presence often converts at a lower rate because prospects who click an ad and find an inactive profile hesitate to trust it.",
  },
  {
    q: "Can organic social media replace paid ads?",
    a: "Organic builds trust and visibility over time but rarely matches the speed and targeting precision of paid social for generating a specific volume of leads on a specific timeline. They solve different problems — organic for durable presence, paid for controlled, immediate reach.",
  },
  {
    q: "Why do some agencies bundle organic and paid together?",
    a: "It can simplify billing, but it also makes it harder to see which budget is producing which result. Keeping organic management and paid ad spend as separate line items — with separate reporting — gives a clearer picture of what's actually working.",
  },
  {
    q: "How much extra does paid social cost on top of management?",
    a: "Ad spend is fully separate from any management fee and is set by the advertiser, not the agency — typical starting budgets for a local service business range widely by market and goal, and should be planned around a specific lead-volume target rather than a generic industry number.",
  },
];

export default function OrganicVsPaidGuidePage() {
  const url = `${site.domain}/guides/organic-social-vs-paid-social`;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Organic Social vs Paid Social: What Each One Actually Does",
          description: metadata.description,
          url,
          datePublished: "2026-08-02",
          dateModified: "2026-08-02",
          author: { "@type": "Person", name: "Abdul Ghani" },
          publisher: { "@type": "Organization", name: site.name, url: site.domain },
        }}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={speakableSchema(url)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Guides", url: `${site.domain}/guides` },
          { name: "Organic vs Paid Social", url },
        ])}
      />
      <Breadcrumbs items={[{ name: "Guides", href: "/guides" }, { name: "Organic vs Paid Social", href: "/guides/organic-social-vs-paid-social" }]} />

      <section className="noise px-5 pb-16 pt-16 md:pt-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Decision guide</p>
          <h1 className="font-display text-4xl font-black tracking-tight text-cloud md:text-6xl">
            Organic social vs paid social: what each actually does
          </h1>
          <div className="speakable mt-6 max-w-2xl rounded-2xl border border-mint/20 bg-navy px-6 py-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-mint mb-2">Quick answer</p>
            <p className="text-base leading-[1.8] text-cloud">
              Organic social builds durable trust and content presence over months. Paid social buys immediate, targeted reach and lead volume that stops when the budget stops. Most businesses eventually need both, run and reported on separately.
            </p>
          </div>
        </div>
      </section>

      <Section eyebrow="Side-by-side" title="Two different tools, two different jobs.">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line text-left">
                <th className="pb-4 pr-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-mid">Factor</th>
                <th className="pb-4 pr-6 text-xs font-bold uppercase tracking-[0.2em] text-mint">Organic social</th>
                <th className="pb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-mid">Paid social</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {rows.map((row) => (
                <tr key={row.factor}>
                  <td className="py-4 pr-6 font-semibold text-cloud">{row.factor}</td>
                  <td className="py-4 pr-6 text-mist">{row.organic}</td>
                  <td className="py-4 text-mist">{row.paid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section variant="navy" eyebrow="Why we keep them separate" title="One page, one intent.">
        <p className="max-w-2xl text-sm leading-7 text-mist">
          Organic social media management, paid social advertising and local SEO are distinct disciplines with distinct pricing, timelines and success metrics. Mixing them into one undifferentiated offer makes it harder to tell what&apos;s actually driving results — so each is scoped, billed and reported separately.
        </p>
      </Section>

      <Section eyebrow="FAQ" title="Questions about choosing between them.">
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
        <div className="mt-10 flex flex-wrap gap-6">
          <Link href="/services/social-media-management" className="text-sm font-semibold text-mint hover:underline">
            Organic social media management →
          </Link>
          <Link href="/services/paid-social-advertising" className="text-sm font-semibold text-mint hover:underline">
            Paid social campaign management →
          </Link>
          <Link href="/guides/social-media-management-pricing" className="text-sm font-semibold text-mint hover:underline">
            See pricing breakdown →
          </Link>
        </div>
      </Section>

      <CTABanner
        headline="Not sure which one you need?"
        subhead="Tell us your timeline and goal — we'll recommend organic, paid, or both, and explain why."
        primaryLabel="Discuss Your Strategy"
        primaryHref="/contact"
      />
    </>
  );
}
