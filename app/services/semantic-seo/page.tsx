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
  title: "Semantic SEO Services | Entity Authority & Topical Architecture | Seovize",
  description:
    "Semantic SEO that builds topical authority, entity recognition, and AI Overview eligibility for service-led and expert-driven brands. Entity maps, topic clusters, schema architecture, and featured snippet optimization — founder-led by Abdul Ghani. From $2,200/mo.",
  alternates: { canonical: "/services/semantic-seo" },
};

const faqs = [
  {
    q: "What is semantic SEO and how is it different from traditional keyword SEO?",
    a: "Semantic SEO optimizes your entire content ecosystem around topics, entities, and relationships — not individual keywords. Traditional keyword SEO ranks one page for one phrase. Semantic SEO builds topical authority so your site ranks for every question in a subject area, gets cited in AI Overviews, and compounds its organic footprint over time as entity recognition grows.",
  },
  {
    q: "How long does semantic SEO take to produce results?",
    a: "Entity signals and featured snippet appearances typically come within 30–60 days for new content on established domains. Meaningful topical authority — ranking for dozens of related queries — builds over 4–6 months. The significant compounding effects (expanded keyword footprint, AI Overview citations, branded search growth) emerge between months 6 and 12.",
  },
  {
    q: "Do I need semantic SEO if I already rank well for my main keywords?",
    a: "Especially then. If you already hold page-one positions, semantic SEO expands that advantage: capturing intent variations, PAA boxes, AI Overview mentions, and branded queries you don't currently own. Semantic SEO converts a page-one position into a category-defining presence that competitors cannot easily displace.",
  },
  {
    q: "What is entity SEO and why does it matter in 2026?",
    a: "Entity SEO establishes your brand, founder, and services as distinct, verifiable entries in Google's Knowledge Graph. In 2026, entity recognition directly influences AI Overview citations, Knowledge Panel appearance, and how broadly Google surfaces your content for related queries — including queries that never mention your brand by name.",
  },
  {
    q: "How does semantic SEO work with Google AI Overviews and AEO?",
    a: "Google's AI Overviews pull direct answers from pages with clear entity signals, Speakable schema, and high topical authority. AEO (Answer Engine Optimization) is the practice of formatting content for these answer surfaces — 40–55 word answer paragraphs structured to match the format Google lifts into AI Overviews and voice search responses.",
  },
  {
    q: "Who benefits most from semantic SEO services?",
    a: "Expert-led and service-led businesses see the highest ROI: consultants, agencies, law firms, healthcare providers, financial advisors, and B2B service companies. These businesses compete on authority and trust. Semantic SEO builds the structural signals that communicate that authority to Google at a scale that individual keyword optimization cannot match.",
  },
];

const howToSteps = [
  {
    name: "Entity Audit",
    text: "Map every entity associated with your brand — founder, company, services, locations, and specializations. Identify gaps between how Google currently represents you and how you need to be understood.",
  },
  {
    name: "Topic Cluster Mapping",
    text: "Define the full landscape of questions your buyers ask across their research journey. Build a topic map organizing these into pillar topics and supporting cluster articles — your defended topical territory.",
  },
  {
    name: "Page Architecture Design",
    text: "Design a service page hierarchy that signals topical authority structurally. Every page built for a specific buyer intent, all linked to create a coherent semantic web that Google can navigate confidently.",
  },
  {
    name: "Featured Snippet Production",
    text: "Write 40–55 word answer paragraphs targeting every key question in your cluster. These structured answers are the specific content format Google lifts into AI Overviews and People Also Ask boxes.",
  },
  {
    name: "Schema Deployment",
    text: "Implement Service, FAQPage, HowTo, Person, Organization, Speakable, and BreadcrumbList schema across every page — the machine-readable layer that makes your content eligible for rich results and AI citations.",
  },
  {
    name: "Authority Compounding",
    text: "Monitor topical coverage expansion, featured snippet ownership, and entity recognition growth monthly. Adjust the cluster map each quarter as new question clusters emerge in your domain.",
  },
];

