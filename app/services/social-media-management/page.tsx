import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Social Media Management | Premium Content & Strategy",
  description: "Premium content planning, post design, captions, short-form reels, scheduling, platform SEO, analytics, and brand storytelling for U.S. growth brands. From $1,100/mo.",
  alternates: { canonical: "/services/social-media-management" },
};

export default function SocialMediaPage() {
  return <ServicePageTemplate slug="social-media-management" />;
}
