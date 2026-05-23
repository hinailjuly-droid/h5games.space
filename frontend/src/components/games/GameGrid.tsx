"use client";

import { Game } from "@/types";
import GameCard from "./GameCard";

interface GameGridProps {
  games: Game[];
  isLoading?: boolean;
}

export default function GameGrid({ games, isLoading }: GameGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 2xl:grid-cols-10 gap-3">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="bg-[#1a1a1a] aspect-[16/10] rounded-[14px] animate-pulse border border-white/5" />
        ))}
      </div>
    );
  }

  if (games.length === 0) {
    return (
      <div className="text-center py-20 bg-[#1a1a1a] rounded-[14px] border border-white/5">
        <h3 className="text-xl font-bold text-gray-400">No games found</h3>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 2xl:grid-cols-10 gap-3">
      {games.map((game, index) => (
        <GameCard key={game._id} game={game} priority={index < 12} />
      ))}
    </div>
  );
}
