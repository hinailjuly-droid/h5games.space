'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Clapperboard,
  Crown,
  Shirt,
  Zap,
  Heart,
  Palette,
  Box,
  Building2,
  Trees,
  ArrowRight
} from 'lucide-react';
import { CATEGORIES } from '@/lib/mockData';

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles,
  Clapperboard,
  Crown,
  Shirt,
  Zap,
  Heart,
  Palette,
  Box,
  Building2,
  Trees,
};

export default function CategoriesPage() {
  const displayCategories = CATEGORIES.filter((c) => c.slug !== 'all');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2 border-b border-slate-200 pb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated AI Art Categories</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Browse by Category & Aesthetic
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Explore hundreds of tested Google Gemini and ChatGPT prompts organized by artistic genre.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayCategories.map((cat) => {
          const Icon = (cat.icon && ICON_MAP[cat.icon]) || Sparkles;
          return (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">
                    {cat.count}+ Tested Prompts
                  </span>
                </div>
              </div>

              <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
