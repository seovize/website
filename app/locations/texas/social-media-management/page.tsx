import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { socialPackages } from "@/lib/site";
import { PricingCards } from "@/components/PricingCards";

export const metadata: Metadata = {
  title: "Social Media Management for Texas Businesses | Seovize",
  description: "Premium social media management for Texas small businesses — content planning, post design, reels, scheduling, and monthly analytics. Fully remote, results-focused.",
  alternates: { canonical: "/locations/texas/social-media-management" },
};

const faqs = [
  { q: "Do you have a Texas office for social media management?", a: "No — we are fully remote. We manage social media for Texas businesses online with the same quality and accountability as a local agency." },
  { q: "Which social platforms do you manage for Texas businesses?", a: "We manage Instagram, Facebook, LinkedIn, TikTok, and X. Most Texas small business plans focus on Instagram and Facebook as primary channels." },
  { q: "Do you create original content or just schedule posts?", a: "We create original content — custom-designed graphics, SEO-optimized captions, reels direction, and content calendars. We do not use generic templates." },
  { q: "How much does social media management cost for a Texas business?", a: "Plans start at $1,100/mo for small businesses and scale to $3,600/mo for full-service authority packages with reels and campaigns." },
];

export default function TexasSmmPage() {
  return (
    <>
      <JsonLd data={serviceSchema("social-media-management")} />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs items={[
        { name: "Texas", href: "/locations/texas" },
        { name: "Social Media Management", href: "/locations/texas/social-media-management" },
      ]} />

      <section className="noise px-5 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Social media · Texas businesses</p>
          <h1 className="font-display text-5xl font-black leading-[1.0] tracking-tight text-cloud md:text-7xl">
            Social Media Management for Texas Businesses
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-mist">
            Premium social media content, design, reels, and strategy for Texas small businesses and service firms — managed fully remotely with monthly performance reporting.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Get a social media roadmap</Button>
            <Button href="/pricing" variant="secondary">See packages</Button>
          </div>
        </div>
      </section>

      <Section eyebrow="What is included" title="Full-service social media management">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Monthly content calendar and strategy",
            "Custom-designed post graphics",
            "SEO-optimized captions and hashtags",
            "Short-form reels scripting and editing",
            "Scheduling and publishing",
            "Monthly analytics and performance report",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 rounded-2xl border border-line bg-navy p-5">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
              <p className="text-sm leading-7 text-mist">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="navy" eyebrow="Pricing" title="Social media packages for Texas businesses">
        <PricingCards items={socialPackages} />
      </Section>

      <Section eyebrow="FAQ" title="Texas social media questions answered">
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      <CTABanner
        headline="Texas business ready to grow on social media?"
        subhead="Book a free strategy call — we will review your current accounts, identify content gaps, and show you exactly what a managed social media system would look like."
        primaryLabel="Get a social media roadmap"
        primaryHref="/contact"
      />
    </>
  );
}
