import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { IndustryCard } from "@/components/IndustryCard";
import { Section } from "@/components/Section";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries We Serve | Seovize",
  description: "Seovize delivers semantic SEO, social media management, and content marketing for law firms, real estate, med spas, consultants, contractors, and restaurants.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Industries", href: "/industries" }]} />
      <section className="noise px-5 pb-16 pt-20 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Industries</p>
          <h1 className="font-display text-4xl font-black tracking-tight text-cloud md:text-6xl">
            Sector-specific SEO and social media systems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">
            Generic marketing advice rarely works. Seovize builds industry-specific strategies that account for buyer behavior, regulatory constraints, local competition, and the specific search terms your clients use.
          </p>
        </div>
      </section>
      <Section>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.slug} title={industry.title} description={industry.description} href={industry.href} />
          ))}
        </div>
      </Section>
      <CTABanner headline="Your industry needs a specific strategy." subhead="Book a free Growth Roadmap call and get a plan built around your industry, competitors, and Texas market." primaryLabel="Get an Industry Strategy" primaryHref="/contact" />
    </>
  );
}
