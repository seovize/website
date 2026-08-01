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
  title: "Hire a Social Media Manager vs an Agency: Which Fits Your Business?",
  description:
    "Compare the real cost, capacity and risk trade-offs between hiring an in-house social media manager and working with an agency or founder-led studio.",
  alternates: { canonical: "/guides/hire-social-media-manager-vs-agency" },
  openGraph: {
    title: "Hire a Social Media Manager vs an Agency | Seovize",
    description:
      "The honest trade-offs between an in-house hire, a freelancer, an agency and a founder-led studio.",
    url: `${site.domain}/guides/hire-social-media-manager-vs-agency`,
  },
};

const faqs = [
  {
    q: "Is it cheaper to hire a social media manager or use an agency?",
    a: "A full-time in-house social media manager typically costs $45,000–$70,000/yr in salary plus benefits, payroll tax and tools — roughly $4,500–$7,500/mo fully loaded. An agency or founder-led studio delivering comparable output usually runs $1,100–$5,000/mo. The in-house hire only becomes cost-competitive at high content volume or when you need someone physically present.",
  },
  {
    q: "What are the risks of hiring one in-house social media manager?",
    a: "A single hire is a single point of failure — no coverage during vacation, illness or turnover, no built-in strategy oversight, and skill gaps (e.g., a great content creator who isn't strong at reporting or paid social) go unaddressed unless you hire multiple specialists.",
  },
  {
    q: "When does an in-house hire make more sense than an agency?",
    a: "When you need daily on-site content capture (retail, restaurants, events), extremely high posting volume across many brands, or someone embedded in daily operations meetings. Otherwise, most businesses get more consistent output per dollar from an agency or founder-led studio.",
  },
  {
    q: "What's the difference between an agency and a founder-led studio for this decision?",
    a: "A large agency spreads strategy across account managers and often executes with junior staff. A founder-led studio keeps senior strategy on every account but serves fewer clients in parallel — closer to an in-house hire's attention, without the single-point-of-failure risk.",
  },
];

const rows = [
  { factor: "Typical monthly cost", inhouse: "$4,500–$7,500 fully loaded", agency: "$3,000–$8,000+", studio: "$1,100–$3,600" },
  { factor: "Coverage during absence", inhouse: "None — single point of failure", agency: "Team-covered", studio: "Team-covered" },
  { factor: "Strategy seniority", inhouse: "Depends entirely on the hire", agency: "Often junior-executed", studio: "Senior on every account" },
  { factor: "Skill breadth (design, copy, reporting)", inhouse: "Rarely all in one person", agency: "Full team available", studio: "Full team available" },
  { factor: "Ramp-up time", inhouse: "Weeks of hiring + onboarding", agency: "Days to start", studio: "Days to start" },
  { factor: "On-site content capture", inhouse: "Best option", agency: "Limited / remote-first", studio: "Limited / remote-first" },
];

export default function HireVsAgencyGuidePage() {
  const url = `${site.domain}/guides/hire-social-media-manager-vs-agency`;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Hire a Social Media Manager vs an Agency: Which Fits Your Business?",
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
          { name: "Hire vs Agency", url },
        ])}
      />
      <Breadcrumbs items={[{ name: "Guides", href: "/guides" }, { name: "Hire vs Agency", href: "/guides/hire-social-media-manager-vs-agency" }]} />

      <section className="noise px-5 pb-16 pt-16 md:pt-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Decision guide</p>
          <h1 className="font-display text-4xl font-black tracking-tight text-cloud md:text-6xl">
            Hire a social media manager, or work with an agency?
          </h1>
          <div className="speakable mt-6 max-w-2xl rounded-2xl border border-mint/20 bg-navy px-6 py-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-mint mb-2">Quick answer</p>
            <p className="text-base leading-[1.8] text-cloud">
              An in-house hire costs $4,500–$7,500/mo fully loaded and is a single point of failure. An agency or founder-led studio delivers comparable output for $1,100–$8,000/mo with built-in coverage and broader skills. In-house makes sense mainly for daily on-site content capture or very high, sustained volume.
            </p>
          </div>
        </div>
      </section>

      <Section eyebrow="Side-by-side" title="Cost, capacity and risk compared.">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line text-left">
                <th className="pb-4 pr-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-mid">Factor</th>
                <th className="pb-4 pr-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-mid">In-house hire</th>
                <th className="pb-4 pr-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-mid">Large agency</th>
                <th className="pb-4 text-xs font-bold uppercase tracking-[0.2em] text-mint">Founder-led studio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {rows.map((row) => (
                <tr key={row.factor}>
                  <td className="py-4 pr-6 font-semibold text-cloud">{row.factor}</td>
                  <td className="py-4 pr-6 text-mist">{row.inhouse}</td>
                  <td className="py-4 pr-6 text-mist">{row.agency}</td>
                  <td className="py-4 font-semibold text-mint">{row.studio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section variant="navy" eyebrow="Decision checklist" title="Ask these before you decide.">
        <ul className="max-w-2xl space-y-3 text-sm leading-7 text-mist">
          <li>— Do you need someone physically capturing content on-site daily, or is remote content production enough?</li>
          <li>— Can your budget absorb a single point of failure (vacation, illness, turnover) with no coverage?</li>
          <li>— Do you need one person wearing every hat — strategy, design, copy, reporting — or is a team a better fit?</li>
          <li>— Is your volume high and sustained enough to justify full-time headcount, or does it fluctuate seasonally?</li>
        </ul>
      </Section>

      <Section eyebrow="FAQ" title="Questions we hear from owners deciding.">
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
        <div className="mt-10 flex flex-wrap gap-6">
          <Link href="/guides/social-media-management-pricing" className="text-sm font-semibold text-mint hover:underline">
            See full pricing breakdown →
          </Link>
          <Link href="/services/social-media-management" className="text-sm font-semibold text-mint hover:underline">
            What a founder-led studio delivers →
          </Link>
        </div>
      </Section>

      <CTABanner
        headline="Get senior strategy without the single-point-of-failure risk."
        subhead="Talk through your content volume and coverage needs — we'll tell you honestly if a studio fits better than a hire."
        primaryLabel="Discuss Your Situation"
        primaryHref="/contact"
      />
    </>
  );
}
