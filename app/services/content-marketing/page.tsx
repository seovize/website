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
  title: "Content Marketing Services | Topical Authority & Compounding Organic Traffic | Seovize",
  description:
    "SEO content marketing for service businesses — pillar pages, topic cluster articles, comparison content, and featured snippet optimization that builds compounding organic traffic month over month. Expert-written by Abdul Ghani. From $800/mo.",
  alternates: { canonical: "/services/content-marketing" },
};

const faqs = [
  {
    q: "What is content marketing SEO and how do they work together?",
    a: "Content marketing and SEO are two halves of the same system. SEO identifies the specific questions your buyers are searching — content marketing produces the authoritative answers. A structured content marketing program creates a web of interlinked pages that collectively build topical authority, earning organic traffic that compounds month over month without requiring ongoing paid spend.",
  },
  {
    q: "How many articles per month do I need to build topical authority?",
    a: "For most service businesses entering a competitive topic cluster, 2–4 articles per month — all architecturally linked to pillar pages and to each other — produce measurable topical authority within 4–6 months. Volume without architecture doesn't work. Every Seovize article is briefed within a cluster map before writing begins, so every piece adds to the authority structure rather than existing in isolation.",
  },
  {
    q: "How long does it take to see results from content marketing?",
    a: "Featured snippet appearances can come within 30–60 days for well-structured answer content on established domains. Meaningful organic traffic growth from informational content typically appears at month 3–4. Full topical authority — ranking for dozens of related queries and appearing consistently in AI Overviews — requires 6–12 months of consistent, strategic publishing.",
  },
  {
    q: "Is AI-generated content effective for SEO in 2026?",
    a: "AI-generated content that lacks genuine expertise, original analysis, or real-world application fails Google's helpful content standards — particularly E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). All Seovize content is written with authentic domain expertise and reviewed before publication. AI tools are used for research and brief structuring; the content reflects Abdul Ghani's actual knowledge.",
  },
  {
    q: "What is a pillar page and does my business need one?",
    a: "A pillar page is a comprehensive, authoritative resource covering a broad topic in depth — the hub that all related cluster articles link back to. If your business has a core service category (SEO, consulting, local services), you need a pillar page for it. Pillar pages anchor topical authority and are typically your highest-ranking pages once the cluster around them matures.",
  },
  {
    q: "Should content marketing focus on SEO or social media?",
    a: "Both — with different formats. Long-form articles (1,500–3,000 words) with featured snippet paragraphs serve SEO. Shorter, visual content drives social engagement. The Seovize approach integrates both: every SEO article is repurposed into social media posts, reducing production cost while reinforcing topical authority signals across channels. Content that serves only one channel leaves value on the table.",
  },
];

const howToSteps = [
  {
    name: "Topic Discovery",
    text: "Map the full question landscape of your domain: every question your buyers ask from initial awareness through decision stage. Organized by intent cluster (informational, commercial, comparison) and prioritized by search demand and competition.",
  },
  {
    name: "Cluster Architecture",
    text: "Design your pillar page and cluster article structure. Define internal linking rules that pass topical authority through the cluster. Every article maps to a place in the hierarchy — no orphaned content that doesn't strengthen the overall architecture.",
  },
  {
    name: "Content Brief Development",
    text: "Create structured briefs for every article: target keyword, featured snippet format, word count, schema type, internal links, buyer intent match, and answer-format paragraphs. Briefs ensure consistent quality and strategic alignment across all produced content.",
  },
  {
    name: "Production and Expert Review",
    text: "Write 2–4 SEO-optimized articles per month with authentic domain expertise and voice. Every article reviewed against your brand positioning, factual accuracy, featured snippet eligibility, and E-E-A-T signals before publication.",
  },
  {
    name: "Publishing and Internal Linking",
    text: "Publish with full on-page optimization: meta title, description, Open Graph, schema markup, and breadcrumbs. Add strategic internal links from existing pages to the new content, and from the new content to service pages and related cluster articles.",
  },
  {
    name: "Performance Analysis and Refresh",
    text: "Track ranking movement, organic traffic growth, and keyword footprint expansion monthly. Refresh underperforming articles quarterly with updated content, improved featured snippet paragraphs, and additional schema — content decay is the most underestimated threat to content marketing ROI.",
  },
];

const contentTypes = [
  {
    type: "Pillar Pages",
    accent: "mint",
    desc: "Comprehensive, 2,500–4,000 word resources covering a broad topic from every angle. The anchor of your topical authority — every cluster article links back to the pillar. Structured for featured snippets, HowTo schema, and FAQPage markup.",
  },
  {
    type: "Topic Cluster Articles",
    accent: "mint",
    desc: "Supporting articles that answer the specific sub-questions your buyers ask. Each one targeted to a distinct informational or commercial query, linked to the pillar page and to related cluster articles to build topical authority collectively.",
  },
  {
    type: "Comparison Content",
    accent: "sky",
    desc: "High-intent comparison pages ('Agency vs Freelancer', 'Next.js vs WordPress') that capture buyers at the decision stage. These typically have high conversion rates because the searcher is actively evaluating options — and your page is one of them.",
  },
  {
    type: "Resource Guides",
    accent: "sky",
    desc: "Comprehensive reference pages ('Complete Guide to Texas Local SEO') that earn backlinks organically and serve as entry points for buyers who prefer in-depth resources over blog posts. Strong authority signals for established domains.",
  },
];

