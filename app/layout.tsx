import type { Metadata } from "next";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, personSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap", weight: ["600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-ibm-plex-mono", display: "swap", weight: ["500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Seovize | SEO, Semantic SEO & Social Media Systems",
    template: "%s | Seovize",
  },
  description: site.description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: site.domain,
    siteName: site.name,
    title: "Seovize | Build authority. Capture demand.",
    description: site.description,
    images: [{ url: "/og-seovize.svg", width: 1200, height: 630, alt: "Seovize — SEO, semantic SEO, and social media systems" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seovize | SEO, Semantic SEO & Social Media Systems",
    description: site.description,
    images: ["/og-seovize.svg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
      <body className="antialiased">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <JsonLd data={personSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
