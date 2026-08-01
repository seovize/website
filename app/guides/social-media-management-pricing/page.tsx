import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema, speakableSchema } from "@/lib/schema";
import { site, socialPackages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Social Media Management Pricing: Costs, Packages and Scope",
  description:
    "Understand what social media management costs, what packages include and which factors change monthly pricing — with real published rates and a scope-based budgeting checklist.",
  alternates: { canonical: "/guides/social-media-management-pricing" },
  openGraph: {
    title: "Social Media Management Pricing: Costs, Packages and Scope | Seovize",
    description:
      "A transparent decision guide separating organic management, content production, community coverage and ad management pricing.",
    url: `${site.domain}/guides/social-media-management-pricing`,
  },
};

const faqs = [
  {
    q: "How much does social media management cost per month?",
    a: "Founder-led studios and small agencies typically charge $1,100–$3,600/mo for organic social media management, depending on post volume, reel production and reporting depth. Larger agencies often charge $3,000–$8,000+/mo for comparable scope. Freelancers range from $500–$2,000/mo but usually cap out at a few hours per week.",
  },
  {
    q: "Does social media management pricing include ad spend?",
    a: "No. Management pricing covers strategy, content production, publishing and reporting. Paid social ad spend (what you pay Meta, LinkedIn, etc. directly) is always separate and billed on top of any management fee — any quote that hides this is a red flag.",
  },
  {
    q: "Why do social media management prices vary so much?",
    a: "The biggest cost drivers are post volume, whether reels/video are included, community management coverage, reporting depth, and whether strategy is senior-led or junior-executed. A $500/mo package and a $5,000/mo package are rarely the same scope.",
  },
  {
    q: "Is a cheaper package worth it for a small business just starting social media?",
    a: "A smaller package (12 posts/mo, no video) can be the right starting point if your priority is consistency over reach. It becomes a poor fit once you need reels, community management, or lead reporting — at that point the scope gap, not the price, is the real problem.",
  },
];

const drivers = [
  { factor: "Post volume", detail: "12 posts/mo vs 30 posts/mo changes both production time and price — more posts means more design, caption and review cycles." },
  { factor: "Video / reels production", detail: "Reels and short-form video require editing time most base packages exclude or cap. Reel count is usually the biggest line-item price jump." },
  { factor: "Community management", detail: "Responding to comments and DMs daily is a different (and pricier) commitment than posting alone — many packages exclude it by default." },
  { factor: "Reporting depth", detail: "A basic analytics screenshot costs less to produce than a KPI dashboard tied to lead attribution." },
  { factor: "Strategy seniority", detail: "Junior-executed accounts cost less but produce generic content; senior-led strategy costs more and should show up in measurable positioning, not just design polish." },
];

