import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema, serviceSchema, speakableSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Paid Social Advertising for Local Service Businesses",
  description:
    "Meta and paid-social campaign management focused on qualified local leads, creative testing and clear reporting.",
  alternates: { canonical: "/services/paid-social-advertising" },
  openGraph: {
    title: "Paid Social Advertising for Local Service Businesses | Seovize",
    description:
      "Separate paid-media management with a clear campaign, creative and lead-feedback process.",
    url: `${site.domain}/services/paid-social-advertising`,
  },
};

const faqs = [
  {
    q: "Is paid social advertising the same as social media management?",
    a: "No. Social media management is organic content, publishing and community management. Paid social advertising is a distinct engagement — campaign setup, ad spend, creative testing and lead reporting — scoped and billed separately so it's clear what each budget is doing.",
  },
  {
    q: "Do you manage the ad spend, or is it billed separately?",
    a: "Ad spend goes directly to Meta and is always separate from the management fee. We never fold ad spend into a flat retainer in a way that hides what's actually being spent on media versus management.",
  },
  {
    q: "Do you guarantee a specific return on ad spend?",
    a: "No. ROAS depends on offer strength, market competition, creative performance and budget — we won't promise a universal number. We report actual cost-per-lead and campaign performance so you can judge results against your own numbers.",
  },
  {
    q: "Is my business eligible for paid social advertising?",
    a: "Eligibility depends on having a clear offer, a working conversion path (a form, call line or booking flow) and a realistic budget for the market. We assess this on a call before setup — we don't take on accounts we don't believe can convert.",
  },
];

const eligibility = [
  "A clear, single offer the ad can point to — not a general brand-awareness ask.",
  "A working conversion path already in place: a form, a call line, or a booking flow.",
  "A budget that matches your market's competitiveness — we'll tell you honestly if it's too small to test meaningfully.",
  "Realistic timeline expectations — creative testing takes real weeks, not days.",
];

const exclusions = [
  "We do not manage ad spend accounts with no clear offer or conversion path.",
  "We do not promise a fixed ROAS, lead count, or cost-per-lead before campaigns run.",
  "We do not bundle ad spend into the management fee — spend is always visible and separate.",
  "We do not run paid social as a substitute for a broken website or conversion path — we'll flag that first.",
];

export default function PaidSocialAdvertisingPage() {
  const url = `${site.domain}/services/paid-social-advertising`;
  return (
    <>
      <JsonLd data={serviceSchema("paid-social-advertising")} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={speakableSchema(url)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Paid Social Advertising", url },
        ])}
      />
      <Breadcrumbs items={[{ name: "Paid Social Advertising", href: "/services/paid-social-advertising" }]} />

      <section className="noise px-5 pb-16 pt-16 md:pt-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Paid media</p>
          <h1 className="font-display text-4xl font-black tracking-tight text-cloud md:text-6xl">
            Paid Social Advertising Built Around Lead Quality
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-mist">
            Separate paid-media management with a clear campaign, creative and lead-feedback process — scoped and billed apart from organic social and local SEO.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Plan a Paid Social Campaign</Button>
            <Button href="/guides/organic-social-vs-paid-social" variant="secondary">Organic vs paid social</Button>
          </div>
        </div>
      </section>

      <Section eyebrow="Eligibility" title="Who this is a fit for.">
        <ul className="max-w-2xl space-y-3 text-sm leading-7 text-mist">
          {eligibility.map((e) => (
            <li key={e}>— {e}</li>
          ))}
        </ul>
      </Section>

      <Section variant="navy" eyebrow="Campaign setup" title="How a campaign gets built.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-obsidian p-6">
            <p className="font-display text-lg font-bold text-cloud">Pixel and tracking first</p>
            <p className="mt-2 text-sm leading-7 text-mist">Meta Pixel implementation and conversion tracking are set up before spend starts, so results can actually be measured rather than estimated.</p>
          </div>
          <div className="rounded-2xl border border-line bg-obsidian p-6">
            <p className="font-display text-lg font-bold text-cloud">Audience definition</p>
            <p className="mt-2 text-sm leading-7 text-mist">Custom audiences built from your real customer profile and service area — not broad, unfiltered targeting.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Creative testing" title="Testing before scaling.">
        <p className="max-w-2xl text-sm leading-7 text-mist">
          New campaigns launch with multiple creative variations tested against each other before budget is scaled into a winner. This is a deliberate step, not a one-and-done ad — creative that underperforms gets replaced, not left running.
        </p>
      </Section>

      <Section variant="navy" eyebrow="Instant forms vs website forms" title="Choosing the right lead format.">
        <p className="max-w-2xl text-sm leading-7 text-mist">
          Meta&apos;s native Instant Forms reduce friction and typically increase lead volume, but often at lower lead quality than sending traffic to a website form or booking flow. Which format fits depends on your sales process and how you follow up — we recommend the format based on your actual conversion path, not a default.
        </p>
      </Section>

      <Section eyebrow="Lead feedback" title="Closing the loop on lead quality.">
        <p className="max-w-2xl text-sm leading-7 text-mist">
          Ad performance metrics (clicks, cost-per-lead) only tell half the story. Where you can share which leads actually converted to real customers — from a CRM, a spreadsheet, or a simple monthly note — that feedback shapes targeting and creative decisions in the next cycle, instead of optimizing for lead volume alone.
        </p>
      </Section>

      <Section variant="navy" eyebrow="Reporting" title="What you actually see each month.">
        <ul className="max-w-2xl space-y-3 text-sm leading-7 text-mist">
          <li>— Total ad spend, separate from any management fee.</li>
          <li>— Cost per lead and lead volume by campaign.</li>
          <li>— Creative performance — what&apos;s working, what got paused and why.</li>
          <li>— Lead-quality notes where feedback was shared back to us.</li>
        </ul>
      </Section>

      <Section eyebrow="Budget expectations" title="What a realistic budget looks like.">
        <p className="max-w-2xl text-sm leading-7 text-mist">
          Ad spend is set based on your market, competition and lead-volume goal — discussed openly on a call rather than fixed to a generic package number. Management fees are quoted separately from spend, and we&apos;ll tell you directly if a proposed budget is too small to produce a meaningful test.
        </p>
      </Section>

      <Section variant="navy" eyebrow="Exclusions" title="What this service does not include.">
        <ul className="max-w-2xl space-y-3 text-sm leading-7 text-mist">
          {exclusions.map((e) => (
            <li key={e}>— {e}</li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="FAQ" title="Paid social questions answered.">
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
        <div className="mt-10 flex flex-wrap gap-6">
          <Link href="/services/social-media-management" className="text-sm font-semibold text-mint hover:underline">
            Organic social media management →
          </Link>
          <Link href="/services/local-seo" className="text-sm font-semibold text-mint hover:underline">
            Local SEO →
          </Link>
        </div>
      </Section>

      <CTABanner
        headline="Plan a paid social campaign built around lead quality."
        subhead="Tell us your offer, conversion path and target market — we'll tell you honestly whether paid social is the right next step."
        primaryLabel="Plan a Paid Social Campaign"
        primaryHref="/contact"
      />
    </>
  );
}
