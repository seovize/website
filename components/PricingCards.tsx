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
              ? "border-mint/40 bg-mint/[0.08] shadow-[0_0_80px_rgba(20,184,166,0.14)]"
              : "border-line bg-navy"
          }`}
        >
          {item.featured && (
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-mint">Most popular</p>
          )}
          <h3 className="font-display text-2xl font-black text-cloud">{item.name}</h3>
          <p className="mt-2 font-mono text-3xl font-bold text-mint">{item.price}</p>
          {item.bestFor && (
            <p className="mt-4 text-sm leading-6 text-mist">{item.bestFor}</p>
          )}
          <ul className="mt-7 space-y-3 text-sm text-mist">
            {item.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
