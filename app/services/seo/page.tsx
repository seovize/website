import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { PricingCards } from "@/components/PricingCards";
import { faqSchema, howToSchema, serviceSchema, speakableSchema } from "@/lib/schema";
import { seoPackages, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "SEO Services | Semantic SEO & Local SEO for Growth-Focused Brands | Seovize",
  description:
    "Expert SEO services — semantic SEO, technical SEO, local SEO, schema markup, and content strategy by Abdul Ghani, 20+ years experience. Serving U.S. service businesses from $1,250/month.",
  alternates: { canonical: "/services/seo" },
  openGraph: {
    title: "SEO Services | Seovize — Semantic SEO Specialist",
    description:
      "Semantic SEO, technical SEO, local SEO, and content strategy for service businesses. Founder-led by Abdul Ghani with 20+ years of digital marketing expertise.",
    url: `${site.domain}/services/seo`,
  },
};

const faqs = [
  {
    q: "What is semantic SEO and how is it different from traditional SEO?",
    a: "Semantic SEO optimizes for topics, entities, and relationships — not just keywords. Traditional SEO targeted individual keyword phrases. Semantic SEO builds topical authority across interconnected content clusters, establishes your brand and founder as named entities in Google's Knowledge Graph, and uses schema markup to make every page machine-readable. In 2026, semantic SEO is the primary driver of organic ranking for service businesses.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "Most service businesses see meaningful organic traffic growth within 3–5 months of a professional SEO engagement. Featured snippet appearances can happen in 30–60 days for new well-structured pages. Full topical authority — where you rank for dozens of related queries across your service area — typically builds over 6–12 months. SEO is a compounding investment, not a quick fix.",
  },
  {
    q: "Do you provide local SEO for Texas businesses without a physical address?",
    a: "Yes. Seovize specializes in service-area SEO for businesses that operate remotely or across multiple locations. We use LocalBusiness schema with areaServed markup (no fake address required), dedicated service-area landing pages for each city, and ethical citation strategies designed for remote and mobile service businesses.",
  },
  {
    q: "What does an SEO engagement include each month?",
    a: "Every Seovize SEO engagement includes: keyword cluster mapping, on-page optimization for target pages, schema markup implementation, internal link architecture, Google Search Console monitoring, rank tracking, and a monthly strategy report. Higher-tier plans include content production, technical SEO audits, and featured snippet targeting.",
  },
  {
    q: "Can you help service businesses rank for 'near me' searches without a Google Business Profile?",
    a: "Partially. Google Business Profile is the primary driver of 'near me' local pack results. Without a GBP, you will not appear in the map pack — but you can still rank in organic results for '[service] [city]' queries through service-area pages and schema. If you qualify for GBP (you serve clients at their location), we help set it up in service-area mode.",
  },
  {
    q: "How is Seovize different from a large SEO agency?",
    a: "At Seovize, Abdul Ghani personally designs every SEO strategy. There is no account manager passing a brief to a junior writer. Every content cluster, schema decision, and technical recommendation reflects 20+ years of SEO expertise applied directly to your business — not a templated playbook developed for a different industry.",
  },
];

const howToSteps = [
  { name: "Discover and audit", text: "Full technical audit, keyword gap analysis, competitor benchmark, and entity authority assessment. We map where you stand and what it will take to reach your target ranking positions." },
  { name: "Architect the content system", text: "Build topic cluster maps, service page wireframes, and internal link architecture. This is the blueprint for how every piece of content relates to every other piece — and how authority flows across your site." },
  { name: "Implement schema and technical fixes", text: "Deploy Service, FAQPage, HowTo, BreadcrumbList, and Speakable schema. Fix technical issues flagged in audit: page speed, crawlability, Core Web Vitals, duplicate content, canonical errors." },
  { name: "Produce and optimize content", text: "Write or rewrite service pages, location pages, and blog content with topical authority in mind. Every piece is structured for featured snippet eligibility with answer-format sections and PAA-targeted H2s." },
  { name: "Build authority signals", text: "Internal link passes, structured citation building, and strategic external link acquisition. Authority signals compound over time — this phase begins in month one and continues throughout the engagement." },
  { name: "Track, report, and optimize", text: "Weekly rank monitoring, monthly GSC analysis, featured snippet tracking, and a strategy review each month. Data drives every optimization decision." },
];

const deliverables = [
  { title: "Technical SEO audit", desc: "Full crawl analysis covering Core Web Vitals, page speed, structured data errors, canonical issues, index coverage, and internal link architecture." },
  { title: "Keyword cluster mapping", desc: "Comprehensive keyword universe segmented by topic cluster, buyer intent, search volume, and competition — mapped to specific pages on your site." },
  { title: "On-page optimization", desc: "Title tags, meta descriptions, H1/H2 structure, internal linking, image alt text, and content expansion for every target page." },
  { title: "Schema markup implementation", desc: "Service, FAQPage, HowTo, Speakable, BreadcrumbList, and LocalBusiness schema — deployed correctly and validated through Google's Rich Results Test." },
  { title: "Content production", desc: "Service pages, location pages, and blog articles written by a semantic SEO specialist — optimized for topical authority, featured snippets, and entity recognition." },
  { title: "Google Search Console management", desc: "Monthly GSC review covering impressions, clicks, CTR, average position, and index coverage. Performance anomalies flagged and investigated immediately." },
  { title: "Featured snippet targeting", desc: "Structured answer boxes targeting PAA questions in your service category. Every eligible page includes a 40–55 word Speakable-marked answer paragraph." },
  { title: "Monthly strategy report", desc: "Rank movement, traffic trends, featured snippet ownership, content gap analysis, and recommended priorities for the following month." },
];

