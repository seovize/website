import { site, services, founder } from "@/lib/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.domain,
    email: site.email,
    slogan: site.tagline,
    description: site.description,
    logo: {
      "@type": "ImageObject",
      url: `${site.domain}/logo.svg`,
    },
    sameAs: [
      "https://www.linkedin.com/company/seovize",
      "https://www.instagram.com/seovizeofficial/",
      "https://www.behance.net/seovize",
      "https://twitter.com/seovizeofficial",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.domain,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.domain}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
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
    areaServed: "United States",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      description: service.price,
      availability: "https://schema.org/InStock",
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
      geoRadius: "1500000",
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
        url: site.domain,
        sameAs: [
          founder.linkedin,
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
        founder: {
          "@type": "Person",
          "@id": `${site.domain}/#person-abdulghani`,
          name: founder.name,
        },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "State", name: "Texas" },
        ],
        sameAs: [
          "https://www.linkedin.com/company/seovize",
          "https://www.instagram.com/seovizeofficial/",
        ],
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
      "@type": "Organization",
      name: site.name,
    },
  };
}
