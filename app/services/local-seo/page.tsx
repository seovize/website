import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PricingCards } from "@/components/PricingCards";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema, howToSchema, serviceSchema, speakableSchema } from "@/lib/schema";
import { founder, seoPackages, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Local SEO Services | Service-Area & GBP Optimization for Texas Businesses | Seovize",
  description:
    "Local SEO for service businesses in Texas and across the U.S. — Google Business Profile optimization, service-area pages, LocalBusiness schema with areaServed, citation building, and review systems. No fake address required. From $950/mo.",
  alternates: { canonical: "/services/local-seo" },
};

const faqs = [
  {
    q: "What is local SEO and how is it different from regular SEO?",
    a: "Local SEO optimizes your online presence specifically for geographic search queries — 'SEO agency Houston', 'contractor near me', 'best restaurant San Antonio'. It prioritizes Google Business Profile visibility, local pack rankings, and service-area page performance. Regular SEO focuses on organic rankings nationally or globally. Local SEO targets the map pack and local intent queries that drive direct calls, visits, and bookings.",
  },
  {
    q: "Do I need a physical address to do local SEO?",
    a: "No. Service-area businesses — consultants, contractors, agencies, mobile services — can build strong local search visibility without a physical storefront. Google Business Profile supports service-area mode (no displayed address). LocalBusiness schema with areaServed markup signals geographic coverage without requiring a street address. Seovize itself is a service-area business ranking in Texas markets — we apply the same ethical strategies to our clients.",
  },
  {
    q: "How important is Google Business Profile for local SEO?",
    a: "Google Business Profile is the single highest-impact asset in local SEO for most businesses. The local pack (the map with 3 business listings) appears above organic results for most local intent queries. A complete, optimized GBP — with accurate categories, photos, services, Q&A, and active weekly posts — is the foundation everything else builds on. Without it, local SEO efforts yield a fraction of their potential.",
  },
  {
    q: "How long does local SEO take to show results?",
    a: "Service-area pages with schema markup typically see first-page rankings for long-tail local queries within 45–90 days on established domains. GBP optimization impacts local pack visibility within 30 days for most categories. Competitive city-center markets (Houston downtown, Dallas CBD) take longer — 3–5 months — because incumbent businesses are entrenched. Suburban and neighborhood-level targeting is consistently faster.",
  },
  {
    q: "How do online reviews affect local SEO rankings?",
    a: "Reviews directly influence local pack rankings through Google's prominence signal — one of the three primary ranking factors. Review volume, review velocity (new reviews per month), and response rate all matter. A business with 80 reviews and 4 new reviews this week typically outranks a competitor with 200 reviews and none in three months. Responding to every review — positive and negative — signals to Google that your business is actively managed.",
  },
  {
    q: "Can a Texas business rank locally without a Google Business Profile?",
    a: "Yes, through organic local search — targeting city-specific service pages and building topical authority for Texas market queries. Without GBP, you won't appear in the local map pack, but you can still rank in the organic results below it, which drives significant traffic. Most Seovize clients combine organic local SEO (service-area pages, schema, citations) with a properly configured GBP for maximum local search coverage.",
  },
];

const howToSteps = [
  {
    name: "GBP Audit",
    text: "Review every Google Business Profile element: primary and secondary categories, photos (minimum 10 high-quality images), services list with descriptions, hours accuracy, Q&A seeding, and post frequency. Categories are the single most impactful GBP optimization variable — getting them wrong costs rankings before anything else is considered.",
  },
  {
    name: "Citation Audit",
    text: "Run a NAP (Name, Address, Phone) consistency audit across Google, Yelp, Bing Places, Apple Maps, BBB, and 50+ secondary directories. Every inconsistency — even 'St.' vs 'Street' — is a negative citation signal. We fix discrepancies at the source, not just flag them.",
  },
  {
    name: "Service-Area Page Strategy",
    text: "Map each target city, neighborhood, and county to its specific search demand. Prioritize markets where genuine, non-templated content can achieve page-one rankings within 60–90 days. Template city pages with swapped city names are penalized — every page needs authentic local content.",
  },
  {
    name: "Schema Deployment",
    text: "Implement LocalBusiness or ProfessionalService schema with areaServed for every target market. Add FAQPage, BreadcrumbList, and Speakable schema to every service-area page. Validate everything with Google's Rich Results Test before publishing.",
  },
  {
    name: "Review Acquisition System",
    text: "Build a post-engagement review request workflow: timing rules (24–48 hours after service delivery), message templates for SMS and email, direct review links, and a response protocol for all incoming reviews — positive and negative.",
  },
  {
    name: "Monthly Rank Tracking",
    text: "Track local pack positions for primary keywords across target cities. Monitor GBP insights: searches, views, calls, and direction requests. Report citation growth, review velocity, and organic ranking movement monthly with recommended priority actions.",
  },
];

