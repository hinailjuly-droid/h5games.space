"use client";

import { useEffect, useRef } from "react";
import { gamesApi } from "@/lib/api";
import { Game } from "@/types";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Star, Eye, Play, Share2, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import GamePlayer from "@/components/games/GamePlayer";
import Newsletter from "@/components/Newsletter";
import { generateGameGuide } from "@/lib/generateDescription";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import GameCard from "@/components/games/GameCard";

interface GameDetailClientProps {
  game: Game & { related: Game[] };
}

export default function GameDetailClient({ game }: GameDetailClientProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };
  
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

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

      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col gap-8">
          {/* Main Game Area */}
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            
            {/* Game Player container */}
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
                     <Badge variant="accent">{game.category}</Badge>
                  </div>
               </div>
               <div className="flex gap-2 shrink-0">
                  <Button variant="outline" className="border-white/10 hover:border-accent hover:text-accent gap-2 rounded-xl h-12 px-6" onClick={handleShare}>
                     <Share2 size={18} /> Share Game
                  </Button>
               </div>
            </div>

            {/* Description */}
            <div className="bg-primary-light border border-white/5 rounded-2xl p-6 md:p-10 mt-4 shadow-lg">
               <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                 <span className="w-1 h-6 bg-accent rounded-full" />
                 {game.curated ? "About Game" : "Description"}
               </h2>
               
               {game.curated && game.seoContent ? (
                 <div className="max-w-none text-gray-300 font-medium text-lg md:text-xl leading-[1.8] tracking-wide
                   [&>p]:mb-8
                   [&>h2]:text-3xl [&>h2]:font-black [&>h2]:text-white [&>h2]:italic [&>h2]:uppercase [&>h2]:tracking-tighter [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:flex [&>h2]:items-center [&>h2]:gap-3
                   [&>ul]:list-none [&>ul]:mb-8 [&>ul]:space-y-4 [&>ul]:pl-0
                   [&_li]:flex [&_li]:items-start [&_li]:gap-3 [&_li]:bg-white/[0.02] [&_li]:border [&_li]:border-white/5 [&_li]:rounded-xl [&_li]:p-5 [&_li]:text-base md:[&_li]:text-lg
                   [&>strong]:text-white
                   [&_code]:inline-flex [&_code]:items-center [&_code]:justify-center [&_code]:px-2.5 [&_code]:py-1 [&_code]:text-[13px] [&_code]:font-black [&_code]:font-mono [&_code]:text-white [&_code]:bg-[#2a2b33] [&_code]:border [&_code]:border-white/10 [&_code]:rounded-md [&_code]:shadow-[0_4px_0_0_#111] [&_code]:mx-1 [&_code]:align-middle [&_code]:uppercase
                   [&_img]:w-full [&_img]:rounded-2xl [&_img]:mb-8 [&_img]:shadow-2xl [&_img]:border [&_img]:border-white/10 [&_img]:object-cover [&_img]:aspect-video"
                 >
                   <ReactMarkdown remarkPlugins={[remarkGfm]}>
                     {game.seoContent}
                   </ReactMarkdown>
                 </div>
               ) : (
                 <div 
                   className="game-desc-content text-[15px] leading-[1.85] text-gray-300
                     [&_.game-guide-content_>_p]:mb-4
                     [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:flex [&_h2]:items-center [&_h2]:gap-3
                     [&_strong]:text-white [&_em]:text-gray-400
                     [&_ol]:my-5 [&_ol]:space-y-3 [&_ol]:list-none [&_ol]:pl-0
                     [&_ol_li]:flex [&_ol_li]:items-start [&_ol_li]:gap-3 [&_ol_li]:bg-white/[0.03] [&_ol_li]:border [&_ol_li]:border-white/5 [&_ol_li]:rounded-xl [&_ol_li]:p-4 [&_ol_li]:text-sm
                     [&_ul]:my-5 [&_ul]:space-y-2 [&_ul]:list-none [&_ul]:pl-0
                     [&_ul_li]:flex [&_ul_li]:items-start [&_ul_li]:gap-3 [&_ul_li]:text-sm [&_ul_li]:py-2
                     [&_ul_li]:before:content-['✦'] [&_ul_li]:before:text-accent [&_ul_li]:before:text-xs [&_ul_li]:before:mt-0.5"
                   dangerouslySetInnerHTML={{ __html: game.customDescription || generateGameGuide(game) }} 
                 />
               )}
               
               {game.tags && game.tags.length > 0 && (
                 <div className="mt-8 pt-6 border-t border-white/5">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {game.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/50 transition-colors rounded-lg text-xs text-gray-400 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                 </div>
               )}
            </div>
          </div>
        </div>

        {/* Bottom Section - Related Games */}
        {game.related && game.related.length > 0 && (
          <div className="mt-16 mb-8 relative group">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tight flex items-center gap-3">
                <span className="w-1.5 h-8 bg-accent rounded-full" />
                More <span className="text-accent">{game.category}</span>
              </h3>
              <div className="hidden md:flex gap-2">
                <button onClick={scrollLeft} className="w-10 h-10 rounded-full bg-primary-light text-white hover:bg-accent flex items-center justify-center transition-colors shadow-lg">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={scrollRight} className="w-10 h-10 rounded-full bg-primary-light text-white hover:bg-accent flex items-center justify-center transition-colors shadow-lg">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {game.related.map((rel) => (
                <div key={rel._id} className="min-w-[45vw] md:min-w-[30vw] lg:min-w-[calc(20%-1.2rem)] snap-start shrink-0 h-full">
                  <GameCard game={rel} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
