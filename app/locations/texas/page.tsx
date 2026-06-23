import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { faqSchema, localBusinessSchema } from "@/lib/schema";
import { services, texasData } from "@/lib/site";

export const metadata: Metadata = {
  title: "SEO & Social Media Management for Texas Businesses | Seovize",
  description:
    "Remote SEO, semantic SEO, and social media management for Texas small businesses, service firms, and growth-stage brands. No fake office — real results.",
  alternates: { canonical: "/locations/texas" },
};

const texasFaqs = [
  { q: "Does Seovize have a physical office in Texas?", a: "No — Seovize is a remote studio. We serve Texas businesses fully remotely with the same quality and accountability as an in-person agency. All project communication, reporting, and strategy calls happen online." },
  { q: "Can you help a Texas business rank locally?", a: "Yes. We build dedicated service-area SEO strategies for Texas businesses — including city/region landing pages, local citation work, and Texas-specific content — without requiring a physical storefront." },
  { q: "What types of Texas businesses do you work with?", a: "We work with law firms, real estate agents, med spas, restaurants, contractors, consultants, and other service businesses across Texas looking to improve their search visibility and social media presence." },
  { q: "How do you know Texas markets?", a: "We research each client's specific Texas market — including competitor landscapes, search patterns, and local content gaps — before building any strategy. Texas markets vary significantly by city, industry, and buyer behavior." },
];

const texasSubPages = [
  { title: "Social Media Management for Texas", href: "/locations/texas/social-media-management", desc: "Premium social content, post design, reels, and reporting for Texas businesses." },
  { title: "SEO Services for Texas Businesses", href: "/locations/texas/seo-services", desc: "Technical SEO, local search, and content strategy for Texas service businesses." },
  { title: "Social Media Manager for Texas", href: "/locations/texas/social-media-manager", desc: "What a professional social media manager does for Texas small businesses." },
];

export default function TexasHubPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(texasFaqs)} />

      <Breadcrumbs items={[{ name: "Locations", href: "/locations/texas" }, { name: "Texas", href: "/locations/texas" }]} />

      <section className="noise px-5 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Remote studio · serving Texas</p>
          <h1 className="font-display text-5xl font-black leading-[1.0] tracking-tight text-cloud md:text-7xl">
            SEO &amp; Social Media for Texas Businesses
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-mist">
            {texasData.positioning}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Get a Texas growth roadmap</Button>
            <Button href="/services/local-seo" variant="secondary">Local SEO services</Button>
          </div>
        </div>
      </section>

      <Section eyebrow="Texas services" title="What we do for Texas businesses">
        <div className="grid gap-5 md:grid-cols-3">
          {texasSubPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-[2rem] border border-line bg-navy p-6 transition hover:border-mint/30"
            >
              <h2 className="font-display text-xl font-black text-cloud">{page.title}</h2>
              <p className="mt-3 text-sm leading-7 text-mist">{page.desc}</p>
              <span className="mt-4 block text-xs font-semibold text-mint group-hover:underline">Learn more →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section variant="navy" eyebrow="Industries" title="Texas industries we serve">
        <div className="flex flex-wrap gap-3">
          {texasData.industries.map((ind) => (
            <span key={ind} className="rounded-full border border-line bg-obsidian px-4 py-2 text-sm text-mist">
              {ind}
            </span>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/industries" className="text-sm font-semibold text-mint hover:underline">
            See all industries we serve →
          </Link>
        </div>
      </Section>

      <Section eyebrow="Important note" title="Our Texas positioning — no fake address, no fake GBP">
        <div className="max-w-3xl rounded-[2rem] border border-line bg-navy p-7">
          <p className="text-mist leading-7">
            Seovize does not claim a Texas street address or Google Business Profile location it does not have. We build ethical, remote-first service-area SEO that does not depend on fake physical presence. Everything we do is transparent, verifiable, and built to last.
          </p>
          <p className="mt-4 text-mist leading-7">
            This means Texas businesses we work with get a real strategy — service-area pages, local citations, Texas-specific content, and schema markup — without any black-hat local SEO tactics that risk penalties.
          </p>
        </div>
      </Section>

      <Section variant="navy" eyebrow="FAQ" title="Texas businesses — common questions">
        <div className="max-w-3xl">
          <FAQAccordion faqs={texasFaqs} />
        </div>
      </Section>

      <CTABanner
        headline="Texas business ready to grow online?"
        subhead="Start with a Growth Roadmap. We will review your current search presence, social accounts, and conversion path — and show you exactly what we would prioritize."
        primaryLabel="Get a Texas growth roadmap"
        primaryHref="/contact"
      />
    </>
  );
}
