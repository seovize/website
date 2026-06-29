import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { IndustryServicePage } from "@/components/IndustryServicePage";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, speakableSchema, breadcrumbSchema } from "@/lib/schema";
import { industriesData } from "@/lib/industry-data";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return industriesData.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData.find((d) => d.slug === slug);
  if (!industry) return {};
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: `/industries/${slug}` },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `${site.domain}/industries/${slug}`,
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industriesData.find((d) => d.slug === slug);
  if (!industry) notFound();

  const pageUrl = `${site.domain}/industries/${slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Social Media Management for ${industry.plural} in Texas`,
          description: industry.metaDescription,
          url: pageUrl,
          provider: {
            "@type": "Organization",
            "@id": `${site.domain}/#organization`,
            name: "Seovize",
            url: site.domain,
          },
          areaServed: [
            { "@type": "State", name: "Texas" },
            { "@type": "Country", name: "United States" },
          ],
          serviceType: `Social Media Management for ${industry.industry} businesses`,
        }}
      />
      <JsonLd data={faqSchema(industry.faqs)} />
      <JsonLd data={speakableSchema(pageUrl)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Industries", url: `${site.domain}/industries` },
          { name: `${industry.industry} Social Media`, url: pageUrl },
        ])}
      />
      <IndustryServicePage data={industry} />
    </>
  );
}
