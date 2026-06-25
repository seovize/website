import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { faqSchema, localBusinessSchema } from "@/lib/schema";
import { founder, texasData } from "@/lib/site";

export const metadata: Metadata = {
  title: "SEO & Social Media Management for Texas Businesses | Seovize",
  description:
    "Seovize delivers semantic SEO, local SEO, and social media management for Texas businesses in Houston, Dallas, Austin, and San Antonio. Founded by Abdul Ghani, 20+ years experience.",
  alternates: { canonical: "/locations/texas" },
};

const texasFaqs = [
  { q: "Do you have a physical office in Texas?", a: "Seovize is a remote-first studio. We never list a fake address. We serve Texas businesses through dedicated service-area SEO, Texas-specific content clusters, and remote social media management with genuine Texas market expertise." },
  { q: "Which Texas cities do you serve?", a: "We build dedicated strategies for Houston, Dallas, Austin, and San Antonio — each with distinct buyer behavior, competitive dynamics, and content requirements. We also serve businesses across smaller Texas markets." },
  { q: "Can a service-area business rank locally without a storefront?", a: "Yes. We build ethical local SEO strategies using service-area pages, LocalBusiness schema with areaServed fields (no fake street address), and citation strategies designed for remote and mobile service businesses." },
  { q: "What makes Seovize different from large Texas agencies like Thrive?", a: "Large agencies build generic city pages with boilerplate copy and no named expert. Seovize is founder-led by Abdul Ghani — every strategy is personally designed with entity-first content architecture and real Texas market knowledge." },
];

export default function TexasHubPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(texasFaqs)} />
      <Breadcrumbs items={[{ name: "Locations", href: "/locations/texas" }, { name: "Texas", href: "/locations/texas" }]} />

      <section className="noise relative overflow-hidden px-5 pb-16 pt-20 md:pt-28">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-mint/[0.06] blur-[90px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Texas · Remote studio</p>
          <h1 className="font-display text-4xl font-black leading-tight tracking-tight text-cloud md:text-6xl">
            SEO & Social Media Management<br />
            for{" "}
            <span className="text-mint">
              Texas Businesses
            </span>
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-mist">
            {texasData.positioning} Led by{" "}
            <Link href="/about" className="font-semibold text-cloud underline decoration-mint/40 hover:decoration-mint">
              {founder.name}
            </Link>
            {" "}— top local SEO expert and social media strategist with {founder.experience} years of digital marketing experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-orange px-7 py-3.5 text-sm font-bold text-cloud shadow-[0_0_40px_rgba(249,115,22,0.3)] transition hover:bg-orange/90">
              Get a Free Texas Audit →
            </Link>
            <Link href="/pricing" className="inline-flex items-center rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-mist transition hover:border-mint/40 hover:text-cloud">
              See packages
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="Texas markets" title="City-specific strategy. Not templated spam." intro="Each Texas market has a distinct economy, buyer type, and competitive landscape. Here is how the strategy differs city by city.">
        <div className="grid gap-4 md:grid-cols-2">
          {texasData.cities.map((city, i) => (
            <div key={city.slug} className="overflow-hidden rounded-[2rem] border border-line bg-navy">
              <div className="border-b border-line bg-obsidian px-7 py-5">
                <div className="flex items-baseline justify-between">
                  <h2 className="font-display text-3xl font-black text-cloud">{city.name}</h2>
                  <span className="font-mono text-xs text-mint">0{i + 1}</span>
                </div>
                <p className="mt-1 text-xs font-semibold text-mint">{city.market}</p>
              </div>
              <div className="p-7">
                <p className="text-sm leading-7 text-mist">{city.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {city.topKeywords.map((kw) => (
                    <span key={kw} className="rounded-full border border-line bg-obsidian px-3 py-1.5 text-[10px] text-slate-mid">{kw}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="navy" eyebrow="Texas services" title="What we deliver for Texas brands.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "SEO Services Texas", href: "/locations/texas/seo-services", desc: "Local and semantic SEO for Texas businesses competing in Houston, Dallas, Austin, and San Antonio." },
            { title: "Social Media Management Texas", href: "/locations/texas/social-media-management", desc: "Premium social content systems — post design, captions, reels, and monthly reporting for Texas brands." },
            { title: "Social Media Manager Texas", href: "/locations/texas/social-media-manager", desc: "Find the best social media manager for your Texas business — agency expertise without the agency overhead." },
          ].map((s) => (
            <Link key={s.href} href={s.href} className="group flex flex-col rounded-[2rem] border border-line bg-obsidian p-7 transition hover:border-mint/30 hover:-translate-y-0.5">
              <h3 className="font-display text-xl font-black text-cloud">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-mist">{s.desc}</p>
              <span className="mt-5 text-xs font-semibold text-mint group-hover:underline">Learn more →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Texas business questions answered.">
        <div className="max-w-3xl">
          <FAQAccordion faqs={texasFaqs} />
        </div>
      </Section>

      <CTABanner headline="Ready to grow your Texas business online?" subhead="Get a free Growth Roadmap built specifically for your Texas market — Houston, Dallas, Austin, or San Antonio." primaryLabel="Get Your Free Texas Audit" primaryHref="/contact" />
    </>
  );
}
