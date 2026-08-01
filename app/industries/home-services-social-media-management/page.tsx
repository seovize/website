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
  title: "Social Media Management for Home Service Companies",
  description:
    "Social content, reviews, local SEO and paid lead support for contractors, HVAC, cleaning, roofing and other home service companies.",
  alternates: { canonical: "/industries/home-services-social-media-management" },
  openGraph: {
    title: "Social Media Management for Home Service Companies | Seovize",
    description:
      "Turn completed jobs, customer questions and local proof into a consistent trust and lead-generation system.",
    url: `${site.domain}/industries/home-services-social-media-management`,
  },
};

const problems = [
  {
    title: "Feast-or-famine content",
    desc: "Posting happens in slow weeks and stops the moment the crew gets busy — the exact opposite of when content should be captured, since finished jobs are the best proof you have.",
  },
  {
    title: "No system for turning jobs into content",
    desc: "Photos live on a technician's phone instead of a documented before/after library. Without a repeatable capture step, most completed jobs generate zero marketing value.",
  },
  {
    title: "Reviews requested inconsistently",
    desc: "Review asks depend on which technician remembers to mention it — so reputation grows unevenly instead of compounding with every job.",
  },
  {
    title: "Seasonality creates demand cliffs",
    desc: "HVAC, roofing and cleaning all have predictable seasonal peaks and troughs. Without campaign planning tied to that calendar, visibility drops right before demand spikes.",
  },
];

const pillars = [
  {
    title: "Before/after project proof",
    desc: "Documented job transformations with location context — the single content type that most directly answers a homeowner's real question: can this company do the work I need done?",
  },
  {
    title: "Customer questions, answered publicly",
    desc: "Recurring customer questions (pricing ranges, timelines, what's included) turned into content — reducing repetitive sales calls while building search and social visibility around real buyer intent.",
  },
  {
    title: "Reputation and review content",
    desc: "Review requests built into the job-completion workflow, and permission-based testimonials surfaced across social and the website — not review content invented after the fact.",
  },
  {
    title: "Seasonal campaign content",
    desc: "Content and promotion timed to each vertical's real demand calendar — pre-season tune-ups, storm-prep messaging, seasonal cleaning pushes — planned ahead instead of reactive.",
  },
];

const measurement = [
  { metric: "Profile visits → website clicks", detail: "Tracks whether social content is actually driving people toward a conversion path, not just views." },
  { metric: "Message and call inquiries", detail: "The direct lead signal from social — tracked monthly against the content that generated it." },
  { metric: "Review volume and velocity", detail: "Whether the review-request workflow is producing a steady flow of new reviews, not just a one-time spike." },
  { metric: "Local SEO visibility", detail: "Whether social and local SEO efforts are reinforcing each other — shared location content, consistent NAP, GBP-social coordination where eligible." },
];

const faqs = [
  {
    q: "What home service businesses does this apply to?",
    a: "Contractors, HVAC, roofing, cleaning, plumbing, landscaping, restoration and similar service businesses that complete jobs at a customer's property and depend on local trust and referrals to win the next job.",
  },
  {
    q: "How does social media actually generate leads for home service companies?",
    a: "Through three connected mechanisms: before/after content that proves capability, review and reputation content that builds trust, and — where a business chooses to run them — Meta lead ads that turn that visibility into direct inquiries. None of these work well in isolation; the system is what compounds.",
  },
  {
    q: "Do you guarantee a certain number of leads per month?",
    a: "No. Lead volume depends on service area, competition, offer strength and ad budget where paid social is used. We report honestly on what content and campaigns produce rather than promising fixed numbers.",
  },
  {
    q: "How does this connect to local SEO?",
    a: "Local SEO and social media reinforce each other — consistent business information, location-specific content, and review signals support both. See our dedicated local SEO service for the technical and on-site side of that work.",
  },
  {
    q: "Can you run Meta lead ads for home service businesses?",
    a: "Yes, as a distinct paid-media engagement separate from organic social management — with its own budget, campaign setup and lead-quality feedback process, not bundled silently into a content package.",
  },
];

