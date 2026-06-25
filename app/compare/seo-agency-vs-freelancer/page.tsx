import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "SEO Agency vs Freelancer: Which Is Right for Your Business? | Seovize",
  description: "Comparing SEO agency vs freelancer for your Texas or U.S. business? Understand the real trade-offs, what each option delivers, and why a founder-led studio beats both for most growth brands.",
  alternates: { canonical: "/compare/seo-agency-vs-freelancer" },
};

const faqs = [
  { q: "Is an SEO agency or freelancer better for small businesses?", a: "For most small businesses, a founder-led studio is the best option. You get senior expertise on every decision (unlike an agency that routes you through account managers) and a full-service system (unlike a freelancer who maxes out at a few hours per week)." },
  { q: "How much cheaper is a freelancer vs an SEO agency?", a: "Freelancers typically charge $50-200/hr or $500-2,000/mo. Agencies range from $1,500-10,000+/mo. A founder-led studio like Seovize sits in between — agency-quality output at retainer prices starting around $800-2,500/mo." },
  { q: "What are the risks of hiring a cheap SEO freelancer?", a: "The main risks are: no redundancy (if they disappear, your SEO stops), limited bandwidth, no integrated strategy (SEO separate from social and content), and often outdated tactics that don't account for 2026 entity-based search." },
];

const rows = [
  { factor: "Senior strategy on every account", agency: "Rarely — account managers filter", freelancer: "Only if hiring senior", seovize: "Always — founder-led" },
  { factor: "Semantic SEO expertise", agency: "Varies widely", freelancer: "Varies by individual", seovize: "Core specialization" },
  { factor: "Content + SEO + Social integrated", agency: "Siloed teams", freelancer: "Usually only 1 service", seovize: "One connected system" },
  { factor: "Texas city targeting", agency: "Generic city page spam", freelancer: "Limited capacity", seovize: "Hub-and-spoke architecture" },
  { factor: "Entity/Person schema", agency: "Template-level only", freelancer: "Rarely implemented", seovize: "Full @graph implementation" },
  { factor: "Pricing transparency", agency: "Discovery call to get a number", freelancer: "Hourly, hard to predict", seovize: "Published packages from $800/mo" },
  { factor: "AEO/GEO (AI engine) optimization", agency: "Not a priority yet", freelancer: "Unlikely", seovize: "Built into every strategy" },
];

export default function ComparePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Compare", href: "/compare/seo-agency-vs-freelancer" }, { name: "Agency vs Freelancer", href: "/compare/seo-agency-vs-freelancer" }]} />
      <section className="noise px-5 pb-16 pt-20 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Comparison</p>
          <h1 className="font-display text-4xl font-black tracking-tight text-cloud md:text-6xl">
            SEO Agency vs Freelancer:<br />Which is right for you?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">
            Both options have real trade-offs. Here is an honest breakdown — and why most U.S. growth brands choose neither, opting instead for a founder-led studio.
          </p>
        </div>
      </section>

      <Section eyebrow="Comparison" title="Side-by-side breakdown.">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line text-left">
                <th className="pb-4 pr-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-mid">Factor</th>
                <th className="pb-4 pr-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-mid">SEO Agency</th>
                <th className="pb-4 pr-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-mid">Freelancer</th>
                <th className="pb-4 text-xs font-bold uppercase tracking-[0.2em] text-mint">Seovize (Founder-led)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {rows.map((row) => (
                <tr key={row.factor}>
                  <td className="py-4 pr-6 font-semibold text-cloud">{row.factor}</td>
                  <td className="py-4 pr-6 text-mist">{row.agency}</td>
                  <td className="py-4 pr-6 text-mist">{row.freelancer}</td>
                  <td className="py-4 font-semibold text-mint">{row.seovize}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section variant="navy" eyebrow="FAQ" title="Common comparison questions.">
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
        <div className="mt-10 text-center">
          <Link href="/pricing" className="text-sm font-semibold text-mint hover:underline">View Seovize pricing →</Link>
        </div>
      </Section>

      <CTABanner headline="Stop choosing between expensive and underpowered." subhead="Seovize delivers senior SEO strategy with a full-service system — at transparent retainer pricing. Book a free Growth Roadmap call." primaryLabel="See What We Deliver" primaryHref="/contact" />
    </>
  );
}
