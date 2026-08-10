import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema, speakableSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Social Media Content Ideas for Home Service Businesses",
  description:
    "Practical, repeatable social media content ideas for contractors, HVAC, cleaning and roofing companies — built around real jobs, not generic templates.",
  alternates: { canonical: "/guides/social-media-content-ideas-home-services" },
  openGraph: {
    title: "Social Media Content Ideas for Home Service Businesses | Seovize",
    description: "Content ideas built around real jobs, real questions and real seasonal demand — not generic templates.",
    url: `${site.domain}/guides/social-media-content-ideas-home-services`,
  },
};

const ideas = [
  { title: "Before/after job documentation", desc: "The highest-converting format for any home service business — a clear problem-to-completion sequence with honest context (service type, general area, timeframe)." },
  { title: "Customer question posts", desc: "Answer the questions you actually get on sales calls — pricing ranges, what's included, how long a job takes. Reduces repetitive calls and builds search-relevant content at the same time." },
  { title: "Crew and process content", desc: "Short clips or posts showing how a job actually gets done — builds trust with buyers who are making a real spending decision and can't evaluate craftsmanship from a single photo." },
  { title: "Seasonal readiness posts", desc: "Timed 2–4 weeks ahead of your category's real seasonal peak — HVAC pre-summer checks, roofing pre-storm-season inspections, deep-cleaning pre-holiday pushes." },
  { title: "Review and testimonial features", desc: "Real, permission-based customer feedback shared as its own content — never fabricated, never presented without the customer's consent." },
  { title: "Educational how-to content", desc: "Content that helps a homeowner evaluate a problem before they've decided to call anyone — positions your business as the trustworthy source when they're ready." },
];

const faqs = [
  {
    q: "How often should a home service business post on social media?",
    a: "Consistency matters more than raw frequency — most home service businesses see the best results posting 2–4 times per week once a documentation and review process is in place, rather than posting sporadically during slow weeks and going silent when work picks up.",
  },
  {
    q: "What content works best for home service businesses just starting out?",
    a: "Before/after documentation of real completed jobs, even a small backlog of recent work. It requires no new production skill, directly answers the buyer's core question, and gives you a content foundation before layering in video or educational formats.",
  },
  {
    q: "Should home service businesses invest in video content?",
    a: "Short video (crew clips, quick walkthroughs) builds trust faster than static photos alone, but it's an addition to — not a replacement for — a consistent before/after documentation habit, which remains the highest-leverage content type.",
  },
];

export default function ContentIdeasGuidePage() {
  const url = `${site.domain}/guides/social-media-content-ideas-home-services`;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Social Media Content Ideas for Home Service Businesses",
          description: metadata.description,
          url,
          datePublished: "2026-08-02",
          dateModified: "2026-08-02",
          author: { "@type": "Person", name: "Abdul Ghani", url: `${site.domain}/about`, sameAs: "https://www.linkedin.com/in/sardarabdulghani" },
          publisher: { "@type": "Organization", name: site.name, url: site.domain },
        }}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={speakableSchema(url)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Guides", url: `${site.domain}/guides` },
          { name: "Content Ideas: Home Services", url },
        ])}
      />
      <Breadcrumbs items={[{ name: "Guides", href: "/guides" }, { name: "Home Services Content Ideas", href: "/guides/social-media-content-ideas-home-services" }]} />

      <section className="noise px-5 pb-16 pt-16 md:pt-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Content guide</p>
          <h1 className="font-display text-4xl font-black tracking-tight text-cloud md:text-6xl">
            Social media content ideas for home service businesses
          </h1>
          <p className="mt-4 text-xs text-slate-mid">
            By <Link href="/about" className="font-semibold text-mist hover:text-mint hover:underline">Abdul Ghani</Link> · Published Aug 2, 2026
          </p>
          <div className="speakable mt-6 max-w-2xl rounded-2xl border border-mint/20 bg-navy px-6 py-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-mint mb-2">Quick answer</p>
            <p className="text-base leading-[1.8] text-cloud">
              The highest-performing content for home service businesses is real job documentation — before/after proof, honest customer questions answered, and reviews — not generic templates or stock imagery.
            </p>
          </div>
        </div>
      </section>

      <Section eyebrow="Ideas" title="Six content formats that hold up over time.">
        <div className="grid gap-4 md:grid-cols-2">
          {ideas.map((i) => (
            <div key={i.title} className="rounded-2xl border border-line bg-navy p-6">
              <p className="font-display text-lg font-bold text-cloud">{i.title}</p>
              <p className="mt-2 text-sm leading-7 text-mist">{i.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="navy" eyebrow="FAQ" title="Common questions about content planning.">
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
        <div className="mt-10 flex flex-wrap gap-6">
          <Link href="/industries/home-services-social-media-management" className="text-sm font-semibold text-mint hover:underline">
            Full home services system →
          </Link>
          <Link href="/guides/organic-social-vs-paid-social" className="text-sm font-semibold text-mint hover:underline">
            Organic vs paid social →
          </Link>
        </div>
      </Section>

      <CTABanner
        headline="Turn your job history into a content system."
        subhead="We'll build the documentation process and monthly calendar around the jobs you're already completing."
        primaryLabel="Build a Home-Service Growth Plan"
        primaryHref="/industries/home-services-social-media-management"
      />
    </>
  );
}