export default function PricingGuidePage() {
  const url = `${site.domain}/guides/social-media-management-pricing`;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Social Media Management Pricing: Costs, Packages and Scope",
          description: metadata.description,
          url,
          datePublished: "2026-08-02",
          dateModified: "2026-08-02",
          author: { "@type": "Person", name: "Abdul Ghani" },
          publisher: { "@type": "Organization", name: site.name, url: site.domain },
        }}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={speakableSchema(url)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Guides", url: `${site.domain}/guides` },
          { name: "Social Media Management Pricing", url },
        ])}
      />
      <Breadcrumbs items={[{ name: "Guides", href: "/guides" }, { name: "Pricing", href: "/guides/social-media-management-pricing" }]} />

      <section className="noise px-5 pb-16 pt-16 md:pt-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Pricing guide</p>
          <h1 className="font-display text-4xl font-black tracking-tight text-cloud md:text-6xl">
            How much does social media management cost?
          </h1>
          <div className="speakable mt-6 max-w-2xl rounded-2xl border border-mint/20 bg-navy px-6 py-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-mint mb-2">Quick answer</p>
            <p className="text-base leading-[1.8] text-cloud">
              Organic social media management from a founder-led studio typically runs $1,100–$3,600/mo depending on post volume, reel production and reporting depth. Larger agencies charge $3,000–$8,000+/mo for comparable scope. Ad spend is always separate from management fees.
            </p>
          </div>
        </div>
      </section>

      <Section eyebrow="Price drivers" title="What actually changes the price.">
        <div className="grid gap-4 md:grid-cols-2">
          {drivers.map((d) => (
            <div key={d.factor} className="rounded-2xl border border-line bg-navy p-6">
              <p className="font-display text-lg font-bold text-cloud">{d.factor}</p>
              <p className="mt-2 text-sm leading-7 text-mist">{d.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="navy" eyebrow="Published rates" title="Seovize social media management packages.">
        <div className="grid gap-6 md:grid-cols-3">
          {socialPackages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-[2rem] border p-8 ${pkg.featured ? "border-mint/40 bg-mint/[0.05]" : "border-line bg-obsidian"}`}
            >
              <p className="font-display text-xl font-bold text-cloud">{pkg.name}</p>
              <p className="mt-2 font-mono text-2xl font-bold text-mint">{pkg.price}</p>
              <ul className="mt-5 space-y-2">
                {pkg.features.map((f) => (
                  <li key={f} className="text-sm text-mist">{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-mid">
          Full package details and scope on the <Link href="/pricing" className="text-mint hover:underline">pricing page</Link>. Ad spend for paid social is billed separately and is not included in these figures.
        </p>
      </Section>

      <Section eyebrow="Model comparison" title="Freelancer vs agency vs founder-led studio.">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line text-left">
                <th className="pb-4 pr-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-mid">Model</th>
                <th className="pb-4 pr-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-mid">Typical monthly cost</th>
                <th className="pb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-mid">Where it breaks down</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              <tr>
                <td className="py-4 pr-6 font-semibold text-cloud">Freelancer</td>
                <td className="py-4 pr-6 text-mist">$500–$2,000/mo</td>
                <td className="py-4 text-mist">Capacity caps out fast; single point of failure if unavailable.</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 font-semibold text-cloud">Large agency</td>
                <td className="py-4 pr-6 text-mist">$3,000–$8,000+/mo</td>
                <td className="py-4 text-mist">Junior account execution; strategy diluted across many clients.</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 font-semibold text-cloud">Founder-led studio</td>
                <td className="py-4 pr-6 text-mist">$1,100–$3,600/mo</td>
                <td className="py-4 text-mist">Fewer accounts served in parallel by design — capacity, not quality, is the constraint.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section variant="navy" eyebrow="Budgeting checklist" title="Before you sign a contract, confirm:">
        <ul className="max-w-2xl space-y-3 text-sm leading-7 text-mist">
          <li>— Exact post volume and platform mix, not just a “posts” number.</li>
          <li>— Whether reels/video editing is included or billed as an add-on.</li>
          <li>— Whether community management (comments, DMs) is covered.</li>
          <li>— What the monthly report actually contains — vanity metrics or lead-relevant signals.</li>
          <li>— Whether ad spend is separate from the management fee (it always should be).</li>
          <li>— Contract length and what happens if scope needs change mid-term.</li>
        </ul>
      </Section>

      <Section eyebrow="FAQ" title="Pricing questions we hear most.">
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
        <div className="mt-10 flex flex-wrap gap-6">
          <Link href="/services/social-media-management" className="text-sm font-semibold text-mint hover:underline">
            See what social media management includes →
          </Link>
          <Link href="/guides/hire-social-media-manager-vs-agency" className="text-sm font-semibold text-mint hover:underline">
            In-house hire vs agency: full comparison →
          </Link>
        </div>
      </Section>

      <CTABanner
        headline="Get a scope-based estimate, not a guess."
        subhead="Tell us your platform mix, post volume and reporting needs — we'll map it to the right package."
        primaryLabel="Get a Scope-Based Estimate"
        primaryHref="/contact"
      />
    </>
  );
}
