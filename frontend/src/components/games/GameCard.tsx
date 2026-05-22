"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, Play, CheckCircle } from "lucide-react";
import { Game } from "@/types";

interface GameCardProps {
  game: Game;
  priority?: boolean;
}

export default function GameCard({ game, priority }: GameCardProps) {
  const categoryArt: Record<string, string> = {
    Action: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    Puzzle: "https://images.unsplash.com/photo-1586281314110-66122d48c78f?q=80&w=800&auto=format&fit=crop",
    RPG: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    Racing: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop",
    Strategy: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
    Arcade: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    Multiplayer: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    Simulation: "https://images.unsplash.com/photo-1533236897111-3e94666b2edf?q=80&w=800&auto=format&fit=crop",
    Platformer: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=800&auto=format&fit=crop",
    Other: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
  };

  const fallbackImage = categoryArt[game.category] || categoryArt.Other;

  return (
    <div className="group relative bg-[#1a1a1a] rounded-[14px] overflow-hidden cursor-pointer transition-all duration-200 hover:z-10 hover:scale-[1.03] shadow-md hover:shadow-2xl hover:shadow-[#4ade80]/20">
      <Link href={`/game/${game.slug}`} className="block relative aspect-[16/10] w-full h-full">
        <Image
          src={game.thumbnail && (game.thumbnail.startsWith('http') || game.thumbnail.startsWith('/')) ? game.thumbnail : fallbackImage}
          alt={game.title}
          fill
          unoptimized={true}
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, (max-width: 1536px) 15vw, 10vw"
        />
        
        {/* Verification Badge (Top Left) */}
        {game.verified && (
          <div className="absolute top-2 left-2 bg-[#4ade80] text-black w-5 h-5 rounded flex items-center justify-center font-black shadow-md z-10" title="Verified">
            <CheckCircle size={12} strokeWidth={3} />
          </div>
        )}

        {/* Bottom Left Badge */}
        <div className="absolute bottom-2 left-2 bg-[#4ade80] px-1.5 py-0.5 rounded flex items-center gap-1 text-[11px] font-black text-black z-10 shadow-sm">
          {game.stars > 1000 ? `${(game.stars / 1000).toFixed(1)}k` : game.stars}
        </div>

        {/* Bottom Right Badge (Age) */}
        <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] font-bold text-white/90 uppercase z-10">
          13+
        </div>

        {/* Hover Overlay Title */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3 z-10">
          <h3 className="font-bold text-white text-sm leading-tight truncate">
            {game.title}
          </h3>
          <div className="flex items-center gap-1 mt-1 text-[#4ade80] text-xs font-bold">
            <Play size={10} className="fill-[#4ade80]" /> Play Now
          </div>
        </div>
      </Link>
    </div>
  );
}
