import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Local SEO Services | Service-Area & GBP Optimization",
  description: "Google Business Profile optimization, local citation building, service-area pages, local schema, and review systems for businesses competing in specific geographic markets. From $950/mo.",
  alternates: { canonical: "/services/local-seo" },
};

export default function LocalSeoPage() {
  return <ServicePageTemplate slug="local-seo" />;
}
