import type { Metadata, Viewport } from "next";
import {
  Archivo,
  Cormorant_Garamond,
  Inter,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

/** Serif used only by the New Dimension concept mockup (matches that build). */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
});

/** Heavy display face used by the Rockfold concept mockup (matches that build). */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ARYONIX — Independent Digital Studio | Design. Develop. Deploy.",
    template: "%s | ARYONIX",
  },
  description: site.description,
  keywords: [
    "ARYONIX",
    "digital studio",
    "web design",
    "web development",
    "business websites",
    "e-commerce websites",
    "landing pages",
    "UI/UX design",
    "website redesign",
    "India",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: "ARYONIX",
    title: "ARYONIX — Independent Digital Studio",
    description: site.description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARYONIX — Independent Digital Studio",
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#08090b",
  colorScheme: "dark",
};

/** Structured data with only verifiable studio facts. */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.email,
  slogan: site.tagline,
  description: site.description,
  sameAs: [site.instagram, site.github],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9359368382",
    contactType: "customer service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          Set before paint so scroll-reveals only animate when JS is present;
          without JS the site renders fully visible.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js");`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${cormorant.variable} ${archivo.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
