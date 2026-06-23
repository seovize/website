import Link from "next/link";

type IndustryCardProps = {
  title: string;
  description: string;
  href: string;
};

export function IndustryCard({ title, description, href }: IndustryCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-[2rem] border border-line bg-navy p-6 transition hover:border-mint/30 hover:bg-mint/[0.04]"
    >
      <h2 className="font-display text-xl font-black text-cloud">{title}</h2>
      <p className="mt-3 flex-1 text-sm leading-7 text-mist">{description}</p>
      <span className="mt-5 text-xs font-semibold text-mint group-hover:underline">
        Learn more →
      </span>
    </Link>
  );
}
