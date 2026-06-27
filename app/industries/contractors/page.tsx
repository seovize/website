import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { IndustryPageTemplate, type IndustryPageData } from "@/components/IndustryPageTemplate";
import { breadcrumbSchema, faqSchema, serviceSchema, speakableSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "SEO for Contractors | Home Services & Construction SEO in Texas | Seovize",
  description:
    "Local SEO and service-area page systems for Texas contractors and home service businesses — roofing, HVAC, plumbing, landscaping. Google Business Profile optimization, service-area page architecture, and schema markup without fake addresses.",
  alternates: { canonical: "/industries/contractors" },
};

const faqs = [
  { q: "What is the best SEO strategy for Texas contractors?", a: "Texas contractor SEO combines Google Business Profile optimization (for local pack visibility), service-area landing pages targeting neighborhood and city search terms ('roofing contractor The Woodlands TX'), LocalBusiness schema with areaServed markup for areas without a physical storefront, and consistent citation building across contractor directories. Contractors with strong GBP profiles and service-area pages consistently outrank those relying solely on HomeAdvisor or Angi leads." },
  { q: "Can a contractor rank locally without a physical storefront?", a: "Yes. Texas contractors who operate from a home address or warehouse can set up Google Business Profile in service-area mode (no public address) and rank in the local pack for their target service areas. Combined with service-area landing pages and LocalBusiness schema with areaServed markup, contractors can build strong local search visibility without displaying a personal address." },
  { q: "How competitive is contractor SEO in Texas markets?", a: "Highly competitive in major markets — Houston and Dallas roofing, HVAC, and plumbing terms have significant paid search CPCs ($15–$40 per click) and well-established organic competitors. Less competitive in suburban Texas markets — The Woodlands, Sugar Land, McKinney, Round Rock — where a professional service-area page system can generate meaningful organic leads within 2–4 months." },
  { q: "What is the most important ranking factor for contractors?", a: "Google Business Profile completeness and proximity are the primary local pack ranking factors for contractors. For organic search, service-area landing pages with genuine neighborhood-specific content and LocalBusiness schema with areaServed markup are the most impactful investments. Third-party review volume and recency (especially Google reviews) significantly influence both local pack rankings and buyer conversion rates." },
  { q: "Should contractors invest in SEO or paid ads?", a: "Both serve different functions. Paid ads (Google Local Service Ads, Google Ads) deliver immediate leads at a cost-per-lead typically ranging from $50–$200 for Texas contractors. Organic SEO builds compounding visibility that generates leads at zero incremental cost once established. The most effective contractor marketing strategies use paid ads for immediate cash flow while building organic SEO to reduce long-term customer acquisition cost." },
];

