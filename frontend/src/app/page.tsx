'use client';

import React, { useState, useEffect } from 'react';
import { Search, Sparkles } from 'lucide-react';
import PromptCard from '@/components/prompts/PromptCard';
import PromptModal from '@/components/prompts/PromptModal';
import { promptsApi } from '@/lib/api';
import { Prompt, CategoryItem, ModelItem } from '@/types';
import { CATEGORIES } from '@/lib/mockData';

export default function HomePage() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>(CATEGORIES);
  const [models, setModels] = useState<ModelItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedModel, setSelectedModel] = useState('All Models');
  const [selectedSort, setSelectedSort] = useState('trending');

  // Modal State
  const [activeModalPrompt, setActiveModalPrompt] = useState<Prompt | null>(null);

  // Load Categories & Models once
  useEffect(() => {
    async function loadMeta() {
      const [cats, mods] = await Promise.all([
        promptsApi.getCategories(),
        promptsApi.getModels(),
      ]);
      setCategories(cats);
      setModels(mods);
    }
    loadMeta();
  }, []);

  // Fetch prompts whenever filters change
  useEffect(() => {
    let isCancelled = false;
    async function fetchPrompts() {
      setLoading(true);
      try {
        const res = await promptsApi.getPrompts({
          category: selectedCategory === 'all' ? undefined : selectedCategory,
          model: selectedModel === 'All Models' ? undefined : selectedModel,
          search: searchTerm,
          sort: selectedSort,
          limit: 120
        });
        if (!isCancelled) {
          setPrompts(res.prompts);
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    const timer = setTimeout(() => {
      fetchPrompts();
    }, 120);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [searchTerm, selectedCategory, selectedModel, selectedSort]);

  return (
    <div className="space-y-6">
      {/* Top Header & Filter Bar (White & Dark Blue Theme) */}
      <div className="space-y-4">
        {/* Search & Model Chips Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search prompts (e.g. saree, cyberpunk, 85mm)..."
              className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 shadow-xs transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 hover:text-slate-900 px-1.5 py-0.5 rounded bg-slate-100"
              >
                Clear
              </button>
            )}
          </div>

          {/* Model Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {models.map((m) => {
              const isSelected = selectedModel.toLowerCase() === m.name.toLowerCase();
              return (
                <button
                  key={m.name}
                  onClick={() => setSelectedModel(m.name)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30 border border-blue-600'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-blue-50 hover:text-blue-700 shadow-xs'
                  }`}
                >
                  {m.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Horizontal Category Chips Bar */}
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar flex-1 py-1">
            {categories.map((cat) => {
              const isSelected =
                selectedCategory.toLowerCase() === cat.slug.toLowerCase() ||
                (selectedCategory === 'all' && cat.slug === 'all');

              return (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30 border border-blue-600'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-blue-50 hover:text-blue-700 shadow-xs'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Sort Dropdown */}
          <div className="shrink-0 flex items-center gap-2">
            <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">Sort:</span>
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="bg-white text-slate-700 text-xs font-semibold border border-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-blue-600 shadow-xs"
            >
              <option value="trending">🔥 Trending</option>
              <option value="copies">📋 Most Copied</option>
              <option value="likes">❤️ Most Liked</option>
              <option value="newest">✨ Newest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Prompts Cards Grid */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-slate-200 aspect-[3/4] animate-pulse shadow-xs"
            />
          ))}
        </div>
      ) : prompts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 space-y-4 max-w-md mx-auto shadow-xs">
          <Sparkles className="w-8 h-8 text-blue-600 mx-auto" />
          <h3 className="text-base font-bold text-slate-900">No Prompts Found</h3>
          <p className="text-xs text-slate-500">
            No prompt matching &quot;{searchTerm}&quot;. Try exploring other categories.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedModel('All Models');
            }}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {prompts.map((prompt) => (
            <PromptCard
              key={prompt._id}
              prompt={prompt}
              onOpenModal={setActiveModalPrompt}
            />
          ))}
        </div>
      )}

      {/* Interactive Lightbox / Prompt Inspector Modal */}
      <PromptModal
        prompt={activeModalPrompt}
        onClose={() => setActiveModalPrompt(null)}
      />
    </div>
  );
}
