"use client";

import { useEffect } from "react";
import { gamesApi } from "@/lib/api";
import { Game } from "@/types";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Star, Eye, Play, Share2, ChevronRight, Quote } from "lucide-react";
import Link from "next/link";
import GamePlayer from "@/components/games/GamePlayer";
import Newsletter from "@/components/Newsletter";

interface GameDetailClientProps {
  game: Game & { related: Game[] };
}

export default function GameDetailClient({ game }: GameDetailClientProps) {
  useEffect(() => {
    if (game?._id) {
      gamesApi.trackView(game._id).catch(console.error);
    }
  }, [game?._id]);

  const handlePlay = () => {
    if (game?._id) {
      gamesApi.trackPlay(game._id).catch(console.error);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${game.title} on h5games space`,
        text: `Play ${game.title} - Free HTML5 Game`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="pb-20">
      {/* Breadcrumbs */}
      <div className="bg-primary/50 border-b border-white/5 mb-8">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/games" className="hover:text-white transition-colors">Games</Link>
          <ChevronRight size={12} />
          <Link href={`/category/${game.category.toLowerCase()}`} className="hover:text-white transition-colors">{game.category}</Link>
          <ChevronRight size={12} />
          <span className="text-accent">{game.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Game Area */}
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            
            {/* Game Player container - Maximized */}
            <div className="bg-black/40 rounded-2xl overflow-hidden border border-white/5 p-2 md:p-4 shadow-2xl" onClick={handlePlay}>
              <GamePlayer 
                playUrl={game.playUrl} 
                githubUrl={game.githubUrl} 
                title={game.title} 
                standalone={game.standalone}
              />
            </div>
            
            {/* Title & Stats & Share row */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-2">
               <div>
                  <h1 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter flex items-center gap-4">
                     {game.title}
                     {game.verified && <Badge variant="success" className="text-xs">Verified</Badge>}
                  </h1>
                  <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-gray-400 mt-4">
                     <span className="flex items-center gap-1.5"><Play size={16} className="fill-accent text-accent" /> {game.plays.toLocaleString()} PLAYS</span>
                     <span className="flex items-center gap-1.5"><Star size={16} className="fill-yellow-400 text-yellow-400" /> {game.stars.toLocaleString()} STARS</span>
                     <span className="flex items-center gap-1.5"><Eye size={16} /> {game.views.toLocaleString()} VIEWS</span>
                     <Badge variant="accent">{game.category}</Badge>
                  </div>
               </div>
               <div className="flex gap-2 shrink-0">
                  <Button variant="outline" className="border-white/10 hover:border-accent hover:text-accent gap-2 rounded-xl h-12 px-6" onClick={handleShare}>
                     <Share2 size={18} /> Share Game
                  </Button>
               </div>
            </div>

            {/* Description / How to Play section */}
            <div className="bg-primary-light border border-white/5 rounded-2xl p-6 md:p-10 mt-4 shadow-lg">
               {game.customDescription ? (
                 <div 
                   className="prose prose-invert max-w-none prose-lg text-gray-300 prose-headings:text-white prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-a:text-accent prose-strong:text-white" 
                   dangerouslySetInnerHTML={{ __html: game.customDescription }} 
                 />
               ) : (
                 <div className="prose prose-invert max-w-none">
                   <div className="text-lg text-gray-300 leading-relaxed flex gap-4">
                     <Quote className="text-accent shrink-0" size={32} />
                     <p className="italic font-medium">{game.description || "No description available for this game."}</p>
                   </div>
                   <p className="text-sm text-gray-500 mt-6 italic font-medium bg-black/20 p-4 rounded-lg inline-block border border-white/5">Detailed game guide coming soon...</p>
                 </div>
               )}
               
               {game.tags && game.tags.length > 0 && (
                 <div className="mt-10 pt-8 border-t border-white/5">
                    <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">Related Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {game.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/50 transition-colors rounded-lg text-sm text-gray-300 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                 </div>
               )}
            </div>
          </div>

          {/* Right Sidebar - Tight Related Games */}
          <div className="lg:w-80 shrink-0 flex flex-col gap-6">
            <div className="bg-primary-light border border-white/5 rounded-2xl p-6 sticky top-28 shadow-lg">
               <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-6 flex items-center gap-2">
                  More <span className="text-accent">{game.category}</span>
               </h3>
               <div className="flex flex-col gap-3">
                 {game.related.map((rel) => (
                    <Link 
                      key={rel._id} 
                      href={`/game/${rel.slug}`} 
                      className="flex items-center gap-4 p-2.5 bg-primary/50 hover:bg-primary-lighter border border-transparent rounded-xl hover:border-accent/40 group transition-all"
                    >
                      <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center text-xl font-black text-white/10 uppercase shrink-0 overflow-hidden relative shadow-inner">
                         {rel.thumbnail ? (
                           <img src={rel.thumbnail} alt={rel.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                         ) : (
                           rel.title[0]
                         )}
                      </div>
                      <div className="flex-grow min-w-0">
                         <h4 className="text-sm text-white font-bold truncate group-hover:text-accent transition-colors">{rel.title}</h4>
                         <span className="text-[11px] text-yellow-400 font-bold flex items-center gap-1 mt-1.5">
                            <Star size={12} className="fill-yellow-400" /> {rel.stars.toLocaleString()}
                         </span>
                      </div>
                    </Link>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
