import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "SEO Services | Technical SEO for Growth-Focused Brands",
  description: "Technical SEO, service-page optimization, content strategy, schema, internal linking, and monthly reporting for SMB and professional-service brands. From $1,250/mo.",
  alternates: { canonical: "/services/seo" },
};

export default function SeoServicesPage() {
  return <ServicePageTemplate slug="seo" showPricing />;
}