const data: IndustryPageData = {
  slug: "contractors",
  industry: "Contractors",
  eyebrow: "Contractor & home services SEO",
  heroAnswer:
    "Seovize builds local SEO systems for Texas contractors and home service businesses — Google Business Profile optimization, service-area landing pages for each city and neighborhood you serve, LocalBusiness schema with areaServed markup (no fake address required), citation building across contractor directories, and monthly reporting on local search visibility and lead attribution.",
  intro:
    "Texas contractors compete in one of the most search-driven verticals in local marketing. Homeowners search actively when they need a roofer, HVAC contractor, plumber, or landscaper — and they call the first 2–3 results they see. Google Business Profile is the primary channel for most contractor lead generation, but contractors who also invest in service-area landing pages and schema markup capture organic search traffic that GBP alone cannot reach.",
  challenges: [
    { title: "Local pack competition", desc: "The Google local pack shows 3 results for most contractor searches. Visibility in the local pack requires complete GBP profiles, strong review volume, and consistent NAP citations across directories — all of which are ongoing maintenance requirements, not one-time setup tasks." },
    { title: "Service-area coverage", desc: "Most Texas contractors serve multiple cities and neighborhoods but are not physically located in each one. Service-area page systems let you compete in each geographic market you actively serve — without GBP entries for every location." },
    { title: "HomeAdvisor and Angi dependency", desc: "Many Texas contractors depend heavily on HomeAdvisor and Angi for leads — paying per-lead fees that compress margins. Building direct organic visibility through SEO reduces dependency on lead marketplace platforms and lowers long-term customer acquisition cost." },
  ],
  services: [
    { title: "Google Business Profile optimization", desc: "Complete GBP setup or optimization — categories, services, service area configuration, before/after photos, review response strategy, and weekly post publishing for local search visibility." },
    { title: "Service-area landing pages", desc: "Dedicated pages for each city and neighborhood you actively serve — with unique content about the local market, your specific services in that area, and schema markup targeting that geographic query set." },
    { title: "LocalBusiness schema deployment", desc: "ProfessionalService schema with areaServed markup for every service-area page — no fake address required. FAQPage, HowTo, and BreadcrumbList schema across all contractor pages." },
    { title: "Contractor directory citations", desc: "Consistent NAP citation building across HomeAdvisor, Angi, Houzz, BBB, BuildZoom, licensed contractor state databases, local Chamber of Commerce listings, and Google Maps." },
    { title: "Review generation system", desc: "Post-project review request workflow — timing, messaging templates, and platform targeting (Google, Houzz, BBB) that builds review volume systematically rather than sporadically." },
    { title: "Monthly local SEO reporting", desc: "GBP insights, service-area page organic rankings, citation audit, and review count tracking — reported monthly with recommended priority actions." },
  ],
  processSteps: [
    { name: "GBP and citation audit", text: "Review current Google Business Profile completeness, service area configuration, photo library, review count and recency. Audit NAP consistency across existing citations — inconsistencies suppress local pack rankings." },
    { name: "Service-area mapping", text: "Map every city and neighborhood you actively serve to corresponding search demand. Prioritize markets where service-area pages with genuine content can rank within 60–90 days." },
    { name: "GBP optimization", text: "Complete every GBP element: primary and secondary categories, services list with descriptions, service area configuration, photo upload, Q&A seeding, and first weekly post." },
    { name: "Service-area page build", text: "Create landing pages for each target city and neighborhood — unique content per market, schema markup, and internal linking from your services hub pages." },
    { name: "Citation building", text: "Submit to contractor directories and general business citation sources. Correct inconsistent NAP across existing citations. Build local citation presence in each city where you have service-area pages." },
    { name: "Review and performance tracking", text: "Implement review request workflow. Track GBP impressions and calls monthly. Monitor service-area page rankings for target neighborhoods and adjust content based on performance data." },
  ],
  stats: [
    { stat: "20+", label: "Years digital marketing", note: "Applied to Texas contractor and home services markets" },
    { stat: "No fake", label: "Address required", note: "Service-area mode GBP and areaServed schema" },
    { stat: "Multi-city", label: "Coverage system", note: "Service-area pages for every market you serve" },
  ],
  faqs,
  relatedPages: [
    { label: "Local SEO", href: "/services/local-seo" },
    { label: "SEO Services", href: "/services/seo" },
    { label: "Texas SEO Hub", href: "/locations/texas/seo-services" },
    { label: "Houston SEO", href: "/locations/texas/houston-seo" },
    { label: "Dallas SEO", href: "/locations/texas/dallas-seo" },
    { label: "San Antonio SEO", href: "/locations/texas/san-antonio-seo" },
    { label: "Austin SEO", href: "/locations/texas/austin-seo" },
    { label: "Industries", href: "/industries" },
  ],
};

export default function ContractorsPage() {
  return (
    <>
      <JsonLd data={serviceSchema("local-seo")} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={speakableSchema(`${site.domain}/industries/contractors`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Industries", url: `${site.domain}/industries` },
          { name: "Contractors", url: `${site.domain}/industries/contractors` },
        ])}
      />
      <IndustryPageTemplate data={data} />
    </>
  );
}