export default function HomeServicesIndustryPage() {
  const url = `${site.domain}/industries/home-services-social-media-management`;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Social Media Management for Home Service Companies",
          description: metadata.description,
          url,
          provider: { "@type": "Organization", "@id": `${site.domain}/#organization`, name: "Seovize", url: site.domain },
          audience: { "@type": "Audience", audienceType: "Home service and contracting businesses" },
          areaServed: [{ "@type": "Country", name: "United States" }],
        }}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={speakableSchema(url)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Industries", url: `${site.domain}/industries` },
          { name: "Home Services", url },
        ])}
      />
      <Breadcrumbs items={[{ name: "Industries", href: "/industries" }, { name: "Home Services", href: "/industries/home-services-social-media-management" }]} />

      <section className="noise px-5 pb-16 pt-16 md:pt-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Industry</p>
          <h1 className="font-display text-4xl font-black tracking-tight text-cloud md:text-6xl">
            Social Media Management for Home Service Companies
          </h1>
          <div className="speakable mt-6 max-w-2xl rounded-2xl border border-mint/20 bg-navy px-6 py-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-mint mb-2">Quick answer</p>
            <p className="text-base leading-[1.8] text-cloud">
              Turn completed jobs, customer questions and local proof into a consistent trust and lead-generation system — for contractors, HVAC, cleaning, roofing and other home service companies.
            </p>
          </div>
        </div>
      </section>

      <Section eyebrow="The problem" title="Why home service marketing usually stalls.">
        <div className="grid gap-4 md:grid-cols-2">
          {problems.map((p) => (
            <div key={p.title} className="rounded-2xl border border-line bg-navy p-6">
              <p className="font-display text-lg font-bold text-cloud">{p.title}</p>
              <p className="mt-2 text-sm leading-7 text-mist">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="navy" eyebrow="Content pillars" title="What the content system is built around.">
        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-line bg-obsidian p-6">
              <p className="font-display text-lg font-bold text-cloud">{p.title}</p>
              <p className="mt-2 text-sm leading-7 text-mist">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Before/after process" title="How a completed job becomes content.">
        <ol className="max-w-2xl space-y-4 text-sm leading-7 text-mist">
          <li><span className="font-semibold text-cloud">1. Capture at the job site.</span> A simple, repeatable shot list (before, in-progress, after) the crew can follow without slowing down the job.</li>
          <li><span className="font-semibold text-cloud">2. Submit through one channel.</span> Photos and short context (service type, general area, timeframe) sent through a single intake point instead of scattered across phones.</li>
          <li><span className="font-semibold text-cloud">3. Production and review.</span> Turned into on-brand before/after posts with accurate service details — no invented specifics, no stock imagery presented as real work.</li>
          <li><span className="font-semibold text-cloud">4. Publish and connect to reviews.</span> Posted alongside a review request to the customer, so proof and reputation build together instead of as separate efforts.</li>
        </ol>
      </Section>

      <Section variant="navy" eyebrow="Reviews & reputation" title="Reviews compound only with a system.">
        <p className="max-w-2xl text-sm leading-7 text-mist">
          Review requests are built into the job-completion step — not left to memory. Where a business has real, permission-based testimonials, they&apos;re surfaced across social content and the website. We do not fabricate review counts, ratings or testimonials, and we do not publish AggregateRating markup without genuine, eligible reviews behind it.
        </p>
      </Section>

      <Section eyebrow="Seasonality" title="Planning around the real demand calendar.">
        <p className="max-w-2xl text-sm leading-7 text-mist">
          HVAC, roofing, cleaning and most home service categories have predictable seasonal peaks. Campaign and content planning is built around each business&apos;s actual seasonal pattern — verified with the owner, not assumed from generic industry calendars — so visibility is already in place before the demand spike, not reacted to after it starts.
        </p>
      </Section>

      <Section variant="navy" eyebrow="Local SEO & paid leads" title="How this connects to the rest of the system.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-obsidian p-6">
            <p className="font-display text-lg font-bold text-cloud">Local SEO relationship</p>
            <p className="mt-2 text-sm leading-7 text-mist">Location-specific content, consistent business information and review signals from the social system support local search relevance directly. See <Link href="/services/local-seo" className="text-mint hover:underline">local SEO for service businesses</Link>.</p>
          </div>
          <div className="rounded-2xl border border-line bg-obsidian p-6">
            <p className="font-display text-lg font-bold text-cloud">Meta lead ads</p>
            <p className="mt-2 text-sm leading-7 text-mist">Where a business wants to accelerate lead volume beyond organic reach, Meta lead ads run as a distinct, budgeted engagement with its own reporting — never bundled silently into an organic content package.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Measurement" title="What actually gets reported.">
        <div className="grid gap-4 md:grid-cols-2">
          {measurement.map((m) => (
            <div key={m.metric} className="rounded-2xl border border-line bg-navy p-6">
              <p className="font-mono text-sm font-bold text-mint">{m.metric}</p>
              <p className="mt-2 text-sm leading-7 text-mist">{m.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="navy" eyebrow="FAQ" title="Questions home service owners ask.">
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
        <div className="mt-10 flex flex-wrap gap-6">
          <Link href="/guides/social-media-content-ideas-home-services" className="text-sm font-semibold text-mint hover:underline">
            Content ideas for home service businesses →
          </Link>
          <Link href="/industries/contractors" className="text-sm font-semibold text-mint hover:underline">
            Contractor-specific detail →
          </Link>
        </div>
      </Section>

      <CTABanner
        headline="Build a home-service growth plan."
        subhead="Tell us your service area, job volume and current review process — we'll map the content and reporting system around it."
        primaryLabel="Build a Home-Service Growth Plan"
        primaryHref="/contact"
      />
    </>
  );
}
