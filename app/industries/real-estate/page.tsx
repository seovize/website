import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { IndustryPageTemplate, type IndustryPageData } from "@/components/IndustryPageTemplate";
import { breadcrumbSchema, faqSchema, serviceSchema, speakableSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "SEO for Real Estate | Real Estate SEO & Social Media in Texas | Seovize",
  description:
    "SEO and social media management for Texas real estate agents and brokers — neighborhood pages, IDX optimization, social content systems, and local SEO for fast-moving geographic real estate markets.",
  alternates: { canonical: "/industries/real-estate" },
};

const faqs = [
  { q: "What is the best SEO strategy for Texas real estate agents?", a: "Texas real estate SEO requires neighborhood-level landing pages targeting hyperlocal search terms ('homes for sale in Katy TX', 'Austin TX real estate agent'), agent entity establishment with Person schema, IDX content strategy that drives organic traffic to property search pages, and social media management that showcases listings and local market expertise. Each Texas market — Dallas suburbs, Houston's energy corridor, Austin tech neighborhoods — has distinct buyer search behavior." },
  { q: "Do I need a separate page for every Texas neighborhood?", a: "For competitive Texas markets, yes — hyperlocal pages outperform broad city pages significantly. A page targeting 'real estate agent in The Woodlands TX' will rank faster and convert better than a page targeting 'Houston real estate agent'. Seovize builds hyperlocal page systems for your active geographic markets with unique content for each neighborhood, not duplicated templates." },
  { q: "Can social media generate real estate leads in Texas?", a: "Yes, particularly for luxury listings and first-time buyer audiences. Instagram and Facebook perform well for real estate in Texas — listing showcases, neighborhood tours, market updates, and virtual walkthroughs. LinkedIn is effective for commercial real estate and investor-focused agents in Dallas and Houston. Social media builds the top-of-funnel awareness that drives organic search branded queries over time." },
  { q: "How important is personal branding SEO for real estate agents?", a: "Critical. Texas real estate buyers frequently search for their agent by name after a referral or social media encounter. Building strong personal brand SEO — a dedicated About page, Person schema, LinkedIn authority, and consistent content presence — ensures you capture branded search queries that convert at high rates." },
  { q: "How does real estate SEO differ from general business SEO?", a: "Real estate SEO has unique elements: IDX feed integration (balancing duplicate content risk), hyperlocal neighborhood targeting, agent personal brand SEO, listing photography and alt text optimization, and constant content freshness requirements as market conditions change. Seovize addresses each of these specifically in our real estate SEO system." },
];

const data: IndustryPageData = {
  slug: "real-estate",
  industry: "Real Estate",
  eyebrow: "Real estate SEO & social media",
  heroAnswer:
    "Seovize builds SEO and social media systems for Texas real estate agents and brokers — hyperlocal neighborhood pages, agent entity establishment, IDX content strategy, social media management featuring listings and market expertise, and local SEO that surfaces agents in city and neighborhood-level search results.",
  intro:
    "Texas real estate is a hypercompetitive, geographically complex market. Buyers search at the neighborhood level — 'homes for sale in Southlake TX', 'real estate agent Montrose Houston' — not the city level. Agents who build hyperlocal page systems, establish personal brand SEO, and maintain consistent social media presence consistently outperform those relying on Zillow referrals and broker website listings.",
  challenges: [
    { title: "Hyperlocal search intent", desc: "Texas buyers search at neighborhood and community level — not just city level. Generic city pages compete against Zillow and Realtor.com with domain authority you cannot match. Hyperlocal pages compete at a level where a strong content strategy can actually win." },
    { title: "IDX content complexity", desc: "IDX property feeds create duplicate content challenges that, if not managed correctly, dilute domain authority. Seovize builds IDX content strategies that drive organic traffic to property searches without triggering duplicate content penalties." },
    { title: "Agent personal brand", desc: "Texas real estate buyers research agents extensively before reaching out. Agent-specific SEO — a dedicated About page, Person schema, LinkedIn authority, and consistent blog content — captures buyers at the research stage." },
  ],
  services: [
    { title: "Hyperlocal neighborhood pages", desc: "Dedicated landing pages for each neighborhood, subdivision, and community you actively serve — with unique market content, buyer FAQ sections, and real estate–specific schema markup." },
    { title: "Agent entity establishment", desc: "Person schema, LinkedIn profile optimization, and consistent NAP citation building that makes you findable as a named expert, not just a generic agent listing." },
    { title: "IDX and listing content strategy", desc: "SEO architecture for IDX property feeds that drives organic search traffic to listing pages while managing duplicate content risk through canonical strategy and unique neighborhood context content." },
    { title: "Social media management", desc: "Monthly content calendar featuring listings, neighborhood spotlights, market updates, and buyer/seller educational content on Instagram and Facebook — the platforms driving Texas real estate discovery." },
    { title: "Market update and blog content", desc: "Regular market reports and buyer/seller guides that establish you as the local market authority — driving repeat visits from buyers in extended search cycles." },
    { title: "Google Business Profile management", desc: "Complete GBP optimization for agents with physical office addresses — reviews strategy, service area configuration, weekly posts, and Q&A management." },
  ],
  processSteps: [
    { name: "Market and neighborhood audit", text: "Map your active neighborhoods to search demand and competitive landscape. Identify the specific hyperlocal terms where a neighborhood page with genuine content can outrank Zillow and Realtor.com." },
    { name: "Agent entity and brand setup", text: "Build your Person schema, optimize your LinkedIn profile for search, and establish consistent personal brand signals across citations and directories." },
    { name: "Hyperlocal page build", text: "Create neighborhood landing pages with unique content — market data, school information, lifestyle context, and buyer FAQ sections — that provide genuine value beyond what national portals deliver." },
    { name: "Social media system launch", text: "Build content calendar with listing showcases, neighborhood spotlights, market update formats, and buyer/seller education posts. Design branded templates for Instagram and Facebook." },
    { name: "IDX content optimization", text: "Implement canonical strategy for IDX pages. Add unique neighborhood context content around property search results. Monitor for thin content flags in GSC." },
    { name: "Monthly performance review", text: "Track neighborhood page rankings, organic traffic, GBP views, and social media lead attribution. Adjust content priorities based on which neighborhoods are generating inquiry traffic." },
  ],
  stats: [
    { stat: "20+", label: "Years digital marketing", note: "Applied to Texas real estate market strategy" },
    { stat: "Hyperlocal", label: "Page strategy", note: "Neighborhood-level, not generic city pages" },
    { stat: "Multi-platform", label: "Social management", note: "Instagram, Facebook, LinkedIn for agents" },
  ],
  faqs,
  relatedPages: [
    { label: "SEO Services", href: "/services/seo" },
    { label: "Local SEO", href: "/services/local-seo" },
    { label: "Social Media Management", href: "/services/social-media-management" },
    { label: "Texas SEO Hub", href: "/locations/texas/seo-services" },
    { label: "Houston SEO", href: "/locations/texas/houston-seo" },
    { label: "Dallas SEO", href: "/locations/texas/dallas-seo" },
    { label: "Austin SEO", href: "/locations/texas/austin-seo" },
    { label: "Industries", href: "/industries" },
  ],
};

export default function RealEstatePage() {
  return (
    <>
      <JsonLd data={serviceSchema("seo")} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={speakableSchema(`${site.domain}/industries/real-estate`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Industries", url: `${site.domain}/industries` },
          { name: "Real Estate", url: `${site.domain}/industries/real-estate` },
        ])}
      />
      <IndustryPageTemplate data={data} />
    </>
  );
}
