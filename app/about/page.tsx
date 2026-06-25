import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { personSchema } from "@/lib/schema";
import { founder, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Abdul Ghani — Founder of Seovize | SEO & Digital Marketing Expert",
  description:
    "Abdul Ghani is a semantic SEO specialist and the founder of Seovize with 20+ years of experience in local SEO, Google Ads, Meta Ads, and social media management for U.S. brands.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="noise relative overflow-hidden px-5 pb-16 pt-20 md:pt-28">
        <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-mint/[0.06] blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">About the founder</p>
          <h1 className="font-display text-4xl font-black leading-tight tracking-tight text-cloud md:text-6xl">
            About{" "}
            <span className="text-mint">
              Abdul Ghani
            </span>
            <br />
            Founder of Seovize
          </h1>

          {/* ── SNIPPET TRIGGER PARAGRAPH ─────────────────────
               This paragraph is structured to trigger a
               definition-style Featured Snippet for
               "Who is Abdul Ghani"
          ────────────────────────────────────────────────── */}
          <p className="mt-7 max-w-3xl text-lg leading-8 text-cloud" itemScope itemType="https://schema.org/Person">
            <span itemProp="name">Abdul Ghani</span> is an expert digital marketing strategist, semantic SEO specialist,
            and the founder of{" "}
            <Link href="/" className="font-semibold text-mint hover:underline" itemProp="worksFor">
              Seovize
            </Link>
            . Recognized as a top local SEO expert serving Texas businesses remotely, he specializes in entity-first
            content architecture, Google Ads optimization, Meta Ads, and social media management for service-led and
            expert-driven brands. With{" "}
            <span itemProp="yearsOfExperience">20+</span> years of experience, Abdul Ghani helps growth-focused U.S.
            brands build search authority, social presence, and conversion-ready digital systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-orange px-7 py-3.5 text-sm font-bold text-cloud shadow-[0_0_40px_rgba(249,115,22,0.3)] transition hover:bg-orange/90">
              Work with Abdul Ghani →
            </Link>
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-mist transition hover:border-sky/40 hover:text-cloud"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-sky" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Verified LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* ── IDENTITY CARD ─────────────────────────────────── */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-[2rem] border border-line bg-navy">
            <div className="grid md:grid-cols-[auto_1fr] md:divide-x md:divide-line">
              <div className="flex flex-col items-center justify-center gap-4 p-10 text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-mint text-4xl font-black text-obsidian">
                  AG
                </div>
                <div>
                  <p className="font-display text-2xl font-black text-cloud">{founder.name}</p>
                  <p className="mt-1 text-sm text-slate-mid">{founder.title}</p>
                  <p className="mt-1 font-mono text-xs text-mint">{founder.experience} years · {site.name}</p>
                </div>
                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-sky/[0.1] px-4 py-2 text-xs font-semibold text-sky hover:bg-sky/[0.18] transition">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Verified LinkedIn
                </a>
              </div>
              <div className="p-10">
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-slate-mid">Background</p>
                <p className="text-base leading-8 text-mist">{founder.bio}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {founder.knowsAbout.map((k) => (
                    <span key={k} className="rounded-full border border-line px-3 py-1.5 text-[10px] text-slate-mid">{k}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ─────────────────────────────────────── */}
      <Section
        eyebrow="Core expertise"
        title="20+ years of measurable digital marketing expertise."
        intro="Not a generalist agency. Abdul Ghani's expertise covers the full stack — from technical SEO and schema to paid advertising and social media production systems."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {founder.expertise.map((item) => (
            <div key={item.area} className="rounded-[2rem] border border-line bg-navy p-7">
              <p className="font-mono text-xs font-bold text-mint">{item.area}</p>
              <p className="mt-3 text-sm leading-7 text-mist">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── WHY SEOVIZE ──────────────────────────────────── */}
      <Section
        variant="navy"
        eyebrow="Why Seovize was built"
        title="What Seovize was built to solve."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Generic agencies don't build entity authority",
              desc: "Most agencies build templated keyword pages. Seovize builds entity-first content architecture that ties your brand, founder, services, and location into a structured knowledge graph — the only sustainable way to rank in 2026.",
            },
            {
              title: "Founder-led means no account managers diluting strategy",
              desc: "At Seovize, Abdul Ghani personally designs every strategy. There is no account manager passing a brief to a junior writer. Every content cluster, schema decision, and campaign architecture reflects 20+ years of expertise.",
            },
            {
              title: "Texas businesses needed a named expert, not a faceless agency",
              desc: "Competitor agencies rank for Texas terms with generic city pages. Seovize ranks with real expertise, founder identity, Texas-specific content systems, and ethical service-area positioning that builds lasting trust.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-line bg-obsidian p-7">
              <div className="mb-4 h-1 w-10 rounded-full bg-orange" />
              <h3 className="font-display text-xl font-black text-cloud">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-mist">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── TEXAS FOCUS ──────────────────────────────────── */}
      <Section eyebrow="Texas focus" title="Remote studio. Real Texas market expertise.">
        <div className="overflow-hidden rounded-[2rem] border border-line bg-navy">
          <div className="border-b border-line px-8 py-6">
            <p className="text-sm leading-7 text-mist">
              Seovize serves Texas businesses remotely from a dedicated remote studio. We never claim a fake physical address,
              and we do not build Google Business Profiles without real service-area eligibility. Instead, we build
              genuine Texas search authority through{" "}
              <strong className="text-cloud">dedicated service-area pages, Texas-specific content clusters, LocalBusiness schema with areaServed fields,</strong>{" "}
              and citation strategies built for remote service businesses.
            </p>
          </div>
          <div className="grid divide-line p-6 sm:grid-cols-4 sm:divide-x">
            {["Houston", "Dallas", "Austin", "San Antonio"].map((city) => (
              <div key={city} className="px-5 py-3 text-center first:pl-0 sm:first:pl-5">
                <p className="font-display text-lg font-black text-cloud">{city}</p>
                <p className="mt-1 text-xs text-slate-mid">Active market</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTABanner
        headline="Ready to work with a named expert, not a faceless agency?"
        subhead="Abdul Ghani personally reviews every new engagement before it starts. Book a Growth Roadmap call and get a strategy built by the founder."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
      />
    </>
  );
}
