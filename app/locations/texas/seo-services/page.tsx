import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import {
  breadcrumbSchema,
  faqSchema,
  howToSchema,
  localBusinessSchema,
  serviceSchema,
  speakableSchema,
} from "@/lib/schema";
import { founder, site, texasData } from "@/lib/site";

export const metadata: Metadata = {
  title: "Top Local SEO Expert in Texas | SEO Services for Texas Businesses | Seovize",
  description:
    "Top local SEO expert serving Texas businesses in Houston, Dallas, Austin, and San Antonio. Semantic SEO, service-area page systems, and entity-first content architecture by Abdul Ghani — 20+ years experience.",
  alternates: { canonical: "/locations/texas/seo-services" },
  openGraph: {
    title: "Top Local SEO Expert in Texas | Seovize",
    description:
      "SEO services for Texas businesses — semantic SEO, local content, service-area page systems, and schema markup by Abdul Ghani with 20+ years of digital marketing expertise.",
    url: `${site.domain}/locations/texas/seo-services`,
  },
};

const faqs = [
  {
    q: "Who is the top local SEO expert in Texas?",
    a: "Abdul Ghani, founder of Seovize, is recognized as one of the top local SEO experts serving Texas businesses. With 20+ years of digital marketing experience, he delivers semantic SEO, service-area page systems, entity-first content architecture, and schema markup for Houston, Dallas, Austin, and San Antonio businesses — all delivered remotely.",
  },
  {
    q: "What does a local SEO expert do for a Texas business?",
    a: "A local SEO expert audits your current search visibility, maps your service areas and keyword opportunities, builds city-specific content and landing pages, implements LocalBusiness schema, manages local citations, and optimizes your Google Business Profile (if eligible). For Texas businesses, this includes city-by-city strategies for Houston, Dallas, Austin, and San Antonio.",
  },
  {
    q: "How do you rank a Texas business without a physical office?",
    a: "Service-area businesses can rank locally using dedicated service-area pages, LocalBusiness schema with areaServed fields (no street address required), local citation building, and city-specific content clusters. Seovize specializes in this approach — ethical, Google-compliant, and effective for remote service businesses across Texas.",
  },
  {
    q: "What does local SEO for a Texas business include?",
    a: "A complete Texas local SEO strategy includes: Google Business Profile optimization (where eligible), service-area page system, city-specific semantic content, local citations and NAP consistency, LocalBusiness and Service schema markup, internal linking architecture, and monthly rank tracking and reporting.",
  },
  {
    q: "How long does SEO take to work for Texas businesses?",
    a: "Most Texas clients see meaningful ranking movement within 60–90 days for lower-competition terms. Competitive niches like law firms, real estate, or healthcare in Dallas or Houston typically require 4–6 months for significant organic growth in Google's map pack and organic results. Semantic SEO builds more durable rankings than keyword-only approaches.",
  },
  {
    q: "What makes Seovize different from large Texas SEO agencies like Thrive?",
    a: "Large agencies build generic city pages with boilerplate copy and use junior account managers. Seovize is founder-led: Abdul Ghani personally designs every SEO strategy with entity-first content architecture, semantic topic mapping, and real Texas market knowledge. You get senior expertise without the agency overhead or cookie-cutter deliverables.",
  },
];

const texasSeoSteps = [
  {
    name: "Texas search visibility audit",
    text: "Audit your current rankings, crawl health, Core Web Vitals, keyword gaps, and competitor positioning for your Texas markets. Identify which city and service terms you are visible for — and which represent the highest opportunity.",
  },
  {
    name: "Service-area keyword mapping",
    text: "Map your Texas service areas to specific keyword clusters — city-level (Houston SEO, Dallas social media) and service-level (local SEO Texas, semantic SEO Texas). Prevent cannibalization by assigning each keyword cluster to a dedicated page.",
  },
  {
    name: "Semantic content architecture",
    text: "Build entity-first page content that ties your brand, services, founder expertise, and Texas location into a coherent knowledge graph. Each page includes NLP co-occurrence terms, semantic headings, and internal links to topic cluster pages.",
  },
  {
    name: "LocalBusiness schema implementation",
    text: "Deploy LocalBusiness schema using areaServed (not streetAddress) for service-area businesses. Add Service, FAQPage, HowTo, Speakable, BreadcrumbList, and Person schema across all relevant pages. Validate with Google Rich Results Test.",
  },
  {
    name: "City-specific landing page system",
    text: "Create individual pages for each Texas city you serve — Houston, Dallas, Austin, San Antonio — with unique market context, city-specific content, and localized FAQs. Each page targets distinct keyword intent without cannibalization.",
  },
  {
    name: "Texas citation building & authority",
    text: "Build consistent NAP citations across Texas-specific and industry directories. Remove duplicate or conflicting citations. Layer in authoritative local content and structured data signals to reinforce your Texas service-area authority.",
  },
  {
    name: "Monthly rank tracking & optimization",
    text: "Track target keyword rankings in each Texas city weekly. Report monthly on organic traffic, impressions, click-through rate, and featured snippet appearances. Optimize underperforming pages each sprint based on GSC and GA4 data.",
  },
];

