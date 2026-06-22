import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CreativeShowcase } from "@/components/CreativeShowcase";
import { JsonLd } from "@/components/JsonLd";
import { PricingCards } from "@/components/PricingCards";
import { Section } from "@/components/Section";
import { serviceSchema } from "@/lib/schema";
import { socialPackages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Social Media Management Services",
  description: "Premium social media strategy, post design, captions, reels, scheduling, platform SEO, and analytics for brands that need consistent creative visibility.",
  alternates: { canonical: "/services/social-media-management" },
};

export default function SocialMediaPage() {
  return (
    <>
      <JsonLd data={serviceSchema("social-media-management")} />
      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-300">Social media management</p>
            <h1 className="mt-5 text-5xl font-black tracking-tight text-white md:text-7xl">Creative content with a growth system behind it.</h1>
            <p className="mt-7 text-lg leading-8 text-slate-300">We plan, design, write, schedule, and report social content that strengthens brand trust and supports search-led demand.</p>
            <div className="mt-8"><Button href="/contact">Request content plan</Button></div>
          </div>
          <CreativeShowcase />
        </div>
      </section>
      <Section eyebrow="Social packages" title="Content that looks premium and reports clearly">
        <PricingCards items={socialPackages} />
      </Section>
    </>
  );
}
