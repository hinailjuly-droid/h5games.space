"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Category } from "@/types";

interface CategoryGridProps {
  categories: Category[];
  getThumbnail: (name: string) => string;
}

export default function CategoryGrid({ categories, getThumbnail }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.filter(c => c.name !== 'Other').map((cat, index) => (
        <motion.div
          key={cat.slug}
          whileHover={{ scale: 1.05, y: -5 }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          <Link
            href={`/category/${cat.name.toLowerCase()}`}
            className="relative flex flex-col items-center justify-center h-48 bg-primary-light border border-white/5 rounded-2xl overflow-hidden group shadow-lg"
          >
            <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/40 transition-colors duration-500" />
            <Image 
              src={getThumbnail(cat.name)} 
              alt={cat.name} 
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
              className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-125 transition-transform duration-700 scale-110 origin-top-left" 
            />
            <div className="relative z-20 flex flex-col items-center p-4">
              <span className="font-black text-white text-xl mb-1 tracking-tight text-shadow-md">{cat.name}</span>
              <span className="text-[10px] text-gray-300 font-black uppercase tracking-[0.2em]">{cat.count} Games</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
