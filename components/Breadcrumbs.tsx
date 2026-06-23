import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

type BreadcrumbItem = { name: string; href: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  const schemaItems = all.map((item) => ({ name: item.name, url: `${site.domain}${item.href}` }));

  return (
    <>
      <JsonLd data={breadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="px-5 pt-6">
        <div className="mx-auto max-w-7xl">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-mid">
            {all.map((item, i) => (
              <li key={item.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">›</span>}
                {i === all.length - 1 ? (
                  <span className="text-mist">{item.name}</span>
                ) : (
                  <Link href={item.href} className="transition hover:text-cloud">{item.name}</Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