const deliverables = [
  "Google Business Profile audit, category optimization, and ongoing weekly posts",
  "NAP citation audit across 50+ directories — inconsistencies corrected at source",
  "Service-area landing pages with genuine local content (not swapped city names)",
  "LocalBusiness/ProfessionalService schema with areaServed for every target market",
  "Post-engagement review acquisition workflow — timing, templates, direct links",
  "Monthly local rank tracking report — GBP insights, map pack positions, citation growth",
];

const texasCities = [
  { city: "Houston", market: "Energy, healthcare, refining", href: "/locations/texas/houston-seo" },
  { city: "Dallas", market: "Finance, tech, corporate", href: "/locations/texas/dallas-seo" },
  { city: "Austin", market: "Tech, SaaS, startups", href: "/locations/texas/austin-seo" },
  { city: "San Antonio", market: "Military, healthcare, tourism", href: "/locations/texas/san-antonio-seo" },
];

const relatedLinks = [
  { label: "SEO Services", href: "/services/seo" },
  { label: "Semantic SEO", href: "/services/semantic-seo" },
  { label: "Texas SEO Hub", href: "/locations/texas/seo-services" },
  { label: "Houston SEO", href: "/locations/texas/houston-seo" },
  { label: "Dallas SEO", href: "/locations/texas/dallas-seo" },
  { label: "Austin SEO", href: "/locations/texas/austin-seo" },
  { label: "Industries", href: "/industries" },
  { label: "Local SEO Without Address", href: "/blog/local-seo-without-physical-address" },
];

