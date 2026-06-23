import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { processSteps, seoPackages, services } from "@/lib/site";
import { PricingCards } from "@/components/PricingCards";

type ServicePageTemplateProps = {
  slug: string;
  showPricing?: boolean;
};

export function ServicePageTemplate({ slug, showPricing = false }: ServicePageTemplateProps) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;

  return (
    <>
      <JsonLd data={serviceSchema(slug)} />
      {service.faqs && <JsonLd data={faqSchema(service.faqs)} />}

      <Breadcrumbs items={[{ name: "Services", href: "/services/seo" }, { name: service.title, href: service.href }]} />

      <section className="noise px-5 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">{service.eyebrow}</p>
          <h1 className="font-display text-5xl font-black leading-[1.0] tracking-tight text-cloud md:text-7xl">
            {service.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-mist">{service.description}</p>
          <div className="mt-5 flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-orange">{service.price}</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Get a roadmap for {service.title}</Button>
            <Button href="/pricing" variant="secondary">See all packages</Button>
          </div>
        </div>
      </section>

      {service.outcomes && (
        <Section eyebrow="Outcomes" title="What this service delivers">
          <div className="grid gap-5 md:grid-cols-3">
            {service.outcomes.map((outcome) => (
              <div key={outcome} className="rounded-[2rem] border border-line bg-navy p-6">
                <div className="mb-4 h-1 w-10 rounded-full bg-mint" />
                <p className="font-semibold text-cloud">{outcome}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {service.deliverables && (
        <Section variant="navy" eyebrow="Deliverables" title="Everything included in this service">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-2xl border border-line bg-obsidian p-5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                <p className="text-sm leading-7 text-mist">{item}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section eyebrow="Process" title="How we run this engagement">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-[2rem] border border-line bg-navy p-6">
              <span className="font-mono grid h-12 w-12 place-items-center rounded-2xl bg-mint text-lg font-bold text-obsidian">
                {index + 1}
              </span>
              <h3 className="mt-6 font-display text-xl font-black text-cloud">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-mist">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {showPricing && (
        <Section variant="navy" eyebrow="Pricing" title="Choose the right growth level">
          <PricingCards items={seoPackages} />
        </Section>
      )}

      {service.faqs && service.faqs.length > 0 && (
        <Section eyebrow="FAQ" title={`${service.title} questions answered`}>
          <div className="max-w-3xl">
            <FAQAccordion faqs={service.faqs} />
          </div>
        </Section>
      )}

      <CTABanner
        headline={`Ready to get started with ${service.title}?`}
        subhead="Book a free Growth Roadmap call — a structured review of your current position, gaps, and what a focused engagement would look like."
        primaryLabel={`Start with ${service.title}`}
        primaryHref="/contact"
      />
    </>
  );
}
