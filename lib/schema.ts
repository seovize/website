import { site, services, founder } from "@/lib/site";

const ORG_SAME_AS = [
  "https://www.linkedin.com/company/seovize",
  "https://www.instagram.com/seovizeofficial/",
  "https://www.behance.net/seovize",
  "https://twitter.com/seovizeofficial",
];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.domain}/#organization`,
    name: site.name,
    url: site.domain,
    email: site.email,
    slogan: site.tagline,
    description: site.description,
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      addressRegion: "TX",
      addressCountry: "US",
    },
    logo: {
      "@type": "ImageObject",
      url: `${site.domain}/logo.svg`,
    },
    sameAs: ORG_SAME_AS,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.domain,
  };
}

export function serviceSchema(slug: string) {
  const service = services.find((item) => item.slug === slug);
  if (!service) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.domain,
    },
    description: service.description,
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "State", name: "Texas" },
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      description: service.price,
      availability: "https://schema.org/InStock",
    },
  };
}

/**
 * Service schema with a hasOfferCatalog of real, named packages and an explicit
 * geographic areaServed. This is the structured-data format Google rich results
 * and 2026 LLMs (Gemini / ChatGPT / Perplexity) read to understand exactly what a
 * business offers, where, and at what price. Use for Texas service-area pillar pages.
 */
export function offerCatalogServiceSchema(opts: {
  serviceType: string;
  name: string;
  description: string;
  url: string;
  areaServed?: { type: "State" | "City" | "Country"; name: string }[];
  packages: { name: string; price: string; description: string }[];
}) {
  const area = opts.areaServed ?? [
    { type: "State" as const, name: "Texas" },
    { type: "Country" as const, name: "United States" },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.serviceType,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      "@type": "Organization",
      "@id": `${site.domain}/#organization`,
      name: site.name,
      url: site.domain,
    },
    areaServed: area.map((a) => ({ "@type": a.type, name: a.name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: opts.name,
      itemListElement: opts.packages.map((p) => ({
        "@type": "Offer",
        name: p.name,
        description: p.description,
        priceSpecification: {
          "@type": "PriceSpecification",
          price: p.price.replace(/[^0-9.]/g, ""),
          priceCurrency: "USD",
        },
        itemOffered: {
          "@type": "Service",
          name: `${opts.serviceType} — ${p.name}`,
        },
      })),
    },
  };
}

type BreadcrumbItem = { name: string; url: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

type FAQ = { q: string; a: string };

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.domain,
    email: site.email,
    description: site.description,
    areaServed: [
      { "@type": "State", name: "Texas" },
      { "@type": "Country", name: "United States" },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 31.0,
        longitude: -100.0,
      },
      geoRadius: "800000",
    },
    knowsAbout: ["SEO", "Semantic SEO", "Social Media Management", "Content Marketing", "Local SEO"],
    priceRange: "$$",
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.domain}/#person-abdulghani`,
        name: founder.name,
        alternateName: founder.fullName,
        jobTitle: founder.title,
        description: founder.snippet,
        url: `${site.domain}/about`,
        image: {
          "@type": "ImageObject",
          url: `${site.domain}/images/abdul-ghani.jpg`,
        },
        sameAs: [
          "https://www.linkedin.com/in/sardarabdulghani",
        ],
        knowsAbout: founder.knowsAbout,
        worksFor: {
          "@type": "Organization",
          "@id": `${site.domain}/#organization`,
          name: site.name,
          url: site.domain,
        },
      },
      {
        "@type": "Organization",
        "@id": `${site.domain}/#organization`,
        name: site.name,
        url: site.domain,
        email: site.email,
        slogan: site.tagline,
        description: site.description,
        foundingDate: "2024",
        founder: {
          "@type": "Person",
          "@id": `${site.domain}/#person-abdulghani`,
          name: founder.name,
        },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "State", name: "Texas" },
        ],
        sameAs: ORG_SAME_AS,
      },
    ],
  };
}

export function howToSchema(opts: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function speakableSchema(pageUrl: string) {
  return {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    url: pageUrl,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable"],
    },
  };
}

export function cityServiceSchema(opts: {
  city: string;
  serviceType: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: `Seovize — ${opts.serviceType} in ${opts.city}, Texas`,
    description: opts.description,
    url: opts.url,
    email: site.email,
    priceRange: "$$",
    areaServed: [
      {
        "@type": "City",
        name: opts.city,
        containedInPlace: {
          "@type": "State",
          name: "Texas",
          containedInPlace: { "@type": "Country", name: "United States" },
        },
      },
    ],
    founder: {
      "@type": "Person",
      name: "Abdul Ghani",
      jobTitle: "Founder & Senior SEO Specialist",
      sameAs: "https://www.linkedin.com/in/sardarabdulghani",
    },
    knowsAbout: ["SEO", "Local SEO", "Social Media Management", "Semantic SEO", "Content Marketing"],
  };
}

type ArticlePost = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export function articleSchema(post: ArticlePost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: `${site.domain}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.domain,
      logo: {
        "@type": "ImageObject",
        url: `${site.domain}/logo.svg`,
      },
    },
    author: {
      "@type": "Person",
      name: "Abdul Ghani",
      url: `${site.domain}/about`,
      sameAs: "https://www.linkedin.com/in/sardarabdulghani",
    },
  };
}

// ─── Review-acquisition scaffold ────────────────────────────────────────────
// Ready to activate once Trustpilot/Google reviews are collected.
// AggregateRating requires real verified reviews — DO NOT set reviewCount or
// ratingValue until actual reviews exist on a claimable review platform.
//
// To activate: collect ≥5 real reviews on Trustpilot or Google, then uncomment
// and update reviewCount, ratingValue, and populate the reviews array.

/*
export interface ReviewInput {
  author: string;
  date: string;  // ISO 8601 — e.g. "2026-06-01"
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  platform?: string;  // "Trustpilot" | "Google" | "Fiverr"
}

export function aggregateRatingSchema(
  reviews: ReviewInput[],
  overallRating: number,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.domain}/#organization`,
    name: site.name,
    url: site.domain,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: overallRating.toFixed(1),
      reviewCount: reviews.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      datePublished: r.date,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.text,
    })),
  };
}
*/
