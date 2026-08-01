import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FounderSection } from "@/components/FounderSection";
import { JsonLd } from "@/components/JsonLd";
import { MetricTicker } from "@/components/MetricTicker";
import { PlatformSelector } from "@/components/PlatformSelector";
import { PricingCards } from "@/components/PricingCards";
import { Section } from "@/components/Section";
import { ServiceIcon } from "@/components/ServiceIcon";
import { TrustStrip } from "@/components/TrustStrip";
import { faqSchema, speakableSchema } from "@/lib/schema";
import { founder, homepageFaqs, processSteps, services, site, socialPackages, texasData } from "@/lib/site";

export const metadata: Metadata = {
  title: "Social Media Management & Local SEO for Texas Service Businesses",
  description:
    "Social media management, local SEO and paid lead-generation systems for Texas service businesses. Build visibility, trust and a measurable lead path.",
  alternates: { canonical: "/" },
  verification: { google: "LYLtdnAUVec_Ay6HIpaC6juwzMZoKhkY6-i7nF-ANak" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homepageFaqs)} />
      <JsonLd data={speakableSchema(site.domain)} />

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
                  { label: "Founder-Led Strategy", color: "bg-mint" },
                  { label: "Texas Service Businesses", color: "bg-sky" },
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
                Grow your local service business with{" "}
                <span className="text-mint">social, search and paid leads.</span>
              </h1>

              <div className="speakable mt-6 max-w-2xl rounded-2xl border border-mint/20 bg-navy px-6 py-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-mint mb-2">What is Seovize?</p>
                <p className="text-base leading-[1.8] text-cloud">
                  Seovize is a social media management, local SEO and paid lead-generation studio founded by{" "}
                  <Link href="/about" className="font-semibold text-mint hover:underline">
                    {founder.name}
                  </Link>
                  , a digital marketing strategist with {founder.experience} years of experience. A focused growth system that helps Texas local service businesses get found, stay visible and capture demand — built and run personally, not handed off to junior staff.
                </p>
              </div>

              {/* CTAs — stacked on mobile, row on sm+ */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-9">
                <Button href="/contact" size="lg" className="justify-center sm:justify-start">
                  Request a Growth Audit →
                </Button>
                <Button href="/services/social-media-management" variant="secondary" size="lg" className="justify-center sm:justify-start">
                  See how it works
                </Button>
              </div>

              {/* Stats — 2 col on mobile, 4 on sm+ */}
              <div className="mt-10 grid grid-cols-2 gap-y-6 border-t border-line pt-8 sm:grid-cols-4 sm:gap-y-0">
                {[
                  { v: "20+", l: "Years experience" },
                  { v: "6", l: "Service systems" },
                  { v: "4", l: "Texas markets" },
                  { v: "100%", l: "Founder-led" },
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
                Four cities. One remote growth system.
              </h2>
            </div>
            <Link
              href="/locations/texas/social-media-management"
              className="hidden shrink-0 text-sm font-semibold text-mint hover:underline md:block"
            >
              Full Texas strategy →
            </Link>
          </div>

          {/* Architectural grid — gap-px + bg-line creates hairline dividers */}
          <div data-reveal className="grid gap-px bg-line md:grid-cols-2 xl:grid-cols-4">
            {texasData.cities.map((city, i) => (
              <Link
                key={city.slug}
                href={`/locations/texas/${city.slug}-social-media`}
                className="group relative overflow-hidden bg-obsidian p-8 transition-colors duration-200 hover:bg-navy"
              >
                {/* Refined index — small mint tabular marker, not a giant ghost numeral */}
                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-mint/70" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-2xl font-extrabold text-cloud">{city.name}</h3>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-mint">
                  {city.market}
                </p>
                <p className="mt-4 text-sm leading-[1.7] text-mist">{city.description}</p>
                <p className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-mint transition-all group-hover:gap-2">
                  View city strategy
                  <span aria-hidden="true">→</span>
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-5 text-center md:hidden">
            <Link href="/locations/texas/social-media-management" className="text-sm font-semibold text-mint hover:underline">
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
              Every service that grows a local business.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-[1.75] text-mist md:mt-5 md:text-lg">
              Social builds visibility. Local SEO makes you findable. Content and captions connect
              both. Everything
              connects — no silos, no guesswork.
            </p>
          </div>

          <div data-reveal className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
                  <p className="font-mono text-sm font-bold text-cloud">{s.price}</p>
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

      {/* ── 3-PART GROWTH SYSTEM ────────────────────────── */}
      <section className="px-4 py-16 sm:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-14">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">
              How it fits together
            </p>
            <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-cloud md:text-[3.5rem] md:leading-[1.05]">
              One growth system, three connected parts.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-[1.75] text-mist md:mt-5 md:text-lg">
              Social media builds visibility and trust. Local SEO makes you findable when someone&apos;s
              ready to buy. Paid social fills the gap while the organic system compounds. Each is a
              distinct service with its own scope — not one page pretending to be three.
            </p>
          </div>

          <div data-reveal className="grid gap-4 lg:grid-cols-3">
            <Link
              href="/services/social-media-management"
              className="group rounded-2xl border border-line bg-navy p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 dark:shadow-none"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint/10 text-sm font-black text-mint">
                  1
                </div>
                <p className="font-mono text-xs font-bold text-mint">Organic social</p>
              </div>
              <h3 className="font-display text-2xl font-black text-cloud">
                Social Media Management
              </h3>
              <p className="mt-4 text-sm leading-[1.75] text-mist">
                Strategy, content creation, publishing, community management and reporting — a
                complete organic system, not random posting.
              </p>
              <p className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-mint">
                See the service <span aria-hidden="true">→</span>
              </p>
            </Link>

            <Link
              href="/services/local-seo"
              className="group rounded-2xl border border-line bg-navy p-7 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 dark:shadow-none"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky/10 text-sm font-black text-sky">
                  2
                </div>
                <p className="font-mono text-xs font-bold text-sky">Search visibility</p>
              </div>
              <h3 className="font-display text-xl font-black text-cloud">Local SEO</h3>
              <p className="mt-3 text-sm leading-[1.75] text-mist">
                Website and local-search optimization grounded in relevance and honest service-area
                positioning — no fake offices, no map-pack guarantees.
              </p>
              <p className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-sky">
                See the service <span aria-hidden="true">→</span>
              </p>
            </Link>

            <Link
              href="/services/paid-social-advertising"
              className="group rounded-2xl border border-line bg-navy p-7 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 dark:shadow-none"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange/10 text-sm font-black text-orange">
                  3
                </div>
                <p className="font-mono text-xs font-bold text-orange">Paid media</p>
              </div>
              <h3 className="font-display text-xl font-black text-cloud">Paid Social Advertising</h3>
              <p className="mt-3 text-sm leading-[1.75] text-mist">
                Meta campaign management focused on qualified local leads — creative testing and clear
                reporting, billed separately from organic social.
              </p>
              <p className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-orange">
                See the service <span aria-hidden="true">→</span>
              </p>
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

          <div data-reveal className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                className="group relative overflow-hidden rounded-2xl bg-obsidian p-8 shadow-[0_1px_3px_rgba(0,0,0,0.07),0_8px_28px_rgba(0,0,0,0.05)] dark:shadow-none dark:border dark:border-line"
              >
                {/* Refined step marker — mint ring with index, no giant ghost numeral */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-mint/30 bg-mint/10 font-mono text-sm font-bold text-mint">
                    {i + 1}
                  </div>
                  <span className="h-px flex-1 bg-line" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-xl font-extrabold text-cloud">{step.title}</h3>
                <p className="mt-3 text-sm leading-[1.75] text-mist">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/our-process" className="text-sm font-semibold text-mint hover:underline">
              See the full 5-stage engagement process →
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
        <PricingCards items={socialPackages} service="Social Media Management" />
        <div className="mt-8 text-center">
          <Link href="/pricing" className="text-sm font-semibold text-mint hover:underline">
            See all packages including SEO →
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
