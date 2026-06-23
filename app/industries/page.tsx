import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { IndustryCard } from "@/components/IndustryCard";
import { Section } from "@/components/Section";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries We Serve | SEO & Social Media by Industry",
  description: "Seovize provides SEO, semantic SEO, social media management, and content marketing for law firms, real estate, med spas, consultants, contractors, and restaurants.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Industries", href: "/industries" }]} />

      <section className="noise px-5 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Industry focus</p>
          <h1 className="font-display text-5xl font-black leading-[1.0] tracking-tight text-cloud md:text-7xl">
            SEO &amp; Social Media by Industry
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-mist">
            We serve service businesses and expert-led brands across six core industries — with strategies built around industry-specific search intent, competitive landscape, and buyer behavior.
          </p>
        </div>
      </section>

      <Section eyebrow="Industries">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.slug}
              title={industry.title}
              description={industry.description}
              href={industry.href}
            />
          ))}
        </div>
      </Section>

      <CTABanner
        headline="Do not see your industry listed?"
        subhead="We work with a wide range of service businesses beyond the six listed. Book a Growth Roadmap call and we will tell you if we are the right fit."
        primaryLabel="Get a Growth Roadmap"
        primaryHref="/contact"
      />
    </>
  );
}
