"use client";

import { useState } from "react";

type FAQ = { q: string; a: string };

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-2xl border transition-colors ${
            open === i ? "border-mint/40 bg-mint/[0.05]" : "border-line bg-navy"
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="pr-4 text-sm font-semibold text-cloud">{faq.q}</span>
            <span
              className={`shrink-0 text-orange transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2 5l6 6 6-6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-sm leading-7 text-mist">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
