'use client';

import React from 'react';
import { Search, Sparkles, SlidersHorizontal, Flame } from 'lucide-react';

interface PromptHeroProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedModel: string;
  onSelectModel: (model: string) => void;
  models: { name: string; count: number }[];
}

export default function PromptHero({
  searchTerm,
  onSearchChange,
  selectedModel,
  onSelectModel,
  models,
}: PromptHeroProps) {
  const quickTags = ['Indian Bride', 'Cyberpunk', 'Makoto Shinkai', 'High Fashion', 'Macro Wildlife', 'Amalfi Coast'];

  return (
    <div className="relative pt-6 pb-12 overflow-hidden">
      {/* Ambient luminous glow balls: Deep sapphire blue & dark white mist */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-gradient-to-tr from-blue-900/30 via-indigo-900/25 to-sky-600/15 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center px-4 space-y-6">
        {/* Curated Pro Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 border border-slate-700/60 backdrop-blur-md shadow-inner text-xs font-medium text-slate-200">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>Curated AI Prompts for Google Gemini & ChatGPT</span>
        </div>

        {/* Headline with dark white & deep sky blue gradient */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15]">
          Find & Copy The Best <br className="hidden sm:inline" />
          <span className="gradient-accent-text">Generative AI Prompts</span>
        </h1>

        {/* Subtitle in dark-white slate-300 */}
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Free, tested prompts with exact aspect ratios, seeds, and photographic styles. Copy directly with one click — zero login or accounts required.
        </p>

        {/* High-End Search Bar in deep navy & dark white */}
        <div className="relative max-w-2xl mx-auto pt-2">
          <div className="relative flex items-center rounded-2xl bg-[#091325]/95 border border-slate-700/60 shadow-2xl shadow-blue-950/40 focus-within:border-sky-500/60 focus-within:ring-2 focus-within:ring-sky-500/20 transition-all p-1.5">
            <Search className="w-5 h-5 text-slate-400 ml-3.5 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search prompts by keyword, subject, lens (e.g. 'saree', 'neon', '85mm')..."
              className="w-full bg-transparent px-3 py-2.5 text-sm sm:text-base text-slate-100 placeholder-slate-400 focus:outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => onSearchChange('')}
                className="text-xs text-slate-400 hover:text-white px-2 py-1 mr-1 rounded-md bg-slate-800"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Trending Tags */}
          <div className="mt-3 flex items-center justify-center flex-wrap gap-1.5 text-xs text-slate-400">
            <span className="flex items-center gap-1 text-[11px] text-slate-400 mr-1 font-medium">
              <Flame className="w-3 h-3 text-sky-400" /> Trending:
            </span>
            {quickTags.map((tag) => (
              <button
                key={tag}
                onClick={() => onSearchChange(tag)}
                className="px-2.5 py-1 rounded-full text-[11px] bg-slate-900/60 hover:bg-blue-900/40 hover:text-sky-300 border border-slate-700/50 text-slate-300 transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* AI Engine Model Filter Bar */}
        <div className="pt-4 flex items-center justify-center flex-wrap gap-2">
          {models.map((m) => {
            const isSelected = selectedModel.toLowerCase() === m.name.toLowerCase();
            return (
              <button
                key={m.name}
                onClick={() => onSelectModel(m.name)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-900/50 border border-sky-400/50'
                    : 'bg-[#0a1426]/70 text-slate-300 border border-slate-700/50 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {m.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
