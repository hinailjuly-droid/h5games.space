"use client";

import { motion } from "framer-motion";
import { Search, ChevronRight, Gamepad2, TrendingUp } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function HomeHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-accent/10 text-accent border border-accent/20 mb-6 uppercase tracking-widest py-1.5 px-4 animate-bounce rounded-full text-xs font-bold">
            100% Free HTML5 Games
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-tight italic uppercase">
            H5GAMES<span className="text-accent underline decoration-white/10"> SPACE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            Play 1000+ Premium Web Games Directly In Your Browser. <br className="hidden md:block" />
            <span className="text-white">No Download. No Login. Just Play.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/games" className="w-full sm:w-auto">
              <Button size="lg" className="w-full h-16 px-10 text-xl font-black italic">
                START PLAYING <ChevronRight className="ml-1" />
              </Button>
            </Link>
            <Link href="/search" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full h-16 px-10 text-xl font-bold" icon={Search}>
                FIND GAMES
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-20 right-10 opacity-10 animate-float hidden lg:block text-white">
        <Gamepad2 size={120} />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 animate-float-delayed hidden lg:block text-accent">
        <TrendingUp size={100} />
      </div>
    </section>
  );
}