export default function LocalSeoPage() {
  return (
    <>
      <JsonLd data={serviceSchema("local-seo")} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: "How Seovize Implements Local SEO for Texas Service Businesses",
          description: "A 6-step local SEO process covering GBP optimization, citation building, service-area pages, LocalBusiness schema, and review systems.",
          steps: howToSteps,
        })}
      />
      <JsonLd data={speakableSchema(`${site.domain}/services/local-seo`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Services", url: `${site.domain}/services/seo` },
          { name: "Local SEO", url: `${site.domain}/services/local-seo` },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: "Services", href: "/services/seo" },
          { name: "Local SEO", href: "/services/local-seo" },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-line px-5 pb-16 pt-20 md:pb-24 md:pt-32">
        <div className="pointer-events-none absolute -left-40 top-10 h-[400px] w-[400px] rounded-full bg-mint/[0.05] blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">
            Local SEO · Texas service-area specialist
          </p>
          <h1 className="font-display text-[clamp(2.8rem,5.5vw,4.5rem)] font-black leading-[1.0] tracking-[-0.02em] text-cloud">
            Local search visibility.
            <br />
            <span className="text-mint">No fake address required.</span>
          </h1>

          {/* Speakable answer box */}
          <div className="speakable mt-8 max-w-3xl rounded-2xl border border-mint/20 bg-navy px-6 py-5">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-mint">
              What is local SEO for service businesses?
            </p>
            <p className="text-base leading-[1.85] text-cloud">
              Local SEO for service businesses builds visibility in geographic search results — local pack rankings, Google Business Profile optimization, service-area landing pages, LocalBusiness schema with areaServed markup, and citation consistency — without requiring a physical storefront. Service-area businesses can rank in multiple Texas cities through ethical, schema-first local SEO architecture.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Get a local SEO roadmap →</Button>
            <Button href="/locations/texas" variant="secondary" size="lg">See Texas strategy</Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
            {[
              { v: "4", l: "Texas markets" },
              { v: "No fake", l: "Address needed" },
              { v: "areaServed", l: "Schema approach" },
              { v: "45–90d", l: "First rankings" },
            ].map((s) => (
              <div key={s.l} className="pr-6">
                <p className="font-mono text-2xl font-bold text-cloud">{s.v}</p>
                <p className="mt-1 text-[11px] font-medium text-slate-mid">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW LOCAL RANKING WORKS ──────────────────────── */}
      <Section eyebrow="How Google ranks local results" title="Three factors. One competitive edge.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Relevance",
              color: "bg-mint",
              desc: "How well your GBP categories, website content, and schema markup match the searcher's query. Category selection is the most impactful single variable — wrong primary category and you don't appear for your core service terms regardless of reviews or proximity.",
            },
            {
              title: "Proximity",
              color: "bg-sky",
              desc: "How close your business location (or service area) is to the searcher. You cannot engineer proximity directly — but service-area pages that signal geographic relevance to specific neighborhoods and cities compensate for location disadvantage.",
            },
            {
              title: "Prominence",
              color: "bg-mint",
              desc: "How well-known and trusted your business is, measured through review volume and velocity, citation consistency across directories, backlinks from local sources, and overall website authority. This is the most engineerable factor over time.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-line bg-navy p-8">
              <div className={`mb-5 h-1 w-10 rounded-full ${item.color}`} />
              <h3 className="font-display text-2xl font-black text-cloud">{item.title}</h3>
              <p className="mt-4 text-sm leading-[1.85] text-mist">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-mid">
          Google's local pack algorithm weighs these three factors simultaneously. Most businesses over-invest in content and under-invest in GBP category optimization and citation consistency — the two highest-leverage factors for new local SEO engagements.
        </p>
      </Section>

      {/* ── GBP DEEP DIVE ────────────────────────────────── */}
      <section className="bg-navy px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">GBP optimization</p>
          <h2 className="mb-3 font-display text-3xl font-black leading-tight text-cloud md:text-5xl">
            Google Business Profile is not a listing. It is your local search foundation.
          </h2>
          <p className="mb-10 max-w-3xl text-base leading-[1.85] text-mist md:mb-14">
            Most businesses set up a GBP once and never optimize it. Seovize treats GBP as an active SEO asset — optimized at the category level, maintained with weekly posts, and monitored for the specific insights that drive local pack ranking decisions.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                area: "Categories",
                detail: "Primary category is the most impactful GBP signal. Secondary categories extend reach to adjacent service terms. Category research uses Google's exact taxonomy — not guesswork.",
              },
              {
                area: "Photos",
                detail: "Businesses with 10+ high-quality photos receive significantly more direction requests and calls than those with fewer images. We define a photo strategy covering interior, exterior, team, and work product images.",
              },
              {
                area: "Posts",
                detail: "Weekly GBP posts signal to Google that your business is actively managed — a positive prominence signal. We write and publish posts tied to your services, promotions, and local market events.",
              },
              {
                area: "Reviews",
                detail: "Review velocity (new reviews per month) outweighs total review count in Google's local ranking algorithm. We build systematic review acquisition workflows that generate consistent new reviews without violating Google's policies.",
              },
            ].map((item) => (
              <div key={item.area} className="rounded-2xl border border-line bg-obsidian p-6">
                <p className="mb-3 font-mono text-xs font-bold text-mint">{item.area}</p>
                <p className="text-sm leading-[1.85] text-mist">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEXAS CITIES ─────────────────────────────────── */}
      <Section eyebrow="Texas markets" title="Four cities. One authority system.">
        <div className="grid gap-px bg-line md:grid-cols-2 xl:grid-cols-4">
          {texasCities.map((city, i) => (
            <Link
              key={city.city}
              href={city.href}
              className="group relative bg-obsidian p-8 transition-colors hover:bg-navy"
            >
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-mint/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-cloud">{city.city}</h3>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-mint">{city.market}</p>
              <p className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-mint">
                Local SEO strategy <span>→</span>
              </p>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-mid">
          Each Texas market has distinct search demand patterns, competitive density, and buyer characteristics. Seovize builds city-specific strategies rather than applying a generic template across markets.
        </p>
      </Section>

      {/* ── DELIVERABLES ─────────────────────────────────── */}
      <section className="bg-navy px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">Deliverables</p>
          <h2 className="mb-10 font-display text-3xl font-black leading-tight text-cloud md:text-5xl md:mb-14">
            Everything included in local SEO.
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl border border-line bg-obsidian p-6">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint/[0.12] font-mono text-xs font-bold text-mint">
                  {i + 1}
                </span>
                <p className="text-sm leading-7 text-mist">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────── */}
      <Section eyebrow="Process" title="How a local SEO engagement runs.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {howToSteps.map((step, i) => (
            <div key={step.name} className="rounded-[2rem] border border-line bg-navy p-8">
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-mint/30 bg-mint/10 font-mono text-sm font-bold text-mint">
                  {i + 1}
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <h3 className="font-display text-lg font-black text-cloud">{step.name}</h3>
              <p className="mt-3 text-sm leading-[1.85] text-mist">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FOUNDER ──────────────────────────────────────── */}
      <section className="bg-navy px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
            <div className="rounded-[2rem] border border-line bg-obsidian p-8 text-center">
              <Image
                src="/images/abdul-ghani.jpg"
                alt="Abdul Ghani — Founder of Seovize, Texas local SEO specialist with 20+ years experience"
                width={96}
                height={96}
                className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-mint/30"
              />
              <p className="mt-4 font-display text-xl font-black text-cloud">{founder.name}</p>
              <p className="mt-1 text-sm text-slate-mid">{founder.title}</p>
              <p className="mt-1 font-mono text-xs text-mint">{founder.experience}+ years · Texas local SEO</p>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-sky/20 bg-sky/[0.08] px-4 py-2 text-xs font-semibold text-sky transition hover:bg-sky/[0.14]"
              >
                Verified LinkedIn →
              </a>
            </div>
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">
                Seovize is a service-area business
              </p>
              <h2 className="font-display text-3xl font-black leading-tight text-cloud md:text-4xl">
                We practice what we build.
              </h2>
              <p className="mt-5 text-base leading-[1.85] text-mist">
                Seovize is itself a service-area business — we serve Texas clients remotely from a dedicated studio without a physical Texas office. Every local SEO strategy we build for clients is tested on our own presence first: service-area pages for Houston, Dallas, Austin, and San Antonio; LocalBusiness schema with areaServed (no fake address); GBP in service-area mode; citation building across Texas directories.
              </p>
              <p className="mt-4 text-base leading-[1.85] text-mist">
                The tactics that work for Seovize are the tactics we deploy for our clients. No theoretical strategies, no untested advice.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/about" className="text-sm font-semibold text-mint hover:underline">
                  About Abdul Ghani →
                </Link>
                <Link href="/locations/texas" className="text-sm font-semibold text-slate-mid hover:text-cloud">
                  Texas SEO strategy →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────── */}
      <Section eyebrow="Pricing" variant="navy" title="Local SEO packages. Pricing shown upfront.">
        <PricingCards items={seoPackages} />
        <p className="mt-6 text-center text-xs text-slate-mid">
          Local SEO engagements start at $950/mo. All plans include GBP optimization, citation audit, schema deployment, and monthly reporting.
        </p>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <Section eyebrow="FAQ" title="Local SEO questions answered.">
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      {/* ── RELATED ──────────────────────────────────────── */}
      <section className="border-t border-line px-5 py-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-mid">Explore further</p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-line bg-navy px-4 py-3 text-sm font-semibold text-mist transition hover:border-mint/30 hover:text-cloud"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to build local search authority in Texas?"
        subhead="Book a free Growth Roadmap call — a structured review of your current local SEO position, GBP completeness, and what a focused engagement would look like for your markets."
        primaryLabel="Get a Local SEO Roadmap"
        primaryHref="/contact"
      />
    </>
  );
}