export default function SeoServicesPage() {
  return (
    <>
      <JsonLd data={serviceSchema("seo")} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: "How to run an SEO engagement for a service business",
          description: "The Seovize SEO process — from audit to compounding organic authority.",
          steps: howToSteps,
        })}
      />
      <JsonLd data={speakableSchema(`${site.domain}/services/seo`)} />

      <Breadcrumbs items={[{ name: "Services", href: "/services/seo" }, { name: "SEO Services", href: "/services/seo" }]} />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="noise relative overflow-hidden px-5 pb-16 pt-20 md:pt-28">
        <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-mint/[0.06] blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">SEO Services</p>
          <h1 className="font-display text-5xl font-black leading-[1.0] tracking-tight text-cloud md:text-7xl">
            Semantic SEO that builds<br />
            <span className="text-mint">lasting authority.</span>
          </h1>

          <div className="speakable mt-8 max-w-3xl rounded-[1.5rem] border border-mint/20 bg-navy px-7 py-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-mint">What is semantic SEO?</p>
            <p className="text-base leading-8 text-cloud">
              Semantic SEO is the practice of building topical authority through interconnected content clusters, entity establishment, and structured schema markup — so Google understands not just what your pages say, but who you are and why you are the most credible source for your service category.
            </p>
          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-mist">
            Seovize builds semantic SEO systems for service businesses, professional practices, and authority-driven brands. Every engagement is personally designed by Abdul Ghani — 20+ years of SEO expertise applied directly to your business. No account managers. No templated playbooks. Real authority architecture.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Get an SEO Roadmap</Button>
            <Button href="/pricing" variant="secondary">See packages & pricing</Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Technical SEO", "Semantic content architecture", "Schema markup", "Featured snippet optimization", "Local SEO", "Entity building"].map((t) => (
              <span key={t} className="rounded-full border border-line bg-navy/50 px-3 py-1.5 text-[11px] font-medium text-mist">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEMANTIC VS TRADITIONAL ───────────────────────── */}
      <Section eyebrow="Why semantic SEO wins in 2026" title="Search has changed. Your SEO strategy should too.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-line bg-navy p-8">
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-slate-mid">Traditional SEO</p>
            <h3 className="font-display text-xl font-black text-cloud">Keyword targeting</h3>
            <p className="mt-4 text-sm leading-7 text-mist">One page, one keyword. Build backlinks. Hope to rank. This approach still partially works, but it ignores Google&apos;s core ranking shift: from keyword matching to entity understanding and topical authority evaluation.</p>
            <div className="mt-5 space-y-2">
              {["Targets individual keywords", "Pages compete in isolation", "Ignores entity signals", "Vulnerable to algorithm updates"].map((p) => (
                <div key={p} className="flex items-center gap-3 text-sm text-mist">
                  <span className="h-1 w-4 rounded-full bg-slate-mid/50" />
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-mint/20 bg-navy p-8">
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-mint">Semantic SEO</p>
            <h3 className="font-display text-xl font-black text-cloud">Topical authority</h3>
            <p className="mt-4 text-sm leading-7 text-mist">Interconnected content clusters, entity establishment, schema markup, and featured snippet architecture. Google understands your brand, validates your expertise, and surfaces you for every relevant query in your service category.</p>
            <div className="mt-5 space-y-2">
              {["Builds topical authority across clusters", "Entity recognition compounds over time", "Schema signals intent and structure", "Featured snippets + AI Overview eligibility"].map((p) => (
                <div key={p} className="flex items-center gap-3 text-sm text-cloud">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── DELIVERABLES ─────────────────────────────────── */}
      <Section variant="navy" eyebrow="Deliverables" title="Everything included in an SEO engagement.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item) => (
            <div key={item.title} className="flex flex-col rounded-[2rem] border border-line bg-obsidian p-6">
              <div className="mb-4 h-1 w-8 rounded-full bg-mint" />
              <h3 className="font-display text-base font-black text-cloud">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-mist">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── PROCESS ──────────────────────────────────────── */}
      <Section eyebrow="Process" title="How a Seovize SEO engagement works.">
        <div className="space-y-4">
          {howToSteps.map((step, i) => (
            <div key={step.name} className="flex gap-6 rounded-[2rem] border border-line bg-navy p-7">
              <span className="font-mono grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mint text-lg font-bold text-obsidian">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-xl font-black text-cloud">{step.name}</h3>
                <p className="mt-3 text-sm leading-7 text-mist">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FEATURED SNIPPET SECTION ──────────────────────── */}
      <Section variant="navy" eyebrow="Featured snippets & AI Overviews" title="Be the answer Google reads aloud.">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm leading-8 text-mist">
              Google&apos;s AI Overviews pull direct answers from pages that implement Speakable schema and write structured answer paragraphs. When your service page answers a buyer&apos;s question in 40–55 words in a clearly marked section, Google lifts that answer into the AI Overview — placing your brand at the very top of results, above all traditional listings.
            </p>
            <p className="mt-5 text-sm leading-8 text-mist">
              Every Seovize SEO engagement includes featured snippet architecture: PAA-targeted H2 questions, Speakable-marked answer boxes, and HowTo schema for process-oriented content. In 2026, the answer layer is where organic visibility is won or lost for most service categories.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Speakable schema", "HowTo structured data", "FAQPage schema", "PAA targeting", "AI Overview eligibility"].map((t) => (
                <span key={t} className="rounded-full border border-line bg-obsidian px-3 py-1.5 text-[11px] font-medium text-mist">{t}</span>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-mint/20 bg-obsidian p-7">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-mint">Example: featured snippet format</p>
            <div className="rounded-xl border border-line bg-navy p-5">
              <p className="font-display text-sm font-black text-cloud">What is semantic SEO?</p>
              <p className="mt-3 text-xs leading-6 text-mist">Semantic SEO is the practice of building topical authority through interconnected content clusters, entity establishment, and schema markup — so Google understands not just what your pages say, but who you are and why you are the most credible source on a subject.</p>
              <p className="mt-3 text-[10px] text-slate-mid">↑ Speakable-marked · targets PAA + AI Overview eligibility</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FOUNDER SIGNAL ───────────────────────────────── */}
      <Section eyebrow="Who runs your SEO" title="Strategy designed by the founder. Not delegated.">
        <div className="flex flex-col gap-0 overflow-hidden rounded-[2rem] border border-line bg-navy md:flex-row">
          <div className="flex shrink-0 flex-col items-center justify-center gap-4 border-b border-line bg-obsidian p-10 text-center md:w-64 md:border-b-0 md:border-r">
            <Image
              src="/images/abdul-ghani.jpg"
              alt="Abdul Ghani — Founder of Seovize and semantic SEO specialist with 20+ years experience"
              width={96}
              height={96}
              className="h-24 w-24 rounded-full object-cover ring-2 ring-mint/30"
            />
            <div>
              <p className="font-display text-xl font-black text-cloud">Abdul Ghani</p>
              <p className="mt-1 text-xs text-slate-mid">Founder · Seovize</p>
              <p className="mt-1 font-mono text-xs text-mint">20+ years · SEO Specialist</p>
            </div>
            <a
              href="https://www.linkedin.com/in/sardarabdulghani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-navy px-4 py-2 text-xs font-semibold text-mist transition hover:text-cloud"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-sky" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Verified LinkedIn
            </a>
          </div>
          <div className="p-10">
            <p className="text-sm leading-8 text-mist">
              When you engage Seovize for SEO, Abdul Ghani personally designs your keyword cluster map, reviews every content brief, approves every schema implementation, and signs off on every monthly strategy report. There is no account manager in the middle. No junior writer interpreting the strategy.
            </p>
            <p className="mt-5 text-sm leading-8 text-mist">
              SEO strategy requires judgment — knowing which keywords to prioritize, which pages to rewrite first, which schema types to implement for your specific business model. These decisions require expertise. They should not be delegated.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Semantic SEO", "Technical SEO", "Schema markup", "Content architecture", "Google Ads", "Local SEO", "Featured snippets", "Entity building"].map((k) => (
                <span key={k} className="rounded-full border border-line px-3 py-1.5 text-[10px] text-slate-mid">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── PRICING ──────────────────────────────────────── */}
      <Section variant="navy" eyebrow="Pricing" title="Choose the right SEO growth level.">
        <PricingCards items={seoPackages} />
      </Section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <Section eyebrow="FAQ" title="SEO questions answered.">
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      {/* ── RELATED LINKS ─────────────────────────────────── */}
      <Section eyebrow="Related services" title="Expand your digital authority.">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            { label: "Semantic SEO", href: "/services/semantic-seo" },
            { label: "Local SEO", href: "/services/local-seo" },
            { label: "Content Marketing", href: "/services/content-marketing" },
            { label: "Social Media Management", href: "/services/social-media-management" },
            { label: "Texas SEO Hub", href: "/locations/texas/seo-services" },
            { label: "Houston SEO", href: "/locations/texas/houston-seo" },
            { label: "Dallas SEO", href: "/locations/texas/dallas-seo" },
            { label: "Austin SEO", href: "/locations/texas/austin-seo" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 rounded-2xl border border-line bg-navy px-5 py-4 text-sm font-semibold text-mist transition hover:border-mint/30 hover:text-cloud"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              {link.label}
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        headline="Ready to build real search authority?"
        subhead="Book a free Growth Roadmap call — a structured review of your current SEO position, content gaps, and what a focused engagement would look like."
        primaryLabel="Get Your SEO Roadmap"
        primaryHref="/contact"
      />
    </>
  );
}
