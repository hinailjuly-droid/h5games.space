'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Copy, Check, Heart } from 'lucide-react';
import { Prompt } from '@/types';
import { useSavedPrompts } from '@/lib/useSavedPrompts';
import { promptsApi } from '@/lib/api';

interface PromptCardProps {
  prompt: Prompt;
  onOpenModal?: (prompt: Prompt) => void;
}

export default function PromptCard({ prompt, onOpenModal }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [likeCount, setLikeCount] = useState(prompt.likes || 0);
  const [copyCount, setCopyCount] = useState(prompt.copies || 0);
  const { isLiked, toggleLike } = useSavedPrompts();

  const liked = isLiked(prompt._id);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setCopyCount((prev) => prev + 1);
      promptsApi.trackCopy(prompt._id);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy prompt:', err);
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    const willLike = !liked;
    toggleLike(prompt._id);
    setLikeCount((prev) => (willLike ? prev + 1 : Math.max(0, prev - 1)));
    promptsApi.trackLike(prompt._id, willLike ? 'like' : 'unlike');
  };

  const handleClickCard = () => {
    if (onOpenModal) {
      onOpenModal(prompt);
    }
  };

  return (
    <div
      onClick={handleClickCard}
      className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-xs cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5"
    >
      {/* Tall Portrait Visual Area */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-slate-100">
        <Image
          src={prompt.imageUrl}
          alt={prompt.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>

      {/* Card Content & Prompt Snippet in Darker Blue & Crisp Slate */}
      <div className="p-3.5 flex flex-col flex-grow justify-between gap-2.5 bg-white">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
            {prompt.category}
          </span>

          <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight line-clamp-1 group-hover:text-blue-600 transition-colors mt-0.5">
            {prompt.title}
          </h3>

          <p className="mt-1 text-[11px] text-slate-600 line-clamp-2 font-mono leading-relaxed bg-slate-50 p-2 rounded-lg border border-slate-200">
            {prompt.prompt}
          </p>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
          {/* Like count */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 text-xs transition-colors ${
              liked ? 'text-rose-500' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span className="text-[11px] font-medium">{likeCount}</span>
          </button>

          {/* 1-Click Copy Button in vibrant blue */}
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25 glow-btn'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3 h-3" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
