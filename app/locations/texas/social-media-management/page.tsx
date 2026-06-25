import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Social Media Management for Texas Businesses | Seovize",
  description: "Premium social media management for Texas businesses — post design, reels, SEO captions, scheduling, and analytics. Serving Houston, Dallas, Austin, San Antonio.",
  alternates: { canonical: "/locations/texas/social-media-management" },
};

export default function TexasSocialMediaPage() {
  return (
    <>
      <JsonLd data={serviceSchema("social-media-management")} />
      <Breadcrumbs items={[{ name: "Texas", href: "/locations/texas" }, { name: "Social Media Management", href: "/locations/texas/social-media-management" }]} />
      <ServicePageTemplate slug="social-media-management" />
    </>
  );
}
