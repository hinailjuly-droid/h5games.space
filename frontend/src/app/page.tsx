import { serverApi } from "@/lib/api-server";
import { FlameIcon as Flame, Star, Sparkles } from "lucide-react";
import Link from "next/link";
import GameGrid from "@/components/games/GameGrid";
import AdSlot from "@/components/ads/AdSlot";

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  const [
    featuredGames,
    trendingGames,
    popularGames
  ] = await Promise.all([
    serverApi.getFeaturedGames(),
    serverApi.getTrendingGames(),
    serverApi.getPopularGames()
  ]);

  return (
    <div className="flex flex-col gap-8 pb-20 pt-4 px-4 max-w-[1920px] mx-auto w-full">
      
      {/* Recommended Section (Featured) */}
      <section>
        <div className="flex items-center gap-3 mb-4 pl-2">
          <div className="w-8 h-8 bg-[#4ade80]/10 text-[#4ade80] rounded-xl flex items-center justify-center">
            <Sparkles size={18} />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Recommended</h2>
        </div>
        <GameGrid games={featuredGames?.slice(0, 32) || []} />
      </section>

      {/* AdSlot - Middle */}
      <AdSlot position="home_hero" className="w-full my-2" />

      {/* Trending Section */}
      <section>
        <div className="flex items-center gap-3 mb-4 pl-2">
          <div className="w-8 h-8 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center">
            <Flame size={18} />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Trending Now</h2>
        </div>
        <GameGrid games={trendingGames?.slice(0, 24) || []} />
      </section>

      {/* Popular Section */}
      <section>
        <div className="flex items-center gap-3 mb-4 pl-2">
          <div className="w-8 h-8 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center">
            <Star size={18} />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Most Played</h2>
        </div>
        <GameGrid games={popularGames?.slice(0, 24) || []} />
      </section>

      <div className="mt-8 flex justify-center">
        <Link href="/games">
          <button className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white font-bold py-3 px-8 rounded-xl transition-colors border border-white/5 hover:border-white/20 shadow-lg">
            Show More Games
          </button>
        </Link>
      </div>
      
    </div>
  );
}
