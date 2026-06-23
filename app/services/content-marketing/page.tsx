import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Content Marketing | Topical Authority for Service Businesses",
  description: "Strategic blog content, pillar pages, comparison articles, industry guides, and resource pages that build topical authority and generate qualified organic traffic. From $800/mo.",
  alternates: { canonical: "/services/content-marketing" },
};

export default function ContentMarketingPage() {
  return <ServicePageTemplate slug="content-marketing" />;
}
