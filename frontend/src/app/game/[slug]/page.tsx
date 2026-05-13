import { serverApi } from "@/lib/api-server";
import { Metadata } from "next";
import GameDetailClient from "./GameDetailClient";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const slugs = await serverApi.getAllGameSlugs(200); // Pre-render top 200 games for build stability
    return slugs.map((slug: string) => ({ slug }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const game = await serverApi.getGameBySlug(slug);
    return {
      title: `${game.title} | Play Free on H5GAMES SPACE`,
      description: game.description || `Play ${game.title} - a premium ${game.category} game for free.`,
      openGraph: {
        images: [game.thumbnail || ""],
      },
    };
  } catch {
    return { title: "Game not found" };
  }
}

export default async function GameDetailPage({ params }: Props) {
  const { slug } = await params;
  
  try {
    const game = await serverApi.getGameBySlug(slug);
    
    if (!game) {
      notFound();
    }

    return (
      <>
        <GameDetailClient game={game} />
        
        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoGame",
              "name": game.title,
              "description": game.description,
              "genre": game.category,
              "url": `https://h5games.space/game/${game.slug}`,
              "image": game.thumbnail,
              "author": {
                "@type": "Organization",
                "name": "H5GAMES SPACE"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "bestRating": "5",
                "ratingCount": game.stars || 10
              },
              "offeredBy": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </>
    );
  } catch (error) {
    console.error("Error loading game detail:", error);
    notFound();
  }
}
