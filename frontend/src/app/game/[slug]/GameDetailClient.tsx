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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Game Area */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
                    {game.title}
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="accent">{game.category}</Badge>
                  {game.verified && <Badge variant="success">Verified</Badge>}
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1.5 text-yellow-400">
                  <Star size={18} className="fill-yellow-400" />
                  <span className="font-bold">{game.stars.toLocaleString()} Stars</span>
                </div>
                <div className="flex items-center gap-1.5 text-accent-light">
                  <Play size={18} className="fill-accent-light" />
                  <span className="font-bold">{game.plays.toLocaleString()} Plays</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <Eye size={18} />
                  <span className="font-bold">{game.views.toLocaleString()} Views</span>
                </div>
              </div>
            </div>

            {/* Game Player */}
            <div onClick={handlePlay}>
              <GamePlayer 
                playUrl={game.playUrl} 
                githubUrl={game.githubUrl} 
                title={game.title} 
                standalone={game.standalone}
              />
            </div>

            {/* Game Details Section */}
            <div className="bg-primary-light border border-white/5 rounded-[2rem] p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1.5 h-8 bg-accent rounded-full" />
                <h2 className="text-2xl font-black text-white uppercase italic tracking-tight">About Game</h2>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <div className="text-lg text-gray-300 leading-relaxed flex gap-4">
                  <Quote className="text-accent shrink-0" size={32} />
                  <div className="flex flex-col gap-4">
                    <p className="italic font-medium">{game.customDescription || game.description || "No description available for this game."}</p>
                  </div>
                </div>

                {game.tags && game.tags.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-white/5">
                    <h3 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {game.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/50 transition-colors rounded-lg text-sm text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Actions Card */}
            <div className="bg-primary-light border border-white/5 rounded-3xl p-6 flex flex-col gap-4">
              <h3 className="text-sm font-black text-gray-500 uppercase tracking-widest text-center mb-2">Share With Friends</h3>
              <div className="grid grid-cols-4 gap-2">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="h-12 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=Play%20${encodeURIComponent(game.title)}`} target="_blank" rel="noopener noreferrer" className="h-12 bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2] rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href={`https://api.whatsapp.com/send?text=Play%20${encodeURIComponent(game.title)}%20here:%20${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="h-12 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2C6.486 2 2 6.486 2 12.012c0 1.748.45 3.447 1.305 4.93L2 22l5.244-1.275a10 10 0 004.768 1.198h.004c5.524 0 10-4.486 10-10.011 0-5.526-4.476-10.012-10-10.012zm0 18.024c-1.488 0-2.95-.39-4.238-1.127l-.304-.176-3.149.765.778-3.08-.204-.32a8.03 8.03 0 01-1.246-4.305C3.65 7.6 7.55 3.7 12.016 3.7c4.466 0 8.366 3.9 8.366 8.366 0 4.467-3.9 8.368-8.368 8.368z"/></svg>
                </a>
                <Button variant="outline" className="h-12 rounded-xl text-gray-400 border-white/5 hover:text-white" onClick={handleShare}>
                  <Share2 size={18} />
                </Button>
              </div>
            </div>
            
            <Newsletter />

            {/* Related Games */}
            <div>
              <div className="flex items-center justify-between mb-6 px-2">
                <h3 className="text-xl font-black text-white uppercase italic tracking-tight">More <span className="text-accent">{game.category}</span></h3>
              </div>
              <div className="flex flex-col gap-4">
                {game.related.map((rel) => (
                  <Link 
                    key={rel._id} 
                    href={`/game/${rel.slug}`}
                    className="flex items-center gap-4 p-3 bg-primary-light border border-white/5 rounded-2xl hover:border-accent/40 group transition-all"
                  >
                    <div className="w-20 h-20 bg-primary-lighter rounded-xl flex items-center justify-center text-2xl font-black text-white/10 uppercase shrink-0 overflow-hidden relative">
                      {rel.thumbnail ? (
                        <img src={rel.thumbnail} alt={rel.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      ) : (
                        rel.title[0]
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className="text-white font-bold truncate group-hover:text-accent transition-colors">{rel.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                         <span className="text-[10px] bg-white/5 text-gray-500 px-1.5 py-0.5 rounded font-bold uppercase">{rel.license}</span>
                         <span className="text-xs text-yellow-400 font-bold flex items-center gap-1">
                            <Star size={10} className="fill-yellow-400" />
                            {rel.stars.toLocaleString()}
                         </span>
                      </div>
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
