"use client";

import { useState } from "react";
import Link from "next/link";

const platforms = [
  {
    id: "wordpress",
    label: "WordPress",
    icon: "WP",
    headline: "Technical SEO & Core Web Vitals for WordPress",
    desc: "Plugin audit, schema implementation, page speed optimization, and semantic content architecture for WordPress sites in competitive markets.",
    kpis: ["Core Web Vitals fix", "Schema markup", "Site speed 90+"],
    cta: { label: "WordPress SEO Audit", href: "/contact" },
  },
  {
    id: "shopify",
    label: "Shopify",
    icon: "SH",
    headline: "Shopify SEO + Conversion Architecture",
    desc: "Product schema, collection page optimization, dynamic keyword targeting, and semantic category structure to grow organic revenue without paid ads.",
    kpis: ["Product schema", "ROAS tracking", "Organic growth"],
    cta: { label: "Shopify SEO Strategy", href: "/contact" },
  },
  {
    id: "mappack",
    label: "Map Pack",
    icon: "📍",
    headline: "Local Map Pack Visibility in Texas",
    desc: "Google Business Profile optimization, local citations, service-area pages, and review acquisition systems to dominate local search in Texas cities.",
    kpis: ["GBP optimization", "Texas cities", "Local citations"],
    cta: { label: "Local SEO Audit", href: "/contact" },
  },
  {
    id: "social",
    label: "Social + Ads",
    icon: "↑",
    headline: "Meta Ads + Social Media Management",
    desc: "Facebook Pixel setup, audience segmentation, dynamic creative testing, and organic social content systems built for Texas B2C and service brands.",
    kpis: ["Meta Ads ROAS", "Content calendar", "Instagram + LinkedIn"],
    cta: { label: "Social Media Strategy", href: "/contact" },
  },
];

export function PlatformSelector() {
  const [active, setActive] = useState("wordpress");
  const platform = platforms.find((p) => p.id === active)!;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-line bg-navy">
      <div className="flex gap-1 border-b border-line p-2">
        {platforms.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p.id)}
            className={`flex-1 rounded-xl px-3 py-2.5 text-xs font-bold transition ${
              active === p.id
                ? "bg-mint/[0.12] text-mint shadow-[inset_0_0_0_1px_rgba(20,184,166,0.3)]"
                : "text-slate-mid hover:text-mist"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div className="p-6">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-mint/[0.1] text-sm font-bold text-mint">
          {platform.icon}
        </div>
        <h3 className="font-display text-lg font-black leading-snug text-cloud">{platform.headline}</h3>
        <p className="mt-3 text-sm leading-7 text-mist">{platform.desc}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {platform.kpis.map((kpi) => (
            <span key={kpi} className="rounded-full border border-line bg-obsidian px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-mid">
              {kpi}
            </span>
          ))}
        </div>
        <Link
          href={platform.cta.href}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-xs font-bold text-cloud shadow-[0_0_24px_rgba(249,115,22,0.25)] transition hover:bg-orange/90"
        >
          {platform.cta.label} →
        </Link>
      </div>
    </div>
  );
}
