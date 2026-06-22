import type { Metadata } from "next";
import { PricingCards } from "@/components/PricingCards";
import { Section } from "@/components/Section";
import { seoPackages, socialPackages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing Packages",
  description: "Transparent starting pricing for Seovize SEO, semantic SEO, social media management, and bundled growth systems.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <section className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-300">Pricing</p>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-white md:text-7xl">Clear starting points. Custom strategy.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">Use these prices to qualify fit. Final scope depends on competition, content volume, platforms, website condition, and timeline.</p>
        </div>
      </section>
      <Section eyebrow="SEO retainers" title="Search visibility packages"><PricingCards items={seoPackages} /></Section>
      <Section eyebrow="Social media" title="Creative visibility packages"><PricingCards items={socialPackages} /></Section>
    </>
  );
}
