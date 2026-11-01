'use client';

import React, { useState, useEffect } from 'react';
import { Flame, TrendingUp } from 'lucide-react';
import { promptsApi } from '@/lib/api';
import { Prompt } from '@/types';
import PromptCard from '@/components/prompts/PromptCard';
import PromptModal from '@/components/prompts/PromptModal';

export default function TrendingPage() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeModalPrompt, setActiveModalPrompt] = useState<Prompt | null>(null);

  useEffect(() => {
    async function loadTrending() {
      setLoading(true);
      try {
        const res = await promptsApi.getPrompts({ sort: 'copies', limit: 24 });
        setPrompts(res.prompts);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadTrending();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
            <Flame className="w-4 h-4 fill-blue-600 text-blue-600" />
            <span>Community Leaderboard</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Trending & Most Copied Prompts
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            The highest-rated and most frequently copied AI prompts across Google Gemini and ChatGPT this week.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
          <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
          <span>Updated in real-time</span>
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-slate-200 aspect-[3/4] animate-pulse shadow-xs"
            />
          ))}
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
