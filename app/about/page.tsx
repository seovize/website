import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description: "Seovize is a search and social growth studio focused on SEO, semantic SEO, social media management, and conversion website systems.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-300">About Seovize</p>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-white md:text-7xl">A lean growth studio for brands that need clarity, creativity, and search authority.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">Seovize combines SEO strategy, semantic content architecture, creative social media production, and modern website design into one focused demand system.</p>
        </div>
      </section>
      <Section eyebrow="Positioning" title="What makes Seovize different">
        <div className="grid gap-5 md:grid-cols-3">
          {["Founder-led strategy", "SEO and social connected", "Production-ready creative systems"].map((item) => <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-white">{item}</div>)}
        </div>
      </Section>
    </>
  );
}
