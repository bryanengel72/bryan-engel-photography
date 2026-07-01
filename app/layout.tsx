import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import { site } from "@/lib/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} | Fitness & Physique Photographer in ${site.location.city}`,
    template: `%s · ${site.shortName}`,
  },
  description: site.metaDescription,
  keywords: [
    "fitness photographer",
    "physique photography",
    "bodybuilding photographer",
    "bikini competitor photoshoot",
    "competition prep photos",
    "stage photography",
    "figure competitor photographer",
    "men's physique photography",
    `${site.location.city} fitness photographer`,
    `${site.location.city} bodybuilding photographer`,
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/images/portfolio/photo-01.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} fitness and physique photography`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/images/portfolio/photo-01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

function StructuredData() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#business`,
    name: site.name,
    image: `${site.url}/images/portfolio/photo-01.jpg`,
    url: site.url,
    description: site.description,
    priceRange: "$$",
    ...(site.contact.phone ? { telephone: site.contact.phone } : {}),
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressRegion: site.location.region,
      addressCountry: site.location.country,
    },
    areaServed: site.location.serviceAreas.map((a) => ({
      "@type": "City",
      name: a,
    })),
    knowsAbout: [
      "Bodybuilding photography",
      "Bikini competition photography",
      "Figure competition photography",
      "Men's physique photography",
      "Fitness modeling",
    ],
    sameAs: Object.values(site.social).filter(Boolean),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".eyebrow"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;}`}</style>
        </noscript>
        <StructuredData />
        <Nav />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
