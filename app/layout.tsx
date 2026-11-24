import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import { person } from "@/lib/data";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["400", "500"],
});

const title = "Jignesh Dhamecha — Senior Software Engineer, AI Agent Products";
const description =
  "Senior software engineer in Foster City, CA. Builds AI agent products end to end: streaming chat UIs, terminal clients, agent plugins, and the pipelines behind them.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://djig.github.io"),
  applicationName: "Jignesh Dhamecha",
  authors: [{ name: person.name }],
  keywords: [
    "Jignesh Dhamecha",
    "Senior Software Engineer",
    "AI agents",
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
        alt: "Jignesh Dhamecha — Senior Software Engineer, AI Agent Products",
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
  url: person.web,
  sameAs: [person.github, person.site],
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
    "AI agent products",
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
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="font-sans bg-canvas text-ink antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
