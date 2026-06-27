import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { IndustryPageTemplate, type IndustryPageData } from "@/components/IndustryPageTemplate";
import { breadcrumbSchema, faqSchema, serviceSchema, speakableSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "SEO for Restaurants | Restaurant SEO & Social Media in Texas | Seovize",
  description:
    "Local SEO and social media management for Texas restaurants — Google Business Profile optimization, menu schema, Instagram Reels content strategy, review generation, and local search visibility for dine-in, delivery, and catering businesses.",
  alternates: { canonical: "/industries/restaurants" },
};

const faqs = [
  { q: "What is the best SEO strategy for Texas restaurants?", a: "Texas restaurant SEO combines Google Business Profile optimization (the primary discovery channel for restaurant searches), Restaurant and FoodEstablishment schema with menu markup, local citation building across Yelp, TripAdvisor, and food directories, and Instagram Reels content showcasing dishes, atmosphere, and chef expertise. GBP with complete menu, photos, and regular posts is the single highest-ROI SEO investment for most Texas restaurants." },
  { q: "How important is Google Business Profile for restaurant SEO?", a: "Critical. 'Restaurants near me' and food-specific searches ('best tacos San Antonio') heavily favor GBP local pack results over organic website rankings. A complete GBP with high-quality food photography, updated menu, accurate hours, and active review responses consistently outperforms a well-optimized website without GBP investment. Both matter — but GBP is the foundation." },
  { q: "What schema markup do restaurants need?", a: "Restaurants benefit from Restaurant or FoodEstablishment schema with cuisine type, price range, and serves cuisine. MenuSection and MenuItem schema make your menu items searchable. LocalBusiness schema with geographic coordinates and opening hours improves local pack visibility. AggregateRating schema (with genuine verified reviews) significantly improves CTR from search results." },
  { q: "How does social media management help Texas restaurants?", a: "Instagram is the primary platform for Texas restaurant discovery, particularly for new openings, special events, and food-forward establishments. Consistent Reels showcasing dishes, kitchen preparation, and chef expertise drive significant new customer discovery. Seovize builds monthly Instagram content systems for Texas restaurants — food photography direction, dish spotlight posts, event content, and community engagement posts." },
  { q: "How do I increase restaurant reviews on Google?", a: "The most effective restaurant review generation system is a simple post-meal touchpoint — a table card, receipt message, or SMS to dining guests with a direct link to your Google review page. Timing is critical: the best review requests come 1–4 hours after the meal, when the experience is fresh. Responding to all reviews (positive and negative) signals to Google that you are an active, engaged business owner." },
];

