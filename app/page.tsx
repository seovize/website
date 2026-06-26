import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { EntityGraph } from "@/components/EntityGraph";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FounderSection } from "@/components/FounderSection";
import { JsonLd } from "@/components/JsonLd";
import { MetricTicker } from "@/components/MetricTicker";
import { PlatformSelector } from "@/components/PlatformSelector";
import { PricingCards } from "@/components/PricingCards";
import { Section } from "@/components/Section";
import { ServiceIcon } from "@/components/ServiceIcon";
import { TrustStrip } from "@/components/TrustStrip";
import { faqSchema } from "@/lib/schema";
import { caseStudies, founder, homepageFaqs, processSteps, seoPackages, services, texasData } from "@/lib/site";

export const metadata: Metadata = {
  title: "Seovize | Semantic SEO & Social Media Systems — Texas & U.S.",
  description:
    "Abdul Ghani's Seovize delivers semantic SEO, local SEO, and social media systems for U.S. brands. Founder-led strategy, 20+ years experience, serving Texas and nationwide.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homepageFaqs)} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-line px-4 pb-14 pt-20 sm:px-5 md:pb-24 md:pt-32">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">

            {/* Left */}
            <div>
              {/* Trust credential pills */}
              <div className="mb-6 flex flex-wrap items-center gap-2 md:mb-8">
                {[
                  { label: "20+ Years Experience", color: "bg-mint" },
                  { label: "Founder-Led Strategy", color: "bg-orange" },
                  { label: "Texas SEO Expert", color: "bg-sky" },
                ].map((b) => (
                  <span
                    key={b.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-navy px-3 py-1.5 text-[11px] font-semibold text-mist"
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${b.color}`} />
                    {b.label}
                  </span>
                ))}
              </div>

              {/* H1 — fluid from 2.2rem (375px) to 5.8rem (1280px+), no forced breaks */}
              <h1 className="font-display text-[clamp(2.2rem,7.2vw,5.8rem)] font-black leading-[1.0] tracking-[-0.02em] text-cloud">
                Build authority.{" "}
                <span className="text-mint">Capture demand.</span>{" "}
                Win Texas.
              </h1>

              <p className="mt-6 max-w-lg text-base leading-[1.8] text-mist md:mt-8 md:text-lg">
                Semantic SEO, local search authority, and social media systems — engineered by{" "}
                <Link
                  href="/about"
                  className="font-semibold text-cloud underline decoration-mint/40 underline-offset-2 hover:decoration-mint"
                >
                  {founder.name}
                </Link>
                , top Texas SEO expert with {founder.experience}+ years of expertise.
              </p>

              {/* CTAs — stacked on mobile, row on sm+ */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-9">
                <Button href="/contact" size="lg" className="justify-center sm:justify-start">
                  Get a Free Audit →
                </Button>
                <Button href="/services/semantic-seo" variant="secondary" size="lg" className="justify-center sm:justify-start">
                  See how it works
                </Button>
              </div>

              {/* Stats — 2 col on mobile, 4 on sm+ */}
              <div className="mt-10 grid grid-cols-2 gap-y-6 border-t border-line pt-8 sm:grid-cols-4 sm:gap-y-0">
                {[
                  { v: "20+", l: "Years experience" },
                  { v: "6", l: "Service systems" },
                  { v: "4", l: "Texas markets" },
                  { v: "AEO", l: "AI-optimized" },
                ].map((s) => (
                  <div key={s.l} className="pr-4 sm:pr-6">
                    <p className="font-mono text-2xl font-bold text-cloud md:text-3xl">{s.v}</p>
                    <p className="mt-1 text-[11px] font-medium text-slate-mid">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — PlatformSelector */}
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-mid">
                What do you need?
              </p>
              <PlatformSelector />
            </div>
          </div>
        </div>
      </section>

      <MetricTicker />

      {/* ── CITY HUBS ────────────────────────────────────── */}
      <section className="px-4 py-16 sm:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">
                Texas markets
              </p>
              <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-cloud md:text-[3.5rem] md:leading-[1.05]">
                Four cities. One authority system.
              </h2>
            </div>
            <Link
              href="/locations/texas"
              className="hidden shrink-0 text-sm font-semibold text-mint hover:underline md:block"
            >
              Full Texas strategy →
            </Link>
          </div>

          {/* Architectural grid — gap-px + bg-line creates hairline dividers */}
          <div className="grid gap-px bg-line md:grid-cols-2 xl:grid-cols-4">
            {texasData.cities.map((city, i) => (
              <Link
                key={city.slug}
                href="/locations/texas"
                className="group relative overflow-hidden bg-obsidian p-8 transition-colors duration-200 hover:bg-navy"
              >
                {/* Large decorative number */}
                <span
                  className="pointer-events-none absolute -right-2 -top-4 select-none font-mono text-[5.5rem] font-black leading-none text-line transition-colors group-hover:text-line/80"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <h3 className="font-display text-2xl font-black text-cloud">{city.name}</h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-mint">
                    {city.market}
                  </p>
                  <p className="mt-4 text-sm leading-[1.7] text-mist">{city.description}</p>
                  <p className="mt-5 text-xs font-semibold text-mint opacity-0 transition-opacity group-hover:opacity-100">
                    View city strategy →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-5 text-center md:hidden">
            <Link href="/locations/texas" className="text-sm font-semibold text-mint hover:underline">
              Full Texas strategy →
            </Link>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section className="bg-navy px-4 py-16 sm:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-14">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">
              What we build
            </p>
            <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-cloud md:text-[3.5rem] md:leading-[1.05]">
              Six services. One growth system.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-[1.75] text-mist md:mt-5 md:text-lg">
              SEO informs content. Content fuels social. Social signals support search. Everything
              connects — no silos, no guesswork.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-obsidian p-8 shadow-[0_1px_3px_rgba(0,0,0,0.07),0_8px_28px_rgba(0,0,0,0.05)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.11)] dark:shadow-none dark:border dark:border-line"
              >
                {/* Icon container */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-navy">
                  <ServiceIcon slug={s.slug} className="h-5 w-5" />
                </div>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-mint">
                  {s.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-xl font-black text-cloud">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-[1.75] text-mist">{s.description}</p>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                  <p className="font-mono text-sm font-bold text-orange">{s.price}</p>
                  <span className="text-xs font-semibold text-slate-mid transition group-hover:translate-x-0.5 group-hover:text-mint">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER E-E-A-T ─────────────────────────────── */}
      <FounderSection />

      {/* ── SEMANTIC SEO FEATURE ────────────────────────── */}
      <section className="px-4 py-16 sm:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-14">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">
              Semantic SEO
            </p>
            <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-cloud md:text-[3.5rem] md:leading-[1.05]">
              Entity authority that outlasts algorithm updates.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-[1.75] text-mist md:mt-5 md:text-lg">
              We build content around entities and topic clusters — not keywords — so Google understands
              your expertise, trust, and geographic focus at a structural level.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr_1fr]">
            <div className="rounded-2xl border border-line bg-navy p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.04)] dark:shadow-none">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint/10 text-sm font-black text-mint">
                  E
                </div>
                <p className="font-mono text-xs font-bold text-mint">Entity mapping</p>
              </div>
              <h3 className="font-display text-2xl font-black text-cloud">
                Who you are. What you do. Where you serve.
              </h3>
              <p className="mt-4 text-sm leading-[1.75] text-mist">
                Your brand, services, founder, and service areas — structured as semantic entities so
                search engines can verify, connect, and rank each claim with confidence.
              </p>
              <div className="mt-6 rounded-xl border border-line bg-obsidian p-4">
                <EntityGraph />
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-navy p-7 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.04)] dark:shadow-none">
              <div className="mb-5 h-0.5 w-10 rounded-full bg-mint" />
              <h3 className="font-display text-xl font-black text-cloud">Topic clusters</h3>
              <p className="mt-3 text-sm leading-[1.75] text-mist">
                Interconnected content networks that reinforce authority across every sub-topic your
                buyers search.
              </p>
              <div className="mt-6 space-y-3">
                {["Pillar page", "Supporting articles", "Internal link graph", "FAQ layer"].map((t) => (
                  <div key={t} className="flex items-center gap-2.5 text-xs text-mist">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-mint/60" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-navy p-7 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.04)] dark:shadow-none">
              <div className="mb-5 h-0.5 w-10 rounded-full bg-orange" />
              <h3 className="font-display text-xl font-black text-cloud">Schema architecture</h3>
              <p className="mt-3 text-sm leading-[1.75] text-mist">
                FAQPage, Service, LocalBusiness, Person, and Article schema — every page speaks directly
                to Google&rsquo;s semantic brain.
              </p>
              <div className="mt-6 space-y-3">
                {["AEO ready", "GEO optimized", "LLM-cited content", "Position 0 targeting"].map((t) => (
                  <div key={t} className="flex items-center gap-2.5 text-xs text-mist">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange/60" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/services/semantic-seo" className="text-sm font-semibold text-mint hover:underline">
              Explore semantic SEO implementation →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────── */}
      <section className="bg-navy px-4 py-16 sm:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-14">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">
              How we work
            </p>
            <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-cloud md:text-[3.5rem] md:leading-[1.05]">
              Strategy first. Execution second. Results third.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                className="group relative overflow-hidden rounded-2xl bg-obsidian p-8 shadow-[0_1px_3px_rgba(0,0,0,0.07),0_8px_28px_rgba(0,0,0,0.05)] dark:shadow-none dark:border dark:border-line"
              >
                {/* Large decorative step number */}
                <span
                  className="pointer-events-none absolute -right-2 -top-4 select-none font-mono text-[6rem] font-black leading-none text-line/50"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>

                <div className="relative">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-mint font-mono text-sm font-black text-[#0B1020]">
                    {i + 1}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-black text-cloud">{step.title}</h3>
                  <p className="mt-3 text-sm leading-[1.75] text-mist">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF ───────────────────────────────────────── */}
      <section className="px-4 py-16 sm:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-14">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">
              Proof
            </p>
            <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-cloud md:text-[3.5rem] md:leading-[1.05]">
              Results you can verify.
            </h2>
            <p className="mt-3 max-w-xl text-base text-mist md:text-lg">
              Not screenshots you have to trust.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-navy shadow-[0_1px_3px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.04)] transition duration-200 hover:-translate-y-0.5 dark:shadow-none"
              >
                {/* Display-scale metric */}
                <div className="border-b border-line p-8">
                  <span className="inline-block rounded-full border border-mint/20 bg-mint/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-mint">
                    {study.tag}
                  </span>
                  <p className="font-mono mt-4 text-[3.5rem] font-black leading-none text-cloud">
                    {study.metric}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-xl font-black text-cloud">{study.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-[1.75] text-mist">{study.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/case-studies" className="text-sm font-semibold text-mint hover:underline">
              View all case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRICING PREVIEW ─────────────────────────────── */}
      <Section
        eyebrow="Pricing"
        title="Transparent packages. No discovery call just to get a number."
        variant="navy"
      >
        <PricingCards items={seoPackages} />
        <div className="mt-8 text-center">
          <Link href="/pricing" className="text-sm font-semibold text-mint hover:underline">
            See all packages including Social Media →
          </Link>
        </div>
      </Section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <Section eyebrow="FAQ" title="Straight answers. No sales script.">
        <div className="max-w-3xl">
          <FAQAccordion faqs={homepageFaqs} />
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
