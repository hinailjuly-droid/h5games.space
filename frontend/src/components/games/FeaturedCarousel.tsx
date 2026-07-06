"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function FeaturedCarousel({ games }: { games: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!games || games.length === 0) return null;

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length);
  };

  const getGame = (offset: number) => {
    const index = (currentIndex + offset + games.length) % games.length;
    return games[index];
  };

  // If there's only 1 game, just show it normally without carousel
  if (games.length === 1) {
    const game = games[0];
    return (
      <div className="w-full h-[400px] mt-2 mb-8 relative rounded-2xl overflow-hidden shadow-lg">
        <Link href={`/game/${game.slug}`} className="block w-full h-full group">
          <img src={game.thumbnail} alt={game.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 z-10">
            <h2 className="text-4xl font-black text-white mb-3">{game.title}</h2>
            <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">{game.category}</span>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden py-4 mt-2 mb-4 select-none">
       {/* Carousel track */}
       <div className="relative w-full h-full flex justify-center items-center">
         
         {/* Previous Card */}
         <div 
           className="absolute left-0 -translate-x-[15%] w-[45%] md:w-[35%] h-[85%] opacity-50 cursor-pointer transition-all duration-500 rounded-2xl overflow-hidden hover:opacity-70" 
           onClick={prev}
         >
           <img src={getGame(-1).thumbnail} className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-black/50" />
         </div>
         
         {/* Current Card */}
         <div className="relative z-10 w-[75%] md:w-[60%] h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500">
           <AnimatePresence mode="popLayout">
             <motion.div 
               key={currentIndex}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 1.05 }}
               transition={{ duration: 0.4 }}
               className="w-full h-full"
             >
               <Link href={`/game/${getGame(0).slug}`} className="block w-full h-full group">
                 <img src={getGame(0).thumbnail} alt={getGame(0).title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                 <div className="absolute bottom-0 left-0 p-6 md:p-10">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-3 md:mb-4 drop-shadow-xl">{getGame(0).title}</h2>
                    <span className="bg-accent text-white text-xs md:text-sm font-bold px-4 md:px-5 py-2 md:py-2.5 rounded-full uppercase tracking-wider shadow-lg">{getGame(0).category}</span>
                 </div>
               </Link>
             </motion.div>
           </AnimatePresence>
         </div>

         {/* Next Card */}
         <div 
           className="absolute right-0 translate-x-[15%] w-[45%] md:w-[35%] h-[85%] opacity-50 cursor-pointer transition-all duration-500 rounded-2xl overflow-hidden hover:opacity-70" 
           onClick={next}
         >
           <img src={getGame(1).thumbnail} className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-black/50" />
         </div>
       </div>

       {/* Prev Button - positioned on the left edge of the center box */}
       <button 
         onClick={prev} 
         className="absolute left-[12.5%] md:left-[20%] -translate-x-1/2 z-20 bg-black/60 border border-white/10 hover:bg-accent hover:border-accent hover:scale-110 text-white p-3 md:p-4 rounded-full backdrop-blur transition-all shadow-xl"
       >
         <ChevronLeft size={28} />
       </button>

       {/* Next Button - positioned on the right edge of the center box */}
       <button 
         onClick={next} 
         className="absolute right-[12.5%] md:right-[20%] translate-x-1/2 z-20 bg-black/60 border border-white/10 hover:bg-accent hover:border-accent hover:scale-110 text-white p-3 md:p-4 rounded-full backdrop-blur transition-all shadow-xl"
       >
         <ChevronRight size={28} />
       </button>
    </div>
  );
}
