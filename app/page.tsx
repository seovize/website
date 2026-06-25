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
      <section className="noise relative overflow-hidden px-5 pb-20 pt-24 md:pb-24 md:pt-32">
        {/* layered glows */}
        <div className="pointer-events-none absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-mint/[0.07] blur-[120px]" />
        <div className="pointer-events-none absolute -right-20 top-20 h-[400px] w-[400px] rounded-full bg-orange/[0.06] blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/[0.06] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mint">
                  Engineered by {founder.name} · {founder.experience} yrs
                </span>
              </div>

              <h1 className="font-display text-[clamp(2.6rem,5.5vw,4.2rem)] font-black leading-[1.0] tracking-tight">
                <span className="text-cloud">Data-driven digital</span>
                <br />
                <span className="text-mint">
                  architecture
                </span>
                <br />
                <span className="text-cloud">for Texas brands.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-mist">
                Semantic SEO, local search authority, and social media systems — designed by a{" "}
                <Link href="/about" className="font-semibold text-cloud underline decoration-mint/40 hover:decoration-mint">
                  top Texas SEO expert
                </Link>{" "}
                to build authority and capture demand.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact" size="lg">Get a Free Audit →</Button>
                <Button href="/services/semantic-seo" variant="secondary" size="lg">Explore semantic SEO</Button>
              </div>

              {/* Mini stats row */}
              <div className="mt-10 grid grid-cols-4 divide-x divide-line">
                {[
                  { v: "20+", l: "Years" },
                  { v: "6", l: "Services" },
                  { v: "4", l: "TX cities" },
                  { v: "AEO", l: "Ready" },
                ].map((s) => (
                  <div key={s.l} className="px-4 first:pl-0">
                    <p className="font-mono text-2xl font-bold text-cloud">{s.v}</p>
                    <p className="mt-0.5 text-xs text-slate-mid">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — platform selector */}
            <div className="mt-4 lg:mt-0">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-mid">
                Choose your platform or goal
              </p>
              <PlatformSelector />
            </div>
          </div>
        </div>
      </section>

      <MetricTicker />

      {/* ── CITY HUBS ────────────────────────────────────── */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Texas markets</p>
            <h2 className="font-display text-3xl font-black tracking-tight text-cloud md:text-5xl">
              Semantic hubs across Texas cities.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-mist">
              Hub-and-spoke location architecture — one domain, four city strategies, zero keyword cannibalization.
            </p>
          </div>

          {/* Bento city grid */}
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {texasData.cities.map((city, i) => (
              <Link
                key={city.slug}
                href={`/locations/texas`}
                className="group relative overflow-hidden rounded-[2rem] border border-line bg-navy p-7 transition hover:border-mint/40"
              >
                {/* glow */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-mint/[0.07] blur-2xl transition group-hover:bg-mint/[0.14]" />
                <div className="relative">
                  <span className="font-mono text-xs text-slate-mid">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-3xl font-black text-cloud">{city.name}</h3>
                  <p className="mt-1 text-xs font-semibold text-mint">{city.market}</p>
                  <p className="mt-4 text-sm leading-7 text-mist">{city.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {city.topKeywords.slice(0, 2).map((kw) => (
                      <span key={kw} className="rounded-full border border-line bg-obsidian px-2.5 py-1 text-[9px] text-slate-mid">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/locations/texas" className="text-sm font-semibold text-mint hover:underline">
              View full Texas strategy →
            </Link>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ── SERVICES BENTO ──────────────────────────────── */}
      <Section
        eyebrow="What we build"
        title="Six service lanes. One growth system."
        intro="Every service connects to the others — SEO informs content, content fuels social, social signals support search. No silos."
        variant="navy"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={s.href}
              className={`group relative overflow-hidden rounded-[2rem] border border-line p-7 transition hover:border-mint/30 hover:-translate-y-0.5 ${
                i === 0 ? "bg-navy" : "bg-obsidian"
              }`}
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-mint/[0.06] blur-2xl transition group-hover:bg-mint/[0.12]" />
              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-mint">{s.eyebrow}</p>
                <h3 className="mt-4 font-display text-2xl font-black text-cloud">{s.title}</h3>
                <p className="mt-3 text-sm leading-7 text-mist">{s.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <p className="font-mono text-sm font-bold text-orange">{s.price}</p>
                  <span className="text-xs font-semibold text-slate-mid transition group-hover:text-mint">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── FOUNDER E-E-A-T ─────────────────────────────── */}
      <FounderSection />

      {/* ── SEMANTIC SEO FEATURE ────────────────────────── */}
      <Section
        eyebrow="Semantic SEO"
        title="Entity authority that outlasts algorithm updates."
        intro="We build content around entities and topic clusters — not keywords — so Google understands your expertise, trust, and geographic focus at a structural level."
      >
        <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="rounded-[2rem] border border-line bg-navy p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint/[0.1] text-sm font-bold text-mint">E</div>
              <p className="font-mono text-xs font-bold text-mint">Entity mapping</p>
            </div>
            <h3 className="font-display text-2xl font-black text-cloud">Who you are. What you do. Where you serve.</h3>
            <p className="mt-4 text-sm leading-7 text-mist">
              Your brand, services, founder, and service areas — structured as semantic entities so search engines can
              verify, connect, and rank each claim with confidence.
            </p>
            <div className="mt-6 rounded-xl border border-line bg-obsidian p-4 font-mono text-xs text-slate-mid">
              <span className="text-mint">Organization</span> → <span className="text-sky">Service</span> → <span className="text-orange">areaServed</span> → Texas
            </div>
          </div>
          <div className="rounded-[2rem] border border-line bg-navy p-7">
            <div className="mb-4 h-1 w-10 rounded-full bg-mint" />
            <h3 className="font-display text-xl font-black text-cloud">Topic clusters</h3>
            <p className="mt-3 text-sm leading-7 text-mist">Interconnected content networks that reinforce authority across every sub-topic your buyers search.</p>
            <div className="mt-5 space-y-2">
              {["Pillar page", "Supporting articles", "Internal link graph", "FAQ layer"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-xs text-mist">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint/60" />
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-line bg-navy p-7">
            <div className="mb-4 h-1 w-10 rounded-full bg-orange" />
            <h3 className="font-display text-xl font-black text-cloud">Schema architecture</h3>
            <p className="mt-3 text-sm leading-7 text-mist">FAQPage, Service, LocalBusiness, Person, and Article schema — every page speaks directly to Google&rsquo;s semantic brain.</p>
            <div className="mt-5 space-y-2">
              {["AEO ready", "GEO optimized", "LLM-cited content", "Position 0 targeting"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-xs text-mist">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange/60" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Link href="/services/semantic-seo" className="text-sm font-semibold text-mint hover:underline">
            Explore semantic SEO implementation →
          </Link>
        </div>
      </Section>

      {/* ── PROCESS ─────────────────────────────────────── */}
      <Section eyebrow="How we work" title="Strategy first. Execution second. Results third." variant="navy">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, i) => (
            <div key={step.title} className="relative rounded-[2rem] border border-line bg-obsidian p-6">
              <span className="font-mono grid h-12 w-12 place-items-center rounded-2xl bg-mint text-lg font-bold text-obsidian">
                {i + 1}
              </span>
              <h3 className="mt-6 font-display text-xl font-black text-cloud">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-mist">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── PROOF ───────────────────────────────────────── */}
      <Section eyebrow="Proof" title="Results you can verify — not screenshots you have to trust.">
        <div className="grid gap-4 md:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="group overflow-hidden rounded-[2rem] border border-line bg-navy transition hover:border-mint/30">
              <div className="border-b border-line bg-obsidian px-7 py-5">
                <span className="inline-block rounded-full bg-mint/[0.1] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-mint">
                  {study.tag}
                </span>
                <p className="font-mono mt-3 text-3xl font-bold text-cloud">{study.metric}</p>
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-black text-cloud">{study.title}</h3>
                <p className="mt-3 text-sm leading-7 text-mist">{study.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/case-studies" className="text-sm font-semibold text-mint hover:underline">
            View all case studies →
          </Link>
        </div>
      </Section>

      {/* ── PRICING PREVIEW ─────────────────────────────── */}
      <Section eyebrow="Pricing" title="Transparent packages. No discovery call just to get a number." variant="navy">
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
