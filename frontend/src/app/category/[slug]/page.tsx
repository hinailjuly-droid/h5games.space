'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Filter } from 'lucide-react';
import { promptsApi } from '@/lib/api';
import { Prompt } from '@/types';
import PromptCard from '@/components/prompts/PromptCard';
import PromptModal from '@/components/prompts/PromptModal';
import { CATEGORIES } from '@/lib/mockData';

function formatCategoryName(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace('Traditional Ethnic', 'Traditional & Ethnic')
    .replace('Cyberpunk Sci Fi', 'Cyberpunk & Sci-Fi')
    .replace('3d Digital Art', '3D & Digital Art')
    .replace('Architecture Interior', 'Architecture & Interior')
    .replace('Nature Wildlife', 'Nature & Wildlife')
    .replace('Anime Manga', 'Anime & Manga');
}

export default function CategoryDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || '';
  const categoryName = formatCategoryName(slug);

  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeModalPrompt, setActiveModalPrompt] = useState<Prompt | null>(null);

  useEffect(() => {
    async function loadCategoryPrompts() {
      if (!slug) return;
      setLoading(true);
      try {
        const res = await promptsApi.getPrompts({ category: categoryName, limit: 100 });
        setPrompts(res.prompts);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadCategoryPrompts();
  }, [slug, categoryName]);

  return (
    <div className="space-y-6">
      {/* Back button */}
      <div>
        <Link
          href="/categories"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Categories</span>
        </Link>
      </div>

      {/* Header */}
      <div className="border-b border-slate-200 pb-4 space-y-1">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Genre</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {categoryName} Prompts
        </h1>
        <p className="text-xs text-slate-500">
          Showing tested AI prompts tailored for {categoryName.toLowerCase()} aesthetics across Google Gemini and ChatGPT.
        </p>
      </div>

      {/* Grid or Empty */}
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
        <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 max-w-lg mx-auto space-y-4 px-6 shadow-xs">
          <Sparkles className="w-10 h-10 text-blue-600 mx-auto" />
          <h2 className="text-lg font-bold text-slate-900">No Prompts In This Category Yet</h2>
          <p className="text-xs text-slate-500">
            Explore other categories or check back soon for updates.
          </p>
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700"
          >
            Explore All Categories
          </Link>
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

      {/* Modal */}
      <PromptModal
        prompt={activeModalPrompt}
        onClose={() => setActiveModalPrompt(null)}
      />
    </div>
  );
}
