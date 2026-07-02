"use client";

import { useEffect } from "react";
import { gamesApi } from "@/lib/api";
import { Game } from "@/types";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Star, Eye, Play, Share2, ChevronRight } from "lucide-react";
import Link from "next/link";
import GamePlayer from "@/components/games/GamePlayer";
import Newsletter from "@/components/Newsletter";
import { generateGameGuide } from "@/lib/generateDescription";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
                     <span className="flex items-center gap-1.5"><Play size={16} className="fill-accent text-accent" /> {game.plays.toLocaleString()} PLAYS</span>
                     <span className="flex items-center gap-1.5"><Star size={16} className="fill-yellow-400 text-yellow-400" /> {game.stars.toLocaleString()} STARS</span>
                     <span className="flex items-center gap-1.5"><Eye size={16} /> {game.views.toLocaleString()} VIEWS</span>
                     <Badge variant="accent">{game.category}</Badge>
                     {game.curated && game.editorRating && (
                       <Badge variant="success" className="font-black bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                         ★ {game.editorRating.toFixed(1)}/10 EDITOR RATING
                       </Badge>
                     )}
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
                 {game.curated ? "Editor's Review & Guide" : "Description"}
               </h2>
               
               {game.curated && game.seoContent ? (
                 <div className="max-w-none text-gray-300 font-medium leading-relaxed
                   [&>p]:mb-6
                   [&>h2]:text-2xl [&>h2]:font-black [&>h2]:text-white [&>h2]:italic [&>h2]:uppercase [&>h2]:tracking-tighter [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:flex [&>h2]:items-center [&>h2]:gap-3
                   [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul]:space-y-3 [&_li]:marker:text-accent
                   [&>strong]:text-white"
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

          {/* Right Sidebar - Related Games */}
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
