import type { Metadata } from "next";
import { Syne, IBM_Plex_Sans } from "next/font/google";
import { person } from "@/lib/data";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  display: "swap",
  weight: ["400", "500", "600"],
});

const title = "Jignesh Dhamecha — Senior Frontend & Agentic UI Engineer";
const description =
  "Senior frontend / fullstack / AI engineer in Foster City, CA. 14+ years of product UI. Specializes in agentic and generative interfaces.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://engtoolshub.com"),
  applicationName: "Jignesh Dhamecha",
  authors: [{ name: person.name }],
  keywords: [
    "Jignesh Dhamecha",
    "Senior Frontend Engineer",
    "Agentic UI",
    "Generative UI",
    "React",
    "Next.js",
    "Foster City",
  ],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: person.name,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Jignesh Dhamecha — Senior Frontend / Fullstack / AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.role,
  email: `mailto:${person.email}`,
  telephone: person.phoneHref,
  url: person.site,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Foster City",
    addressRegion: "CA",
    addressCountry: "US",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Dharmsinh Desai Institute of Technology",
  },
  knowsAbout: [
    "Frontend engineering",
    "Agentic UI",
    "Generative UI",
    "React",
    "Next.js",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${plex.variable}`}>
      <body className="font-sans bg-canvas text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
