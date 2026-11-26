import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import Providers from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://h5games.space"),
  title: "h5games — Curated AI Prompts for Google Gemini & ChatGPT",
  description: "Explore, inspect, and copy 100+ curated AI art prompts for Google Gemini and ChatGPT.",
  keywords: "h5games, h5games.space, ai prompts, gemini prompts, chatgpt prompts, copy paste prompts, prompt library, ai photo prompts",
  alternates: {
    canonical: "https://h5games.space",
  },
  openGraph: {
    title: "h5games — Curated AI Prompts for Google Gemini & ChatGPT",
    description: "Explore, inspect, and copy 100+ curated AI art prompts for Google Gemini and ChatGPT.",
    url: "https://h5games.space",
    siteName: "h5games",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "h5games — Curated AI Prompts for Google Gemini & ChatGPT",
    description: "Explore, inspect, and copy 100+ curated AI art prompts for Google Gemini and ChatGPT.",
  },
  verification: {
    google: "klhefXtPtglnAChIv7xhLIMBSsdlXOQxO3dlcrckAcI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'h5games',
    url: 'https://h5games.space',
    description: 'Explore, inspect, and copy curated AI art prompts for Google Gemini and ChatGPT.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://h5games.space/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'h5games',
    url: 'https://h5games.space',
    logo: 'https://h5games.space/icon',
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#F1F5F9] text-slate-900 antialiased selection:bg-blue-600/20 selection:text-blue-900">
        <Providers>
          <AppShell>
            {children}
          </AppShell>
        </Providers>
      </body>
    </html>
  );
}