const deliverables = [
  "Entity and topic map — brand, founder, services, locations, and specializations",
  "Service-page architecture and content taxonomy aligned to buyer intent",
  "FAQ layer and structured data on every page (FAQPage, HowTo, Speakable)",
  "Internal linking graph and anchor-text strategy connecting cluster to pillar",
  "Semantic content briefs — 40–55 word answer paragraphs, headings, schema plan",
  "Monthly schema audit and structured data refinement report",
];

const relatedLinks = [
  { label: "SEO Services", href: "/services/seo" },
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "Content Marketing", href: "/services/content-marketing" },
  { label: "Texas SEO Hub", href: "/locations/texas/seo-services" },
  { label: "About Abdul Ghani", href: "/about" },
  { label: "Agency vs Freelancer", href: "/compare/seo-agency-vs-freelancer" },
  { label: "Industries", href: "/industries" },
  { label: "What Is Semantic SEO", href: "/blog/what-is-semantic-seo" },
];

export default function SemanticSeoPage() {
  return (
    <>
      <JsonLd data={serviceSchema("semantic-seo")} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: "How Seovize Implements Semantic SEO",
          description: "A 6-step semantic SEO process that builds entity authority, topical clusters, and AI Overview eligibility for service businesses.",
          steps: howToSteps,
        })}
      />
      <JsonLd data={speakableSchema(`${site.domain}/services/semantic-seo`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Services", url: `${site.domain}/services/seo` },
          { name: "Semantic SEO", url: `${site.domain}/services/semantic-seo` },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: "Services", href: "/services/seo" },
          { name: "Semantic SEO", href: "/services/semantic-seo" },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-line px-5 pb-16 pt-20 md:pb-24 md:pt-32">
        <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-mint/[0.04] blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">
            Entity authority · Semantic SEO
          </p>
          <h1 className="font-display text-[clamp(2.8rem,5.5vw,4.5rem)] font-black leading-[1.0] tracking-[-0.02em] text-cloud">
            Topical authority that outlasts
            <br />
            <span className="text-mint">every algorithm update.</span>
          </h1>

          {/* Speakable answer box */}
          <div className="speakable mt-8 max-w-3xl rounded-2xl border border-mint/20 bg-navy px-6 py-5">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-mint">
              What is semantic SEO?
            </p>
            <p className="text-base leading-[1.85] text-cloud">
              Semantic SEO is the practice of building content around topics, entities, and relationships — not individual keywords. It establishes your brand and founder as verified Knowledge Graph entities, builds topical authority through interconnected content clusters, and structures every page for AI Overview eligibility — producing compounding organic authority that individual keyword optimization cannot achieve.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Get a semantic SEO roadmap →</Button>
            <Button href="/blog/what-is-semantic-seo" variant="secondary" size="lg">See how it works</Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
            {[
              { v: "20+", l: "Years SEO expertise" },
              { v: "Entity-first", l: "Architecture approach" },
              { v: "AEO ready", l: "AI Overview eligible" },
              { v: "@graph", l: "Schema implementation" },
            ].map((s) => (
              <div key={s.l} className="pr-6">
                <p className="font-mono text-2xl font-bold text-cloud">{s.v}</p>
                <p className="mt-1 text-[11px] font-medium text-slate-mid">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRADITIONAL vs SEMANTIC ─────────────────────── */}
      <Section eyebrow="The shift" title="Traditional SEO vs Semantic SEO.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[2rem] border border-line bg-navy p-8">
            <div className="mb-5 h-1 w-10 rounded-full bg-slate-mid" />
            <h3 className="mb-5 font-display text-xl font-black text-mist">Traditional keyword SEO</h3>
            <div className="space-y-3">
              {[
                "Optimizes isolated pages for isolated keywords",
                "Success metric: single keyword ranking position",
                "Invisible to AI Overviews and voice search",
                "Rankings erode with each algorithm update",
                "Content exists as a collection of unrelated pages",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-mid">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-mid/40" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-mint/20 bg-navy p-8">
            <div className="mb-5 h-1 w-10 rounded-full bg-mint" />
            <h3 className="mb-5 font-display text-xl font-black text-cloud">Semantic SEO</h3>
            <div className="space-y-3">
              {[
                "Optimizes the entire content ecosystem around topics and entities",
                "Success metric: topical authority and question coverage",
                "Structured for AI Overview citations and voice answers",
                "Entity-based authority is algorithm-resistant by design",
                "Pages interconnect as a semantic knowledge graph",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-7 text-mist">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── THREE PILLARS ────────────────────────────────── */}
      <section className="bg-navy px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">The architecture</p>
          <h2 className="mb-10 font-display text-3xl font-black leading-tight text-cloud md:text-5xl md:mb-14">
            Three systems. One authority engine.
          </h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Entity Graph */}
            <div className="rounded-[2rem] border border-line bg-obsidian p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/[0.12] font-mono text-lg font-black text-mint">
                E
              </div>
              <h3 className="font-display text-2xl font-black text-cloud">Entity Graph</h3>
              <p className="mt-4 text-sm leading-[1.85] text-mist">
                Your brand, founder, services, and locations — structured as a semantic network Google can verify. When entity signals are consistent across your website, schema, LinkedIn, and citations, Google becomes confident surfacing your brand for every relevant query — including queries that don't mention your name.
              </p>
              <div className="mt-6 space-y-2">
                {["Person schema with @id anchors", "Organization @graph linking", "sameAs verification signals", "Knowledge Graph entity nodes"].map((t) => (
                  <div key={t} className="flex items-center gap-2.5 text-xs text-mist">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-mint/70" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Topic Clusters */}
            <div className="rounded-[2rem] border border-line bg-obsidian p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/[0.12] font-mono text-lg font-black text-mint">
                T
              </div>
              <h3 className="font-display text-2xl font-black text-cloud">Topic Clusters</h3>
              <p className="mt-4 text-sm leading-[1.85] text-mist">
                Interconnected pages that collectively demonstrate expertise. A pillar page covers the broad topic. Cluster articles answer every sub-question. Internal links connect them into a topical web. Google reads this architecture as authority — not just keyword presence — and surfaces the entire cluster for related queries.
              </p>
              <div className="mt-6 space-y-2">
                {["Pillar page + cluster articles", "Strategic internal link graph", "Anchor text authority flow", "PAA and featured snippet coverage"].map((t) => (
                  <div key={t} className="flex items-center gap-2.5 text-xs text-mist">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-mint/70" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Schema Architecture */}
            <div className="rounded-[2rem] border border-line bg-obsidian p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky/[0.12] font-mono text-lg font-black text-sky">
                S
              </div>
              <h3 className="font-display text-2xl font-black text-cloud">Schema Architecture</h3>
              <p className="mt-4 text-sm leading-[1.85] text-mist">
                Machine-readable structured data that tells Google exactly what type of content is on each page, who created it, and how it relates to everything else. The infrastructure layer that makes your content eligible for rich results, AI Overview citations, and voice answer surfaces.
              </p>
              <div className="mt-6 space-y-2">
                {["Service, FAQPage, HowTo markup", "Speakable schema for AI answers", "Article + Person + Organization", "Rich results eligibility on every page"].map((t) => (
                  <div key={t} className="flex items-center gap-2.5 text-xs text-mist">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-sky/70" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED SNIPPET EXAMPLE ─────────────────────── */}
      <Section eyebrow="AI Overview eligibility" title="What answer-layer content looks like.">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-base leading-[1.85] text-mist">
              Google's AI Overviews surface content from pages with three things: high topical authority, clear entity signals, and Speakable schema pointing to the answer section. We build this infrastructure into every page we produce — so your content is structurally eligible for AI-generated answer features, not just traditional blue-link results.
            </p>
            <p className="mt-5 text-base leading-[1.85] text-mist">
              The 40–55 word answer paragraph format is not a coincidence. It matches the length Google consistently lifts into AI Overviews. Every semantic SEO engagement Seovize delivers includes answer-formatted paragraphs targeting every key question in your topic cluster.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Speakable schema", "40–55 word answers", "FAQPage markup", "HowTo schema", "Entity signals"].map((tag) => (
                <span key={tag} className="rounded-full border border-mint/20 bg-mint/[0.08] px-3 py-1.5 text-[10px] font-semibold text-mint">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-line bg-navy p-8">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-mint">AI Overview — example format</p>
            <div className="rounded-xl border border-mint/15 bg-obsidian p-5">
              <p className="mb-3 text-[11px] font-semibold text-slate-mid">What is semantic SEO?</p>
              <p className="text-sm leading-7 text-cloud">
                Semantic SEO is the practice of optimizing content around topics, entities, and relationships — not just keywords. Instead of targeting a single phrase, semantic SEO builds topical authority through interconnected content that helps search engines understand who you are, what you do, and why you are the most credible source on a subject.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-mint" />
                <span className="text-[10px] text-slate-mid">seovize.com — Speakable schema detected</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-mid">
              The answer above is formatted to match Google's AI Overview extraction pattern — 47 words, direct definition, entity-first structure, backed by Speakable schema.
            </p>
          </div>
        </div>
      </Section>

      {/* ── DELIVERABLES ─────────────────────────────────── */}
      <section className="bg-navy px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">Deliverables</p>
          <h2 className="mb-10 font-display text-3xl font-black leading-tight text-cloud md:text-5xl md:mb-14">
            What every semantic SEO engagement includes.
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
      <Section eyebrow="Process" title="How a semantic SEO engagement runs.">
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
                alt="Abdul Ghani — Founder of Seovize, semantic SEO specialist with 20+ years experience"
                width={96}
                height={96}
                className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-mint/30"
              />
              <p className="mt-4 font-display text-xl font-black text-cloud">{founder.name}</p>
              <p className="mt-1 text-sm text-slate-mid">{founder.title}</p>
              <p className="mt-1 font-mono text-xs text-mint">{founder.experience}+ years · Semantic SEO specialist</p>
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
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">Why founder-led matters</p>
              <h2 className="font-display text-3xl font-black leading-tight text-cloud md:text-4xl">
                Semantic SEO is a discipline, not a template.
              </h2>
              <p className="mt-5 text-base leading-[1.85] text-mist">
                Semantic SEO requires decisions that cannot be templated: which entities to establish first, how to structure a topic cluster for a specific industry, how deep a cluster needs to go before topical authority is established. These are judgment calls that only come from building semantic architectures over years — not from a playbook.
              </p>
              <p className="mt-4 text-base leading-[1.85] text-mist">
                Every Seovize semantic SEO engagement is designed personally by Abdul Ghani — 20+ years of expertise applied to your specific domain, your specific buyers, and your specific topical gaps. No account managers, no junior writers making entity decisions.
              </p>
              <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mint hover:underline">
                About Abdul Ghani →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────── */}
      <Section eyebrow="Pricing" variant="navy" title="Semantic SEO packages. No discovery call for pricing.">
        <PricingCards items={seoPackages} />
        <p className="mt-6 text-center text-xs text-slate-mid">
          Semantic SEO engagements start at $2,200/mo. All plans include entity mapping, schema implementation, and topic cluster architecture.
        </p>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <Section eyebrow="FAQ" title="Semantic SEO questions answered.">
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
        headline="Ready to build topical authority that compounds?"
        subhead="Book a free Growth Roadmap call — a structured review of your current entity signals, topical gaps, and what a semantic SEO engagement would look like for your domain."
        primaryLabel="Get a Semantic SEO Roadmap"
        primaryHref="/contact"
      />
    </>
  );
}
