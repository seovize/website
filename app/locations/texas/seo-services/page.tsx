import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { founder, texasData } from "@/lib/site";

export const metadata: Metadata = {
  title: "SEO Services for Texas Businesses | Top Local SEO Expert Texas",
  description:
    "Top local SEO expert serving Texas businesses in Houston, Dallas, Austin, and San Antonio. Semantic SEO, local SEO, and service-area page systems by Abdul Ghani with 20+ years experience.",
  alternates: { canonical: "/locations/texas/seo-services" },
};

const faqs = [
  { q: "Who is the top local SEO expert in Texas?", a: "Abdul Ghani, founder of Seovize, is a recognized semantic SEO specialist and local SEO expert with 20+ years of digital marketing experience. He serves Texas businesses remotely with entity-first content architecture, service-area SEO, and schema implementation." },
  { q: "How do you rank a Texas business without a physical office?", a: "Service-area businesses can rank locally using service-area pages, LocalBusiness schema with areaServed fields instead of a street address, local citation building, and content targeted to specific Texas cities and buyer intent." },
  { q: "What does local SEO for a Texas business include?", a: "A complete Texas local SEO strategy includes: Google Business Profile optimization (where applicable), service-area page system, city-specific content, local citations, LocalBusiness schema, and review acquisition strategy — all built around your specific Texas market." },
  { q: "How long does SEO take to work in Texas?", a: "Most Texas clients see meaningful ranking movement within 60-90 days for lower-competition terms. Competitive niches like law firms or real estate in Dallas or Houston typically take 4-6 months for significant organic growth in the map pack and organic results." },
  { q: "Do you use entity-based SEO for Texas businesses?", a: "Yes. Seovize builds entity-first content architecture — tying your brand, founder, services, and Texas location into a structured knowledge graph. This is the most durable approach to ranking in 2026 and beyond." },
];

export default function TexasSeoPage() {
  return (
    <>
      <JsonLd data={serviceSchema("seo")} />
      <JsonLd data={faqSchema(faqs)} />
      <Breadcrumbs items={[{ name: "Texas", href: "/locations/texas" }, { name: "SEO Services", href: "/locations/texas/seo-services" }]} />

      <section className="noise relative overflow-hidden px-5 pb-16 pt-20 md:pt-28">
        <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-sky/[0.05] blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Texas · SEO services</p>
          <h1 className="font-display text-4xl font-black leading-tight tracking-tight text-cloud md:text-6xl">
            SEO Services for<br />
            <span className="bg-gradient-to-r from-mint to-sky bg-clip-text text-transparent">
              Texas Businesses
            </span>
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-mist">
            Top local SEO expert{" "}
            <Link href="/about" className="font-semibold text-cloud underline decoration-mint/40 hover:decoration-mint">
              {founder.name}
            </Link>{" "}
            delivers semantic SEO, local SEO, and service-area page systems for Texas businesses in Houston, Dallas,
            Austin, and San Antonio — {founder.experience} years of digital marketing expertise applied to your Texas market.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-orange px-7 py-3.5 text-sm font-bold text-cloud shadow-[0_0_40px_rgba(249,115,22,0.3)] transition hover:bg-orange/90">
              Get a Free Texas SEO Audit →
            </Link>
            <Link href="/services/seo" className="inline-flex items-center rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-mist transition hover:border-mint/40 hover:text-cloud">
              View SEO packages
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="Texas SEO strategy" title="Local SEO without the fake address." intro="Service-area businesses can rank across Texas without a physical storefront. Here is the ethical, effective approach we use for every Texas client.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            { title: "Service-area page system", desc: "Dedicated pages for each Texas city you serve — optimized for local buyer intent, location entities, and city-specific semantic terms." },
            { title: "LocalBusiness schema", desc: "Schema.org LocalBusiness markup using areaServed instead of a street address — valid, effective, and Google-compliant for remote service businesses." },
            { title: "Entity-first content", desc: "Content that ties your brand, services, founder, and Texas location into a structured knowledge graph search engines can verify and rank." },
            { title: "Local citations", desc: "Consistent NAP citations across Texas-specific and industry directories to strengthen your local search signals without fake GBP listings." },
            { title: "Semantic keyword clusters", desc: "City-level keyword groups mapped to specific pages — no cannibalization, clear intent targeting for each Texas metro." },
            { title: "Google Business Profile (where eligible)", desc: "Full GBP optimization for businesses with legitimate eligibility — photo strategy, post cadence, review systems, Q&A management." },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-line bg-navy p-6">
              <div className="mb-3 h-1 w-8 rounded-full bg-mint" />
              <h3 className="font-display text-lg font-black text-cloud">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-mist">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="navy" eyebrow="Texas city SEO" title="City-by-city SEO strategy.">
        <div className="grid gap-4 md:grid-cols-2">
          {texasData.cities.map((city) => (
            <div key={city.slug} className="rounded-[2rem] border border-line bg-obsidian p-7">
              <h3 className="font-display text-2xl font-black text-cloud">{city.name} SEO</h3>
              <p className="mt-1 text-xs font-semibold text-mint">{city.market}</p>
              <p className="mt-4 text-sm leading-7 text-mist">{city.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {city.topKeywords.map((kw) => (
                  <span key={kw} className="rounded-full border border-line bg-navy px-3 py-1 text-[10px] text-slate-mid">{kw}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Texas SEO questions answered.">
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      <CTABanner headline="Ready to dominate local search in Texas?" subhead="Get a free Texas SEO audit — a structured review of your current search visibility and what a focused Texas SEO strategy would look like." primaryLabel="Get Free Texas SEO Audit" primaryHref="/contact" />
    </>
  );
}