const cityLinks = [
  { city: "Houston", seoHref: "/locations/texas/houston-seo", socialHref: "/locations/texas/houston-social-media", market: "Energy & healthcare" },
  { city: "Dallas", seoHref: "/locations/texas/dallas-seo", socialHref: "/locations/texas/dallas-social-media", market: "Corporate & real estate" },
  { city: "Austin", seoHref: "/locations/texas/austin-seo", socialHref: "/locations/texas/austin-social-media", market: "Tech & SaaS" },
  { city: "San Antonio", seoHref: "/locations/texas/san-antonio-seo", socialHref: "/locations/texas/san-antonio-social-media", market: "SMBs & hospitality" },
];

export default function TexasSeoPage() {
  return (
    <>
      <JsonLd data={serviceSchema("seo")} />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: "How local SEO works for Texas service-area businesses",
          description:
            "A step-by-step breakdown of how Seovize delivers local SEO for Texas businesses — from audit to ranking.",
          steps: texasSeoSteps,
        })}
      />
      <JsonLd data={speakableSchema(`${site.domain}/locations/texas/seo-services`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Texas", url: `${site.domain}/locations/texas` },
          { name: "SEO Services", url: `${site.domain}/locations/texas/seo-services` },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: "Texas", href: "/locations/texas" },
          { name: "SEO Services", href: "/locations/texas/seo-services" },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="noise relative overflow-hidden px-5 pb-16 pt-20 md:pt-28">
        <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-sky/[0.05] blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">
            Texas · Local SEO expert
          </p>
          <h1 className="font-display text-4xl font-black leading-tight tracking-tight text-cloud md:text-6xl">
            Top Local SEO Expert<br className="hidden sm:block" />
            in{" "}
            <span className="text-mint">Texas</span>
          </h1>

          {/* Featured snippet answer box */}
          <div className="speakable mt-8 rounded-2xl border border-mint/25 bg-mint/[0.05] p-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-mint">
              Quick Answer
            </p>
            <p className="text-base leading-7 text-cloud">
              Seovize is a top-rated local SEO expert serving Texas businesses in Houston, Dallas, Austin, and San Antonio. Founded by{" "}
              <Link href="/about" className="font-semibold underline decoration-mint/40 hover:decoration-mint">
                Abdul Ghani
              </Link>{" "}
              — 20+ years of SEO expertise — Seovize delivers semantic SEO, service-area page systems, entity-first content architecture, schema markup, and local citation strategies for Texas brands competing in organic search.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-orange px-7 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange/90"
            >
              Get a Free Texas SEO Audit →
            </Link>
            <Link
              href="/services/seo"
              className="inline-flex items-center justify-center rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-mist transition hover:border-mint/40 hover:text-cloud"
            >
              View SEO packages
            </Link>
          </div>
        </div>
      </section>

      {/* ── What is local SEO ─────────────────────────────────────────── */}
      <Section
        eyebrow="What is local SEO"
        title="What a local SEO expert does for Texas businesses."
        intro="Local SEO is the practice of optimizing your online presence to appear in location-specific search results — Google Maps, local pack, and city-level organic results."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "Service-area page system",
              desc: "Dedicated pages for each Texas city you serve — optimized for local buyer intent, location entities, and city-specific semantic terms that signal relevance to Google.",
            },
            {
              title: "LocalBusiness schema",
              desc: "Schema.org ProfessionalService markup using areaServed instead of a street address — valid, effective, and Google-compliant for remote and mobile service businesses.",
            },
            {
              title: "Entity-first content architecture",
              desc: "Content that ties your brand, services, founder expertise, and Texas location into a structured knowledge graph search engines can verify, understand, and rank.",
            },
            {
              title: "Local citation building",
              desc: "Consistent NAP citations across Texas-specific and industry directories. Removes conflicting data that undermines local search trust signals.",
            },
            {
              title: "Semantic keyword clusters",
              desc: "City-level keyword groups mapped to specific pages — no cannibalization, clear intent targeting per Texas metro. Each cluster owns a distinct URL.",
            },
            {
              title: "Google Business Profile optimization",
              desc: "Full GBP optimization for businesses with legitimate eligibility — photo strategy, service listings, post cadence, Q&A management, and review systems.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-line bg-navy p-6"
            >
              <div className="mb-3 h-1 w-8 rounded-full bg-mint" />
              <h3 className="font-display text-lg font-black text-cloud">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-mist">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── How it works — HowTo-eligible ─────────────────────────────── */}
      <Section
        variant="navy"
        eyebrow="How it works"
        title="How local SEO works for Texas service-area businesses."
        intro="A structured 7-step process built for Texas businesses competing without a physical storefront."
      >
        <div className="max-w-3xl">
          <ol className="space-y-7">
            {texasSeoSteps.map((step, i) => (
              <li key={step.name} className="flex gap-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-mint/40 font-mono text-xs font-bold text-mint">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-base font-black text-cloud">
                    {step.name}
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-mist">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ── City-by-city SEO ──────────────────────────────────────────── */}
      <Section
        eyebrow="Texas city SEO"
        title="City-specific SEO strategy for every Texas market."
        intro="Each Texas metro has a distinct economy, competitive landscape, and buyer profile. Our SEO approach is tailored — not templated."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {texasData.cities.map((city) => (
            <div
              key={city.slug}
              className="overflow-hidden rounded-[2rem] border border-line bg-navy"
            >
              <div className="border-b border-line bg-obsidian px-7 py-5">
                <h2 className="font-display text-2xl font-black text-cloud">
                  {city.name} SEO
                </h2>
                <p className="mt-0.5 text-xs font-semibold text-mint">
                  {city.market}
                </p>
              </div>
              <div className="p-7">
                <p className="text-sm leading-7 text-mist">{city.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {city.topKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-full border border-line bg-obsidian px-3 py-1 text-[10px] text-slate-mid"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── City page links ───────────────────────────────────────────── */}
      <Section
        variant="navy"
        eyebrow="City SEO pages"
        title="Dedicated SEO and social media pages by Texas city."
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cityLinks.map((c) => (
            <div
              key={c.city}
              className="rounded-[2rem] border border-line bg-obsidian p-6"
            >
              <h3 className="font-display text-xl font-black text-cloud">
                {c.city}
              </h3>
              <p className="mt-1 text-xs text-mint">{c.market}</p>
              <div className="mt-5 space-y-2">
                <Link
                  href={c.seoHref}
                  className="flex items-center gap-1.5 text-sm font-semibold text-mist hover:text-cloud"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                  {c.city} SEO Services →
                </Link>
                <Link
                  href={c.socialHref}
                  className="flex items-center gap-1.5 text-sm font-semibold text-mist hover:text-cloud"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky" />
                  {c.city} Social Media →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Expert credential ─────────────────────────────────────────── */}
      <Section
        eyebrow="Expert strategy"
        title="Texas SEO led by Abdul Ghani — 20+ years of expertise."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-line bg-navy p-8">
            <div className="mb-4 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mint/10 font-display text-lg font-black text-mint">
                AG
              </div>
              <div>
                <p className="font-display font-black text-cloud">
                  {founder.name}
                </p>
                <p className="text-xs text-mint">
                  {founder.title} · {founder.experience} years experience
                </p>
              </div>
            </div>
            <p className="text-sm leading-7 text-mist">{founder.snippet}</p>
            <Link
              href="/about"
              className="mt-5 inline-flex text-sm font-semibold text-mint hover:underline"
            >
              View full expertise →
            </Link>
          </div>
          <div className="space-y-4">
            {[
              {
                label: "Entity-first architecture",
                desc: "Every SEO strategy is built around your brand entity, founder authority, and service taxonomy — not just keyword density.",
              },
              {
                label: "Service-area specialist",
                desc: "Specializes in ethical service-area SEO for Texas businesses operating without a physical storefront.",
              },
              {
                label: "Schema implementation",
                desc: "Full structured data deployment: LocalBusiness, Service, FAQPage, HowTo, Speakable, BreadcrumbList, Article, Person.",
              },
              {
                label: "Semantic SEO systems",
                desc: "Topic cluster architecture, NLP co-occurrence optimization, and internal linking graphs that build topical authority at scale.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-line bg-navy p-5"
              >
                <p className="font-mono text-sm font-bold text-mint">
                  {item.label}
                </p>
                <p className="mt-1 text-sm text-mist">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <Section
        eyebrow="FAQ"
        title="Texas SEO questions answered."
        intro="Common questions from Texas business owners evaluating professional SEO services."
      >
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      {/* ── Related pages ─────────────────────────────────────────────── */}
      <Section variant="navy" eyebrow="Also explore" title="Related Texas pages.">
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Houston SEO Services", href: "/locations/texas/houston-seo" },
            { label: "Dallas SEO Services", href: "/locations/texas/dallas-seo" },
            { label: "Austin SEO Services", href: "/locations/texas/austin-seo" },
            { label: "San Antonio SEO Services", href: "/locations/texas/san-antonio-seo" },
            { label: "Social Media Manager Texas", href: "/locations/texas/social-media-manager" },
            { label: "Semantic SEO Service", href: "/services/semantic-seo" },
            { label: "Local SEO Service", href: "/services/local-seo" },
            { label: "Texas Hub", href: "/locations/texas" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full border border-line bg-obsidian px-5 py-2.5 text-sm font-semibold text-mist transition hover:border-mint/40 hover:text-cloud"
            >
              {l.label} →
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        headline="Ready to dominate local search across Texas?"
        subhead="Get a free Texas SEO audit — a structured review of your current search visibility, keyword gaps, and what a focused semantic SEO strategy would unlock."
        primaryLabel="Get Your Free Texas SEO Audit"
        primaryHref="/contact"
      />
    </>
  );
}