const deliverables = [
  "Content strategy, topic cluster map, and editorial calendar for your domain",
  "Keyword-mapped briefs with featured snippet targets, schema plan, and word count",
  "2–4 expert-written, SEO-optimized articles per month — ready to publish",
  "Pillar page strategy and production for core service categories",
  "Internal linking recommendations connecting new content to existing pages",
  "Monthly content performance report: rankings, traffic, keyword footprint",
];

const relatedLinks = [
  { label: "SEO Services", href: "/services/seo" },
  { label: "Semantic SEO", href: "/services/semantic-seo" },
  { label: "Social Media Management", href: "/services/social-media-management" },
  { label: "Texas SEO Hub", href: "/locations/texas/seo-services" },
  { label: "About Abdul Ghani", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "What Is Semantic SEO", href: "/blog/what-is-semantic-seo" },
];

export default function ContentMarketingPage() {
  return (
    <>
      <JsonLd data={serviceSchema("content-marketing")} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: "How Seovize Implements Content Marketing for Service Businesses",
          description: "A 6-step content marketing process that builds topical authority, organic traffic, and featured snippet ownership through structured cluster architecture.",
          steps: howToSteps,
        })}
      />
      <JsonLd data={speakableSchema(`${site.domain}/services/content-marketing`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Services", url: `${site.domain}/services/seo` },
          { name: "Content Marketing", url: `${site.domain}/services/content-marketing` },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: "Services", href: "/services/seo" },
          { name: "Content Marketing", href: "/services/content-marketing" },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-line px-5 pb-16 pt-20 md:pb-24 md:pt-32">
        <div className="pointer-events-none absolute -right-20 top-20 h-[400px] w-[400px] rounded-full bg-sky/[0.04] blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">
            Content marketing · Topical authority
          </p>
          <h1 className="font-display text-[clamp(2.8rem,5.5vw,4.5rem)] font-black leading-[1.0] tracking-[-0.02em] text-cloud">
            Content that compounds.
            <br />
            <span className="text-mint">Authority that lasts.</span>
          </h1>

          {/* Speakable answer box */}
          <div className="speakable mt-8 max-w-3xl rounded-2xl border border-mint/20 bg-navy px-6 py-5">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-mint">
              What is content marketing for SEO?
            </p>
            <p className="text-base leading-[1.85] text-cloud">
              Content marketing for SEO produces interconnected articles, pillar pages, and comparison resources that answer every question your buyers ask — building topical authority that earns compounding organic traffic. Unlike paid advertising that stops when the budget stops, well-architected content continues ranking and generating leads month after month without additional investment.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Get a content strategy roadmap →</Button>
            <Button href="/blog" variant="secondary" size="lg">See our content</Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
            {[
              { v: "2–4", l: "Articles per month" },
              { v: "Cluster", l: "Architecture approach" },
              { v: "30–60d", l: "First snippet wins" },
              { v: "E-E-A-T", l: "Expert voice standard" },
            ].map((s) => (
              <div key={s.l} className="pr-6">
                <p className="font-mono text-2xl font-bold text-cloud">{s.v}</p>
                <p className="mt-1 text-[11px] font-medium text-slate-mid">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE COMPOUNDING MODEL ─────────────────────────── */}
      <Section eyebrow="How it works" title="The compounding returns model.">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-base leading-[1.85] text-mist">
              A blog post published today ranks on page three in month two, moves to page one by month five, and earns traffic every month for years — without additional investment. Three blog posts produce three such assets. Thirty produce a defensible authority position that competitors cannot replicate quickly.
            </p>
            <p className="mt-5 text-base leading-[1.85] text-mist">
              This is the compounding returns model: each piece of content is an asset that earns incrementally. Unlike paid advertising — where traffic stops the moment budget stops — content marketing builds an owned asset base that generates organic traffic indefinitely.
            </p>
            <p className="mt-5 text-base leading-[1.85] text-mist">
              The prerequisite is architecture. Content published without a cluster structure, internal linking strategy, and featured snippet formatting earns a fraction of its potential. Seovize briefs every article within a cluster architecture before production begins.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              { month: "Month 1–2", label: "Infrastructure", desc: "Pillar pages and cluster architecture established. First 4–8 articles published and interlinked." },
              { month: "Month 3–4", label: "First rankings", desc: "Long-tail informational queries begin ranking page one. First featured snippet appearances." },
              { month: "Month 5–6", label: "Traffic growth", desc: "Organic traffic from content cluster becomes measurable. Topic authority signals strengthen." },
              { month: "Month 9–12", label: "Compounding", desc: "Keyword footprint expands beyond initial targets. AI Overview citations appear. Branded query growth." },
            ].map((phase, i) => (
              <div key={phase.month} className="flex items-start gap-4 rounded-2xl border border-line bg-navy p-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint/[0.12] font-mono text-xs font-bold text-mint">
                  {i + 1}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-slate-mid">{phase.month}</span>
                    <span className="h-px w-4 bg-line" />
                    <span className="text-xs font-bold text-cloud">{phase.label}</span>
                  </div>
                  <p className="mt-1 text-xs leading-6 text-mist">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CONTENT TYPES ────────────────────────────────── */}
      <section className="bg-navy px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">Content formats</p>
          <h2 className="mb-10 font-display text-3xl font-black leading-tight text-cloud md:text-5xl md:mb-14">
            Four content types. One authority system.
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {contentTypes.map((item) => (
              <div key={item.type} className="rounded-[2rem] border border-line bg-obsidian p-8">
                <div className={`mb-5 h-1 w-10 rounded-full ${item.accent === "mint" ? "bg-mint" : "bg-sky"}`} />
                <h3 className="font-display text-2xl font-black text-cloud">{item.type}</h3>
                <p className="mt-4 text-sm leading-[1.85] text-mist">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEYWORD INTENT MAPPING ───────────────────────── */}
      <Section eyebrow="Keyword strategy" title="Not all content serves the same buyer.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              stage: "Awareness",
              example: '"what is semantic SEO"',
              format: "Pillar / cluster articles",
              color: "text-sky",
              desc: "Buyers who don't know they have a problem you solve. Content here builds entity recognition and topical authority.",
            },
            {
              stage: "Research",
              example: '"local SEO for contractors"',
              format: "Guides / how-to articles",
              color: "text-sky",
              desc: "Buyers defining their problem. Content here establishes your approach as the right framework.",
            },
            {
              stage: "Comparison",
              example: '"SEO agency vs freelancer"',
              format: "Comparison pages",
              color: "text-mint",
              desc: "Buyers evaluating options. Content here positions Seovize favorably against the alternatives they're considering.",
            },
            {
              stage: "Decision",
              example: '"seovize pricing"',
              format: "Service + pricing pages",
              color: "text-mint",
              desc: "Buyers ready to contact someone. Content here removes final objections and drives the inquiry.",
            },
          ].map((item) => (
            <div key={item.stage} className="rounded-2xl border border-line bg-navy p-6">
              <p className={`mb-1 text-[10px] font-bold uppercase tracking-[0.2em] ${item.color}`}>{item.stage}</p>
              <p className="mb-3 font-mono text-xs text-slate-mid">{item.example}</p>
              <p className="mb-3 text-sm font-semibold text-cloud">{item.format}</p>
              <p className="text-xs leading-6 text-mist">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── DELIVERABLES ─────────────────────────────────── */}
      <section className="bg-navy px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">Deliverables</p>
          <h2 className="mb-10 font-display text-3xl font-black leading-tight text-cloud md:text-5xl md:mb-14">
            Everything included in content marketing.
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
      <Section eyebrow="Process" title="How a content marketing engagement runs.">
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
                alt="Abdul Ghani — Founder of Seovize, content marketing and SEO specialist with 20+ years experience"
                width={96}
                height={96}
                className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-mint/30"
              />
              <p className="mt-4 font-display text-xl font-black text-cloud">{founder.name}</p>
              <p className="mt-1 text-sm text-slate-mid">{founder.title}</p>
              <p className="mt-1 font-mono text-xs text-mint">{founder.experience}+ years · Content strategy</p>
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
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">Expert voice standard</p>
              <h2 className="font-display text-3xl font-black leading-tight text-cloud md:text-4xl">
                Content written from expertise, not briefs.
              </h2>
              <p className="mt-5 text-base leading-[1.85] text-mist">
                Google's helpful content system evaluates whether content was created with genuine expertise or manufactured for search performance. The difference is detectable at scale: generic content that restates commonly available information ranks poorly against content that adds original analysis, real-world application, and expert perspective that can only come from having done the work.
              </p>
              <p className="mt-4 text-base leading-[1.85] text-mist">
                Every Seovize article reflects Abdul Ghani's actual knowledge of SEO, content strategy, and buyer behavior — developed across 20+ years of engagements. Not a generic template. Not AI copy. Expert content, positioned for search.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────── */}
      <Section eyebrow="Pricing" variant="navy" title="Content marketing packages. Published upfront.">
        <PricingCards items={seoPackages} />
        <p className="mt-6 text-center text-xs text-slate-mid">
          Content marketing engagements start at $800/mo for 2 articles. All plans include topic cluster architecture, featured snippet briefs, and internal linking strategy.
        </p>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <Section eyebrow="FAQ" title="Content marketing questions answered.">
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
        headline="Ready to build a content asset base that compounds?"
        subhead="Book a free Growth Roadmap call — a structured review of your current content coverage, topical gaps, and what a focused content marketing engagement would look like."
        primaryLabel="Get a Content Strategy Roadmap"
        primaryHref="/contact"
      />
    </>
  );
}
