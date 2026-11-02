'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  X,
  Copy,
  Check,
  Heart,
  Share2,
  ExternalLink,
  Sparkles,
  Sliders,
  CheckCircle2
} from 'lucide-react';
import { Prompt } from '@/types';
import { useSavedPrompts } from '@/lib/useSavedPrompts';
import { promptsApi } from '@/lib/api';

interface PromptModalProps {
  prompt: Prompt | null;
  onClose: () => void;
}

export default function PromptModal({ prompt, onClose }: PromptModalProps) {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedNegative, setCopiedNegative] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const { isLiked, toggleLike } = useSavedPrompts();

  if (!prompt) return null;

  const liked = isLiked(prompt._id);

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopiedPrompt(true);
      promptsApi.trackCopy(prompt._id);
      setTimeout(() => setCopiedPrompt(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const handleCopyNegative = async () => {
    if (!prompt.negativePrompt) return;
    try {
      await navigator.clipboard.writeText(prompt.negativePrompt);
      setCopiedNegative(true);
      setTimeout(() => setCopiedNegative(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? `${window.location.origin}/prompt/${prompt.slug}` : '';
    try {
      await navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const isGemini = prompt.model.toLowerCase().includes('gemini');
  const engineUrl = isGemini
    ? 'https://gemini.google.com/app'
    : `https://chatgpt.com/?q=${encodeURIComponent('Create an image with this prompt: ' + prompt.prompt)}`;
  const engineLabel = isGemini ? 'Try on Google Gemini' : 'Try on ChatGPT';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-sm overflow-y-auto">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog in Crisp White & Dark Blue */}
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row my-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: High-res Preview Image */}
        <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-full bg-slate-100 flex items-center justify-center overflow-hidden">
          <Image
            src={prompt.imageUrl}
            alt={prompt.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side: Prompt Details & Inspector */}
        <div className="w-full md:w-1/2 p-6 overflow-y-auto flex flex-col justify-between gap-6 bg-white">
          <div className="space-y-4">
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{prompt.category}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                {prompt.title}
              </h2>
            </div>

            {/* Prompt Box */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold uppercase tracking-wider text-slate-700">Prompt</span>
                <span className="text-[11px] font-mono text-slate-400">{prompt.prompt.length} chars</span>
              </div>
              <div className="relative rounded-2xl bg-slate-50 border border-slate-200 p-4">
                <p className="text-xs sm:text-sm text-slate-800 font-mono leading-relaxed select-all">
                  {prompt.prompt}
                </p>
                <div className="mt-3 flex justify-end">
                  <button
                    onClick={handleCopyPrompt}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                      copiedPrompt
                        ? 'bg-emerald-600 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white glow-btn'
                    }`}
                  >
                    {copiedPrompt ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Prompt Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Negative Prompt */}
            {prompt.negativePrompt && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-bold uppercase tracking-wider text-rose-600">Negative Prompt</span>
                  <button
                    onClick={handleCopyNegative}
                    className="text-[11px] text-slate-500 hover:text-slate-900 flex items-center gap-1 font-semibold"
                  >
                    {copiedNegative ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedNegative ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="rounded-xl bg-rose-50/50 border border-rose-100 p-3 text-xs text-slate-700 font-mono">
                  {prompt.negativePrompt}
                </div>
              </div>
            )}

            {/* Model Parameters */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wide">
                <Sliders className="w-3.5 h-3.5 text-blue-600" />
                <span>Parameters</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl flex justify-between">
                  <span className="text-slate-500 font-medium">Model:</span>
                  <span className="font-bold text-slate-900">{prompt.model}</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl flex justify-between">
                  <span className="text-slate-500 font-medium">Aspect Ratio:</span>
                  <span className="font-mono font-bold text-blue-700">{prompt.aspectRatio || '--ar 16:9'}</span>
                </div>
                {prompt.parameters?.stylize && (
                  <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl flex justify-between">
                    <span className="text-slate-500 font-medium">Stylize:</span>
                    <span className="font-mono font-bold text-slate-900">{prompt.parameters.stylize}</span>
                  </div>
                )}
                {prompt.parameters?.seed && (
                  <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl flex justify-between">
                    <span className="text-slate-500 font-medium">Seed:</span>
                    <span className="font-mono font-bold text-slate-900">{prompt.parameters.seed}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Tags */}
            {prompt.tags && prompt.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {prompt.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Actions Bar */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleLike(prompt._id)}
                className={`p-2.5 rounded-xl border transition-all ${
                  liked
                    ? 'bg-rose-50 text-rose-600 border-rose-200'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:text-slate-900'
                }`}
                title="Like"
              >
                <Heart className={`w-4 h-4 ${liked ? 'fill-rose-500' : ''}`} />
              </button>

              <button
                onClick={handleShare}
                className="p-2.5 rounded-xl bg-slate-50 text-slate-700 border border-slate-200 hover:text-slate-900 transition-all flex items-center gap-1.5 text-xs font-semibold"
                title="Copy Link to Prompt"
              >
                {copiedLink ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                <span className="hidden sm:inline">{copiedLink ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={engineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-all"
              >
                <span>{engineLabel}</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <Link
                href={`/prompt/${prompt.slug}`}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-all"
              >
                Full Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
