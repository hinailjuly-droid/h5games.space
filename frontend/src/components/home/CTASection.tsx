"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Gamepad2, Search } from "lucide-react";

export default function CTASection() {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="bg-gradient-to-r from-accent to-blue-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic uppercase">Ready for the Next level?</h2>
          <p className="text-accent-light text-xl mb-10 max-w-2xl mx-auto font-bold uppercase tracking-tight">
            Access thousands of free games with no restrictions.
          </p>
          <Link href="/games">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white hover:bg-white hover:opacity-90 border-none h-16 px-12 text-xl font-black italic relative z-20"
              style={{ color: 'black' }}
            >
              BROWSE ALL GAMES
            </Button>
          </Link>
        </motion.div>
        
        {/* Decorative icons */}
        <div className="absolute top-10 left-10 text-white/10 rotate-12 group-hover:rotate-45 transition-transform duration-1000">
          <Gamepad2 size={120} />
        </div>
        <div className="absolute bottom-10 right-10 text-white/10 -rotate-12 group-hover:-rotate-45 transition-transform duration-1000">
          <Search size={100} />
        </div>
      </div>
    </section>
  );
}
