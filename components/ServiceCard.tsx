import Link from "next/link";

type ServiceCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  price: string;
  href: string;
};

export function ServiceCard({ eyebrow, title, description, price, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-[2rem] border border-line bg-navy p-6 transition hover:-translate-y-1 hover:border-mint/30 hover:shadow-[0_8px_32px_rgba(20,184,166,0.08)]"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-mint">{eyebrow}</p>
      <h2 className="mt-4 font-display text-2xl font-black text-cloud">{title}</h2>
      <p className="mt-3 flex-1 text-sm leading-7 text-mist">{description}</p>
      <div className="mt-6 flex items-center justify-between">
        <p className="font-mono text-sm font-bold text-orange">{price}</p>
        <span className="text-xs font-semibold text-slate-mid group-hover:text-mint transition-colors">
          Learn more →
        </span>
      </div>
    </Link>
  );
}
