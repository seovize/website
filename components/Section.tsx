import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ eyebrow, title, intro, children }: SectionProps) {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-teal-300">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>}
            {intro && <p className="mt-5 text-lg leading-8 text-slate-300">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
