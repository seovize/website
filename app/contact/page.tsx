import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a Seovize growth roadmap for SEO, semantic SEO, social media management, or a modern website rebuild.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-300">Contact</p>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-white md:text-7xl">Get your growth roadmap.</h1>
          <p className="mt-7 text-lg leading-8 text-slate-300">Tell us what you need: SEO, semantic SEO, social media management, website rebuild, or a full search + social system.</p>
          <a href={`mailto:${site.email}`} className="mt-8 inline-block text-teal-200 hover:text-teal-100">{site.email}</a>
        </div>
        <form action="/api/contact" method="post" className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-300">Name<input name="name" required className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white" /></label>
            <label className="grid gap-2 text-sm text-slate-300">Email<input name="email" type="email" required className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white" /></label>
          </div>
          <label className="mt-5 grid gap-2 text-sm text-slate-300">Service needed<select name="service" className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white"><option>SEO</option><option>Semantic SEO</option><option>Social Media Management</option><option>Website Rebuild</option><option>Full Growth System</option></select></label>
          <label className="mt-5 grid gap-2 text-sm text-slate-300">Message<textarea name="message" required rows={6} className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white" /></label>
          <button className="mt-6 rounded-full bg-teal-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-teal-200">Send request</button>
          <p className="mt-4 text-xs text-slate-500">Connect CONTACT_WEBHOOK_URL in Vercel to forward submissions to your CRM or form tool.</p>
        </form>
      </div>
    </section>
  );
}
