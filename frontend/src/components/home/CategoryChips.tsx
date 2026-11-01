'use client';

import React from 'react';
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
} from 'lucide-react';
import { CategoryItem } from '@/types';

interface CategoryChipsProps {
  categories: CategoryItem[];
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
  selectedSort: string;
  onSelectSort: (sort: string) => void;
}

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

export default function CategoryChips({
  categories,
  selectedCategory,
  onSelectCategory,
  selectedSort,
  onSelectSort,
}: CategoryChipsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 border-b border-slate-700/40">
      {/* Category Horizontal Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full sm:w-auto pb-2 sm:pb-0">
        {categories.map((cat) => {
          const isSelected =
            selectedCategory.toLowerCase() === cat.slug.toLowerCase() ||
            (selectedCategory === 'all' && cat.slug === 'all');
          const Icon = (cat.icon && ICON_MAP[cat.icon]) || Sparkles;

          return (
            <button
              key={cat.slug}
              onClick={() => onSelectCategory(cat.slug)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-gradient-to-r from-blue-700 to-sky-600 text-white shadow-md shadow-blue-950/40 border border-sky-400/40'
                  : 'bg-[#0a1426]/70 text-slate-300 border border-slate-700/50 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5 opacity-80" />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Sort Selector Dropdown */}
      <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
        <span className="text-xs text-slate-400 font-medium">Sort by:</span>
        <select
          value={selectedSort}
          onChange={(e) => onSelectSort(e.target.value)}
          className="bg-[#091325] text-slate-200 text-xs font-medium border border-slate-700/60 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-sky-500"
        >
          <option value="trending">🔥 Trending</option>
          <option value="copies">📋 Most Copied</option>
          <option value="likes">❤️ Most Liked</option>
          <option value="newest">✨ Newest First</option>
        </select>
      </div>
    </div>
  );
}
