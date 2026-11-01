'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  Copy,
  Check,
  Heart,
  Share2,
  ExternalLink,
  Sparkles,
  Sliders,
  ArrowLeft,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { Prompt } from '@/types';
import { promptsApi } from '@/lib/api';
import { useSavedPrompts } from '@/lib/useSavedPrompts';
import PromptCard from '@/components/prompts/PromptCard';

export default function PromptDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [prompt, setPrompt] = useState<Prompt | null>(null);
  const [related, setRelated] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);

  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedNegative, setCopiedNegative] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const { isLiked, toggleLike } = useSavedPrompts();

  useEffect(() => {
    async function loadPrompt() {
      if (!slug) return;
      setLoading(true);
      try {
        const data = await promptsApi.getPromptBySlug(slug);
        if (data) {
          setPrompt(data.prompt);
          setRelated(data.relatedPrompts);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadPrompt();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="w-10 h-10 border-2 border-sky-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-slate-400">Loading prompt details...</p>
      </div>
    );
  }

  if (!prompt) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-4">
        <Sparkles className="w-10 h-10 text-sky-400 mx-auto" />
        <h1 className="text-2xl font-bold text-slate-100">Prompt Not Found</h1>
        <p className="text-sm text-slate-300">
          The requested AI prompt could not be located. It might have been moved or updated.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Explore
        </Link>
      </div>
    );
  }

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
    try {
      await navigator.clipboard.writeText(window.location.href);
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
  const engineLabel = isGemini ? 'Test on Google Gemini' : 'Test on ChatGPT';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Back button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Prompts</span>
        </Link>
      </div>

      {/* Main Grid: Visual Image + Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Image View (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-700/60 shadow-2xl">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10]">
              <Image
                src={prompt.imageUrl}
                alt={prompt.title}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-[#081122] border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium text-sky-300">
                <Layers className="w-3.5 h-3.5" />
                {prompt.model}
              </span>
              <span className="font-mono bg-slate-900 px-2.5 py-1 rounded-md text-slate-200 border border-slate-700/50">
                {prompt.aspectRatio || '--ar 16:9'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Prompt Details & Copy Inspector (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{prompt.category}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight leading-snug">
              {prompt.title}
            </h1>
            {prompt.description && (
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {prompt.description}
              </p>
            )}
          </div>

          {/* Prompt Box */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-slate-200 uppercase tracking-wider">Exact Prompt Text</span>
              <span className="font-mono text-slate-400">{prompt.prompt.length} characters</span>
            </div>
            <div className="rounded-2xl bg-[#060c18] border border-slate-700/60 p-4 space-y-4">
              <p className="text-xs sm:text-sm text-slate-200 font-mono leading-relaxed select-all">
                {prompt.prompt}
              </p>
              <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">Ready to copy & paste</span>
                <button
                  onClick={handleCopyPrompt}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg ${
                    copiedPrompt
                      ? 'bg-emerald-600 text-white shadow-emerald-950/40'
                      : 'bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 hover:from-blue-600 hover:to-sky-500 text-white shadow-blue-950/50 glow-btn'
                  }`}
                >
                  {copiedPrompt ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied to Clipboard!</span>
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
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-rose-300 uppercase tracking-wider">Negative Prompt</span>
                <button
                  onClick={handleCopyNegative}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                >
                  {copiedNegative ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedNegative ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="rounded-xl bg-[#060c18]/90 border border-slate-700/50 p-3 text-xs text-slate-300 font-mono">
                {prompt.negativePrompt}
              </div>
            </div>
          )}

          {/* Parameters Breakdown */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 uppercase tracking-wide">
              <Sliders className="w-3.5 h-3.5 text-sky-400" />
              <span>Generation Settings</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-900/60 border border-slate-700/50 p-3 rounded-xl flex justify-between items-center">
                <span className="text-slate-400">Model:</span>
                <span className="font-semibold text-slate-100">{prompt.model}</span>
              </div>
              <div className="bg-slate-900/60 border border-slate-700/50 p-3 rounded-xl flex justify-between items-center">
                <span className="text-slate-400">Aspect Ratio:</span>
                <span className="font-mono text-sky-300">{prompt.aspectRatio || '--ar 16:9'}</span>
              </div>
              {prompt.parameters?.stylize && (
                <div className="bg-slate-900/60 border border-slate-700/50 p-3 rounded-xl flex justify-between items-center">
                  <span className="text-slate-400">Stylize:</span>
                  <span className="font-mono text-slate-100">{prompt.parameters.stylize}</span>
                </div>
              )}
              {prompt.parameters?.seed && (
                <div className="bg-slate-900/60 border border-slate-700/50 p-3 rounded-xl flex justify-between items-center">
                  <span className="text-slate-400">Seed:</span>
                  <span className="font-mono text-slate-100">{prompt.parameters.seed}</span>
                </div>
              )}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleLike(prompt._id)}
                className={`p-3 rounded-xl border transition-all ${
                  liked
                    ? 'bg-rose-500/20 text-rose-400 border-rose-500/30'
                    : 'bg-slate-900/60 text-slate-300 border-slate-700/50 hover:text-white'
                }`}
                title="Like"
              >
                <Heart className={`w-4 h-4 ${liked ? 'fill-rose-400' : ''}`} />
              </button>

              <button
                onClick={handleShare}
                className="p-3 rounded-xl bg-slate-900/60 text-slate-300 border border-slate-700/50 hover:text-white transition-all flex items-center gap-1.5 text-xs"
              >
                {copiedLink ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                <span>{copiedLink ? 'Copied Link' : 'Share'}</span>
              </button>
            </div>

            <a
              href={engineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-blue-900/30 text-sky-200 border border-sky-500/30 hover:bg-blue-800/40 transition-all"
            >
              <span>{engineLabel}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Tags */}
          {prompt.tags && prompt.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {prompt.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900/60 text-slate-300 border border-slate-700/50"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Related Prompts Section */}
      {related.length > 0 && (
        <div className="pt-16 border-t border-slate-700/40 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-100 tracking-tight">
              More Prompts in {prompt.category}
            </h2>
            <Link
              href={`/?category=${prompt.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors"
            >
              View Category →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <PromptCard key={p._id} prompt={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
