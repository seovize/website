type PricingCard = {
  name: string;
  price: string;
  bestFor?: string;
  featured?: boolean;
  features: string[];
};

export function PricingCards({ items }: { items: PricingCard[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.name}
          className={`rounded-[2rem] border p-7 ${
            item.featured
              ? "border-teal-300/50 bg-teal-300/10 shadow-[0_0_80px_rgba(20,184,166,0.16)]"
              : "border-white/10 bg-white/[0.04]"
          }`}
        >
          {item.featured && <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-teal-200">Recommended</p>}
          <h3 className="text-2xl font-black text-white">{item.name}</h3>
          <p className="mt-2 text-3xl font-black text-teal-200">{item.price}</p>
          {item.bestFor && <p className="mt-4 text-sm leading-6 text-slate-300">{item.bestFor}</p>}
          <ul className="mt-7 space-y-3 text-sm text-slate-300">
            {item.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
