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

const contentSources = [
  { source: "Completed job", desc: "The default trigger — every finished job is a candidate post." },
  { source: "Before-and-after", desc: "The subset of completed jobs with a real visual transformation worth documenting." },
  { source: "Technician explanation", desc: "A tech explaining what they found, why it matters, or how a repair works — in their own words." },
  { source: "Customer question", desc: "A question asked on three different calls this month is a question your next customer has too." },
  { source: "Seasonal warning", desc: "The 2-4 week window before your category's real seasonal spike — not generic calendar dates." },
  { source: "Maintenance tip", desc: "Something a homeowner can check themselves before deciding to call — builds trust before the sale." },
  { source: "Review", desc: "A real, permission-based customer review, shared as its own post rather than buried in a widget." },
  { source: "Service-area update", desc: "A new neighborhood, city, or service-area expansion worth telling existing followers about." },
  { source: "Team or process", desc: "Who does the work and how — licensing, background checks, or how a job actually gets scheduled." },
  { source: "Emergency response", desc: "How the business handles urgent calls — relevant for HVAC, plumbing, roofing storm response." },
];

const monthlyWorkflow = [
  { step: "Asset collection", desc: "Photos, video and notes from the month's jobs come in through one intake channel, not scattered texts." },
  { step: "Content planning", desc: "Raw material is sorted against the content-source map and slotted into next month's calendar." },
  { step: "Approval", desc: "The draft calendar goes to the business owner for review before anything is scheduled." },
  { step: "Publishing", desc: "Approved content publishes on the agreed platform mix and schedule." },
  { step: "Comment handling", desc: "Comments and messages get a response during business hours — not left unanswered for days." },
  { step: "Review follow-up", desc: "Completed jobs from the month get a review request, tracked separately from content publishing." },
  { step: "Next-month adjustment", desc: "What got engagement and what didn't shapes next month's content mix — not a fixed template repeated forever." },
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

      <Section eyebrow="Content-source map" title="Ten places content comes from — not a blank page every month.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {contentSources.map((c, i) => (
            <div key={c.source} className="rounded-2xl border border-line bg-obsidian p-5">
              <p className="font-mono text-xs text-mint">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-1 font-display text-sm font-black text-cloud">{c.source}</p>
              <p className="mt-2 text-xs leading-5 text-mist">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="navy" eyebrow="Jobsite capture checklist" title="What the crew actually needs to shoot.">
        <p className="max-w-2xl text-sm leading-7 text-mist">
          A repeatable, safety-first shot list — not a professional photo shoot, just consistent phone
          photos and short clips a crew can capture without slowing the job down.
        </p>
        <ul className="mt-5 max-w-2xl space-y-3 text-sm leading-7 text-mist">
          <li>— <span className="font-semibold text-cloud">Before shot first, always.</span> Take it before any tools come out — it&apos;s the one shot you can&apos;t get later.</li>
          <li>— <span className="font-semibold text-cloud">Keep people and plates out of frame</span> unless the customer has agreed to be shown — protect their privacy by default.</li>
          <li>— <span className="font-semibold text-cloud">Never compromise safety for a photo.</span> No shots from unsafe positions, no removing safety gear to get a better angle.</li>
          <li>— <span className="font-semibold text-cloud">Note the basics as you go.</span> Service type, general area (not a home address), and what changed — three lines of text is enough.</li>
          <li>— <span className="font-semibold text-cloud">After shot, same angle as before.</span> Matching angles are what make a before/after actually read as one.</li>
          <li>— <span className="font-semibold text-cloud">Submit same day if possible.</span> Details fade fast; a same-day submission needs far less follow-up later.</li>
        </ul>
      </Section>

      <Section eyebrow="Monthly workflow" title="How the month actually runs.">
        <ol className="grid gap-4 md:grid-cols-2">
          {monthlyWorkflow.map((w, i) => (
            <li key={w.step} className="flex gap-4 rounded-2xl border border-line bg-obsidian p-5">
              <span className="font-mono grid h-8 w-8 shrink-0 place-items-center rounded-full border border-mint/40 text-xs font-bold text-mint">
                {i + 1}
              </span>
              <div>
                <p className="font-display text-sm font-black text-cloud">{w.step}</p>
                <p className="mt-1 text-sm leading-6 text-mist">{w.desc}</p>
              </div>
            </li>
          ))}
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
            <p className="mt-2 text-sm leading-7 text-mist">Where a business wants to accelerate lead volume beyond organic reach, <Link href="/services/paid-social-advertising" className="text-mint hover:underline">paid social campaigns</Link> run as a distinct, budgeted engagement with its own reporting — never bundled silently into an organic content package.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Lead pathway" title="How this actually turns into an inquiry.">
        <ol className="max-w-2xl space-y-4 text-sm leading-7 text-mist">
          <li><span className="font-semibold text-cloud">1. Social content builds familiarity.</span> A homeowner sees consistent, real proof of work before they ever need you — so you&apos;re not a cold name when they do.</li>
          <li><span className="font-semibold text-cloud">2. Reviews build trust.</span> By the time they&apos;re comparing options, real reviews answer the &ldquo;can I trust this company&rdquo; question social content alone can&apos;t.</li>
          <li><span className="font-semibold text-cloud">3. Local SEO captures active demand.</span> When they search for the service right now, local SEO work determines whether you show up at all.</li>
          <li><span className="font-semibold text-cloud">4. Paid social adds reach on top,</span> where a business chooses to run it — targeted at people who match your service area and haven&apos;t seen the organic content yet.</li>
          <li><span className="font-semibold text-cloud">5. A form or call closes the loop.</span> Every step above only matters if the conversion path at the end actually works and gets answered.</li>
        </ol>
      </Section>

      <Section variant="navy" eyebrow="Measurement" title="What actually gets reported.">
        <div className="grid gap-4 md:grid-cols-2">
          {measurement.map((m) => (
            <div key={m.metric} className="rounded-2xl border border-line bg-navy p-6">
              <p className="font-mono text-sm font-bold text-mint">{m.metric}</p>
              <p className="mt-2 text-sm leading-7 text-mist">{m.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Questions home service owners ask.">
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
