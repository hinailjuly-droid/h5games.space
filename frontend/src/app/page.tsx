import { serverApi } from "@/lib/api-server";
import { FlameIcon as Flame, Star, Sparkles } from "lucide-react";
import Link from "next/link";
import GameGrid from "@/components/games/GameGrid";
import AdSlot from "@/components/ads/AdSlot";

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  const gamesData = await serverApi.getGames({ limit: 48 });

  return (
    <div className="flex flex-col gap-8 pb-20 pt-4 px-4 max-w-[1920px] mx-auto w-full">
      
      {/* All Games Section */}
      <section>
        <GameGrid games={gamesData?.games || []} />
      </section>

      {/* AdSlot - Middle */}
      <AdSlot position="home_hero" className="w-full my-2" />

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
