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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
