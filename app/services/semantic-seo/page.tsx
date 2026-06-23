import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Semantic SEO | Entity Authority & Topic Architecture",
  description: "Topic mapping, entity-led page architecture, FAQ layers, service taxonomies, structured data, and internal-link graphs for long-term search authority. From $2,200/mo.",
  alternates: { canonical: "/services/semantic-seo" },
};

export default function SemanticSeoPage() {
  return <ServicePageTemplate slug="semantic-seo" />;
}
