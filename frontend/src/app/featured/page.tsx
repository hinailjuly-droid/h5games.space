'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Star } from 'lucide-react';
import { promptsApi } from '@/lib/api';
import { Prompt } from '@/types';
import PromptCard from '@/components/prompts/PromptCard';
import PromptModal from '@/components/prompts/PromptModal';

export default function FeaturedPromptsPage() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeModalPrompt, setActiveModalPrompt] = useState<Prompt | null>(null);

  useEffect(() => {
    async function loadFeatured() {
      setLoading(true);
      try {
        const res = await promptsApi.getFeaturedPrompts();
        setPrompts(res);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadFeatured();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center gap-3 border-b border-white/[0.08] pb-6">
        <div className="w-12 h-12 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-2xl flex items-center justify-center">
          <Star className="w-6 h-6 fill-purple-400/20" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Featured Editor Picks
          </h1>
          <p className="text-xs sm:text-sm text-gray-400">
            Hand-picked generative AI prompts with exceptional visual fidelity and photorealism.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/[0.02] border border-white/[0.06] aspect-[4/5] animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {prompts.map((prompt) => (
            <PromptCard
              key={prompt._id}
              prompt={prompt}
              onOpenModal={setActiveModalPrompt}
            />
          ))}
        </div>
      )}

      <PromptModal
        prompt={activeModalPrompt}
        onClose={() => setActiveModalPrompt(null)}
      />
    </div>
  );
}
