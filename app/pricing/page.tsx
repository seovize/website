import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PricingCards } from "@/components/PricingCards";
import { Section } from "@/components/Section";
import { faqSchema } from "@/lib/schema";
import { seoPackages, socialPackages } from "@/lib/site";

export const metadata: Metadata = {
  title: "SEO & Social Media Pricing | Seovize Texas",
  description:
    "Transparent SEO and social media management pricing for Texas businesses. SEO from $1,250/mo · Social from $1,100/mo · Semantic SEO from $2,200/mo. No discovery call just to see a number.",
  alternates: { canonical: "/pricing" },
};

const pricingFaqs = [
  {
    q: "What is included in a free audit?",
    a: "Abdul Ghani personally reviews your website, Google Search Console data, backlink profile, and competitive landscape. You receive a prioritized action list — no generic template, no sales pitch. The audit takes 24–48 hours.",
  },
  {
    q: "Do you require a long-term contract?",
    a: "Retainers run month-to-month after an initial 3-month commitment. The first 90 days are where the foundation is built — keyword research, architecture, schema, and content. Cancelling before that would mean you don't see results.",
  },
  {
    q: "Can I bundle SEO and social media management?",
    a: "Yes — and bundled clients get priority access and a 10% discount on the combined monthly retainer. SEO and social media work together: SEO defines what content to create, social amplifies it.",
  },
  {
    q: "Do you serve businesses outside Texas?",
    a: "Yes. Texas is our primary market and we have deep city-level expertise in Houston, Dallas, Austin, and San Antonio — but Seovize serves U.S. brands nationwide. The strategy adapts to your target market.",
  },
  {
    q: "Is the pricing the same for highly competitive keywords?",
    a: "The packages are starting points. Highly competitive verticals (law firms, med spas, real estate) or multiple Texas cities may require a custom scope. Pricing is confirmed after the free audit.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={faqSchema(pricingFaqs)} />
      <Breadcrumbs items={[{ name: "Pricing", href: "/pricing" }]} />

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="px-4 pb-12 pt-20 sm:px-5 md:pb-16 md:pt-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">
            Transparent pricing
          </p>
          <h1 className="font-display text-4xl font-black leading-tight tracking-tight text-cloud md:text-6xl">
            Clear starting points.<br />
            <span className="text-mint">Custom strategy.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-[1.8] text-mist md:text-lg">
            No discovery call just to get a number. These are real starting prices — final scope
            depends on competition, content volume, platforms, and timeline. Every engagement
            includes a free audit before any retainer starts.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-orange px-7 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange/90"
            >
              Get free audit first →
            </Link>
            <a
              href={`mailto:seovizeofficial@gmail.com`}
              className="inline-flex items-center rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-mist transition hover:border-mint/40 hover:text-cloud"
            >
              Email Abdul Ghani
            </a>
          </div>

          {/* Price anchors */}
          <div className="mt-10 grid grid-cols-3 gap-px rounded-2xl border border-line bg-line overflow-hidden">
            {[
              { label: "SEO retainers", from: "From $1,250/mo" },
              { label: "Semantic SEO", from: "From $2,200/mo" },
              { label: "Social media", from: "From $1,100/mo" },
            ].map((item) => (
              <div key={item.label} className="bg-navy px-5 py-5 text-center">
                <p className="font-mono text-lg font-bold text-cloud">{item.from}</p>
                <p className="mt-1 text-[10px] font-medium text-slate-mid">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="SEO retainers" title="Search visibility packages">
        <PricingCards items={seoPackages} />
      </Section>

      <Section eyebrow="Social media" title="Creative visibility packages" variant="navy">
        <PricingCards items={socialPackages} />
        <p className="mt-6 text-sm text-slate-mid">
          Social media management for small businesses in Texas starts at $1,100/month.{" "}
          <Link href="/locations/texas/social-media-management" className="font-semibold text-mint hover:underline">
            See the Texas social media package →
          </Link>
        </p>
      </Section>

      <Section eyebrow="FAQ" title="Pricing questions answered.">
        <div className="max-w-3xl">
          <FAQAccordion faqs={pricingFaqs} />
        </div>
      </Section>

      <CTABanner
        headline="Not sure which package fits?"
        subhead="Get the free audit first. Abdul Ghani reviews your site personally and recommends the right starting scope — no upsell, no pressure."
        primaryLabel="Get My Free Audit"
        primaryHref="/contact"
      />
    </>
  );
}
