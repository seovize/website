import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { seoPackages } from "@/lib/site";
import { PricingCards } from "@/components/PricingCards";

export const metadata: Metadata = {
  title: "SEO Services for Texas Businesses | Seovize",
  description: "Technical SEO, local search optimization, content strategy, and service-area pages for Texas service businesses. Remote studio, real results. From $1,250/mo.",
  alternates: { canonical: "/locations/texas/seo-services" },
};

const faqs = [
  { q: "Can an out-of-state SEO agency rank Texas businesses?", a: "Yes — SEO is conducted remotely and does not require physical presence. Our team researches your specific Texas market, competitors, and buyer behavior before building any strategy." },
  { q: "Do I need a Google Business Profile to do local SEO in Texas?", a: "A GBP helps significantly for map-pack rankings, but you can rank organically for local Texas searches without one — especially with strong service-area pages and Texas-specific content." },
  { q: "How long does Texas local SEO take?", a: "Most clients see meaningful movement in 60–90 days for lower-competition terms. Competitive Texas markets (law, real estate, healthcare) typically take 4–6 months for significant organic growth." },
  { q: "What is a service-area page and do I need one?", a: "A service-area page is a dedicated page targeting a specific city or region (e.g., SEO services in Dallas). Yes — if you serve multiple Texas cities, dedicated pages significantly increase your local ranking footprint." },
];

export default function TexasSeoPage() {
  return (
    <>
      <JsonLd data={serviceSchema("seo")} />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs items={[
        { name: "Texas", href: "/locations/texas" },
        { name: "SEO Services", href: "/locations/texas/seo-services" },
      ]} />

      <section className="noise px-5 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">SEO · Texas businesses</p>
          <h1 className="font-display text-5xl font-black leading-[1.0] tracking-tight text-cloud md:text-7xl">
            SEO Services for Texas Businesses
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-mist">
            Technical SEO, local search optimization, service-area pages, and content strategy for Texas service businesses looking to rank higher, attract better leads, and convert more visitors.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Get a Texas SEO roadmap</Button>
            <Button href="/pricing" variant="secondary">See packages</Button>
          </div>
        </div>
      </section>

      <Section eyebrow="What is included" title="Texas SEO deliverables">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Technical audit and priority fixes",
            "Texas keyword and market research",
            "Service-area page strategy and creation",
            "Google Business Profile audit and optimization",
            "Local citation building and consistency",
            "Monthly performance report",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 rounded-2xl border border-line bg-navy p-5">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
              <p className="text-sm leading-7 text-mist">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="navy" eyebrow="Pricing" title="Texas SEO packages">
        <PricingCards items={seoPackages} />
      </Section>

      <Section eyebrow="FAQ" title="Texas SEO questions answered">
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      <CTABanner
        headline="Texas business ready to rank higher?"
        subhead="Start with a free Growth Roadmap — a structured review of your current search visibility, keyword gaps, and what it would take to outrank your Texas competitors."
        primaryLabel="Get a Texas SEO roadmap"
        primaryHref="/contact"
      />
    </>
  );
}
