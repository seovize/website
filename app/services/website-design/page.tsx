import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Website Design | Next.js & Conversion-Ready Sites",
  description: "Fast, modern Next.js websites and landing pages designed around trust, speed, SEO, and strong buyer journeys. Custom quote.",
  alternates: { canonical: "/services/website-design" },
};

export default function WebsiteDesignPage() {
  return <ServicePageTemplate slug="website-design" />;
}
