import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { CreativeShowcase } from "@/components/CreativeShowcase";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PricingCards } from "@/components/PricingCards";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustStrip } from "@/components/TrustStrip";
import { faqSchema } from "@/lib/schema";
import { caseStudies, homepageFaqs, processSteps, seoPackages, services, texasData } from "@/lib/site";

export const metadata: Metadata = {
  title: "Seovize | SEO, Semantic SEO & Social Media Systems for U.S. Brands",
  description:
    "Seovize helps growth-focused U.S. brands build authority and capture demand through semantic SEO, social media management, and conversion-ready website systems.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homepageFaqs)} />

      <section className="noise overflow-hidden px-5 py-24 md:py-32">
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-mint/30 bg-mint/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-mint">
              SEO · Semantic SEO · Social Media
            </p>
            <h1 className="font-display text-5xl font-black leading-[1.0] tracking-tight text-cloud md:text-7xl">
              Build authority.<br />Capture demand.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-mist">
              Seovize helps U.S. growth-focused brands turn websites and social channels into clear, discoverable, conversion-ready growth systems.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/contact">Get a Growth Roadmap</Button>
              <Button href="/pricing" variant="secondary">See packages</Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-sm text-mist">
              <div><strong className="font-mono block text-2xl font-bold text-cloud">90</strong>day semantic SEO plan</div>
              <div><strong className="font-mono block text-2xl font-bold text-cloud">6</strong>core service lanes</div>
              <div><strong className="font-mono block text-2xl font-bold text-cloud">1</strong>search + social system</div>
            </div>
          </div>
          <CreativeShowcase />
        </div>
      </section>

      <TrustStrip />

      <Section
        eyebrow="What we build"
        title="A focused service system built for growth."
        intro="Six service lanes covering every layer of your search visibility, social presence, and conversion path — with clear packages and no ambiguity about what you get."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              eyebrow={s.eyebrow}
              title={s.title}
              description={s.description}
              price={s.price}
              href={s.href}
            />
          ))}
        </div>
      </Section>

      <Section
        variant="navy"
        eyebrow="Semantic SEO"
        title="Beyond keywords — entity authority that holds."
        intro="Semantic SEO connects your brand, services, and audience through structured topic architecture that search engines can understand, trust, and rank with confidence."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            { title: "Entity mapping", desc: "Define who you are, what you do, and who you serve — structured so search engines can verify each claim." },
            { title: "Topic clusters", desc: "Build content networks that reinforce your authority across every subtopic your buyers search." },
            { title: "Schema architecture", desc: "FAQPage, Service, LocalBusiness, and Article schema implemented on every relevant page." },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-line bg-obsidian p-6">
              <div className="mb-4 h-1 w-12 rounded-full bg-mint" />
              <h3 className="font-display text-xl font-black text-cloud">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-mist">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/services/semantic-seo" className="text-sm font-semibold text-mint hover:underline">
            Explore semantic SEO
          </Link>
        </div>
      </Section>

      <section className="px-5 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 rounded-[2rem] border border-line bg-navy p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-mint">Texas businesses</p>
              <h2 className="mt-2 font-display text-2xl font-black text-cloud">{texasData.headline}</h2>
              <p className="mt-2 max-w-xl text-sm leading-7 text-mist">{texasData.subhead}</p>
            </div>
            <Link href="/locations/texas" className="shrink-0 inline-flex items-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-mist transition hover:border-mint/40 hover:text-cloud">
              Texas SEO + Social
            </Link>
          </div>
        </div>
      </section>

      <Section
        eyebrow="How we work"
        title="Strategy first. Creativity with a commercial reason."
        intro="Every design, caption, page, and report connects to search visibility, buyer trust, or lead generation."
      >
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

      <Section
        variant="navy"
        eyebrow="Proof"
        title="Real outcomes, not portfolio theater."
        intro="Result-focused proof cards that explain the scope, approach, and outcome."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="rounded-[2rem] border border-line bg-obsidian p-7">
              <span className="inline-block rounded-full bg-mint/[0.1] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-mint">
                {study.tag}
              </span>
              <p className="font-mono mt-4 text-2xl font-bold text-cloud">{study.metric}</p>
              <h3 className="mt-3 font-display text-xl font-black text-cloud">{study.title}</h3>
              <p className="mt-3 text-sm leading-7 text-mist">{study.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Pricing snapshot"
        title="Clear packages build trust faster."
        intro="Visible pricing filters in the right buyers. SEO plans start at $1,250/mo."
      >
        <PricingCards items={seoPackages} />
        <div className="mt-8 text-center">
          <Link href="/pricing" className="text-sm font-semibold text-mint hover:underline">
            See all packages including Social Media
          </Link>
        </div>
      </Section>

      <Section variant="navy" eyebrow="Common questions" title="Straight answers before the first conversation.">
        <div className="max-w-3xl">
          <FAQAccordion faqs={homepageFaqs} />
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
