'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Layers } from 'lucide-react';
import { Prompt } from '@/types';
import PromptCard from '@/components/prompts/PromptCard';
import PromptModal from '@/components/prompts/PromptModal';

interface CategoryPromptGridProps {
  prompts: Prompt[];
  categoryName: string;
}

export default function CategoryPromptGrid({ prompts, categoryName }: CategoryPromptGridProps) {
  const [activeModalPrompt, setActiveModalPrompt] = useState<Prompt | null>(null);
  const [modelFilter, setModelFilter] = useState('All');

  const filteredPrompts = prompts.filter((p) => {
    if (modelFilter === 'All') return true;
    return p.model.toLowerCase().includes(modelFilter.toLowerCase());
  });

  return (
    <div className="space-y-6">
      {/* Sub-bar Filter by AI Model */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700">Filter Model:</span>
          {['All', 'Gemini', 'ChatGPT'].map((m) => (
            <button
              key={m}
              onClick={() => setModelFilter(m)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                modelFilter === m
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {m === 'All' ? 'All Models' : m === 'Gemini' ? 'Google Gemini' : 'ChatGPT'}
            </button>
          ))}
        </div>

        <span className="text-xs text-slate-500 font-mono">
          Showing {filteredPrompts.length} Prompts
        </span>
      </div>

      {/* Grid or Empty */}
      {filteredPrompts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {filteredPrompts.map((p) => (
            <PromptCard
              key={p._id}
              prompt={p}
              onOpenModal={(selected) => setActiveModalPrompt(selected)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 max-w-md mx-auto space-y-4 px-6 shadow-xs">
          <Sparkles className="w-8 h-8 text-blue-600 mx-auto" />
          <h3 className="text-base font-bold text-slate-900">No Prompts Found</h3>
          <p className="text-xs text-slate-500">
            No prompts currently match the selected model in {categoryName}.
          </p>
          <button
            onClick={() => setModelFilter('All')}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700"
          >
            Show All {categoryName} Prompts
          </button>
        </div>
      )}

      {/* Modal Inspector */}
      {activeModalPrompt && (
        <PromptModal
          prompt={activeModalPrompt}
          onClose={() => setActiveModalPrompt(null)}
        />
      )}
    </div>
  );
}
