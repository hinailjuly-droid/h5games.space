import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Sparkles, ShieldCheck, Zap, Users, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About h5games | Curated AI Prompts & Knowledge Base',
  description: 'Learn about h5games, our mission to democratize generative AI prompt engineering, and how we curate tested prompts for Google Gemini and ChatGPT.',
  alternates: {
    canonical: 'https://h5games.space/about',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>About h5games</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Democratizing Generative AI Prompts
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          h5games is a curated, open prompt discovery library built for designers, content creators, and digital artists pushing the boundaries of Google Gemini and ChatGPT.
        </p>
      </div>

      {/* Feature Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Instant 1-Click Copy</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Zero friction. No sign-up gates, email captures, or paywalls. Every prompt is ready to copy with a single tap.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Tested & Verified</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Every prompt in our library is verified on Google Gemini and ChatGPT models with realistic sample generations.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Direct AI Testing</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Open any prompt directly inside Google Gemini or ChatGPT with pre-filled inputs and exact parameters.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Prompt engineering has evolved into natural creative direction. We believe in sharing transparent, exact prompts with accurate photographic cues — from 85mm portrait lenses and golden hour lighting to intricate ethnic embroidery, cinematic color grading, and modern editorial styling.
        </p>
        <div className="pt-2 flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs shadow-blue-500/20"
          >
            <span>Explore All 100+ Prompts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