const data: IndustryPageData = {
  slug: "restaurants",
  industry: "Restaurants",
  eyebrow: "Restaurant SEO & social media",
  heroAnswer:
    "Seovize builds local SEO and social media systems for Texas restaurants — Google Business Profile optimization with menu and photo strategy, FoodEstablishment and Menu schema markup, Instagram Reels content showcasing dishes and atmosphere, review generation workflow, and monthly analytics tracking reservation and delivery-driven traffic from organic search and social media.",
  intro:
    "Texas restaurants compete in one of the most visually-driven and socially-influenced discovery environments in marketing. A diner choosing between three restaurants for dinner Saturday night will check GBP photos, Instagram feeds, and Google review counts — often in that order. Seovize builds the digital infrastructure that wins that discovery moment: a complete GBP profile, a consistent Instagram presence, and the search visibility that surfaces your restaurant when Texas diners search for exactly what you serve.",
  challenges: [
    { title: "Discovery is visual and social-first", desc: "Texas restaurant buyers check Instagram and Google photos before reading a single word of text. Your digital presence must be visually compelling — professional food photography, well-lit interior shots, and Reels content that creates desire — before any other SEO element matters." },
    { title: "Review velocity and recency", desc: "Google's local pack algorithm weighs review count and recency heavily for restaurant searches. A restaurant with 200 reviews and three new reviews this week outranks one with 400 older reviews and no recent activity. Review generation must be systematic, not occasional." },
    { title: "Competition from delivery platforms", desc: "DoorDash, Uber Eats, and Yelp occupy significant search real estate for restaurant queries. SEO strategy must build visibility in positions these platforms cannot compete for — featured snippets for restaurant-type queries, GBP for neighborhood searches, and branded search for return customer loyalty." },
  ],
  services: [
    { title: "Google Business Profile optimization", desc: "Complete GBP — categories, hours, menu upload, photo library, service attributes (dine-in, takeout, delivery), and review response management. Weekly posts to signal active business operation." },
    { title: "Restaurant schema markup", desc: "FoodEstablishment, Restaurant, MenuSection, and MenuItem schema making your menu items directly searchable. AggregateRating schema for rich star display in search results." },
    { title: "Instagram content management", desc: "Monthly Instagram content calendar — dish spotlights, kitchen Reels, chef expertise posts, event content, and community engagement posts designed for Texas food audiences." },
    { title: "Reels production strategy", desc: "Short-form video content showcasing dish preparation, kitchen atmosphere, signature menu items, and behind-the-scenes restaurant culture — the highest-reach Instagram content format in 2026." },
    { title: "Review generation system", desc: "Post-dining review request workflow with timing, messaging templates, and QR code collateral — building Google and Yelp review velocity systematically." },
    { title: "Local citation management", desc: "Consistent restaurant listings across Google, Yelp, TripAdvisor, Zomato, OpenTable, and local Texas food media directories with accurate hours, menu links, and cuisine categories." },
  ],
  processSteps: [
    { name: "GBP and review audit", text: "Review current GBP completeness, photo library quality, menu accuracy, review count and recency, and response rate. Identify the most impactful improvements for local pack ranking." },
    { name: "Schema markup deployment", text: "Implement FoodEstablishment, MenuSection, MenuItem, LocalBusiness, and AggregateRating schema. Validate through Google's Rich Results Test. Configure proper markup for opening hours and geographic coordinates." },
    { name: "Instagram content system launch", text: "Build monthly content calendar with dish spotlights, chef content, Reels scripts, event posts, and community content. Design branded visual templates aligned with your restaurant's aesthetic." },
    { name: "Photo and visual content strategy", text: "Define photography direction for food and atmosphere shots. Establish a consistent visual style for Instagram and GBP that creates desire and represents your brand accurately." },
    { name: "Review generation implementation", text: "Deploy post-dining review request touchpoints — table cards, receipt QR codes, follow-up SMS where applicable. Set up Google review monitoring and response workflow." },
    { name: "Monthly performance tracking", text: "Track GBP impressions, calls, direction requests, website clicks, Instagram reach and follower growth, and review count/rating trends monthly." },
  ],
  stats: [
    { stat: "20+", label: "Years digital marketing", note: "Applied to Texas restaurant and hospitality markets" },
    { stat: "Instagram-first", label: "Social strategy", note: "Reels, dish spotlights, and chef content" },
    { stat: "Full GBP", label: "Optimization", note: "Menu, photos, schema, and review management" },
  ],
  faqs,
  relatedPages: [
    { label: "Social Media Management", href: "/services/social-media-management" },
    { label: "Local SEO", href: "/services/local-seo" },
    { label: "Texas Social Media Manager", href: "/locations/texas/social-media-manager" },
    { label: "San Antonio Social Media", href: "/locations/texas/san-antonio-social-media" },
    { label: "Houston Social Media", href: "/locations/texas/houston-social-media" },
    { label: "Austin Social Media", href: "/locations/texas/austin-social-media" },
    { label: "Texas SEO Hub", href: "/locations/texas" },
    { label: "Industries", href: "/industries" },
  ],
};

export default function RestaurantsPage() {
  return (
    <>
      <JsonLd data={serviceSchema("social-media-management")} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={speakableSchema(`${site.domain}/industries/restaurants`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Industries", url: `${site.domain}/industries` },
          { name: "Restaurants", url: `${site.domain}/industries/restaurants` },
        ])}
      />
      <IndustryPageTemplate data={data} />
    </>
  );
}
