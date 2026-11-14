import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, Search, Sparkles, RefreshCw, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Editorial Policy & Verification Standards | h5games',
  description: 'Our standards for prompt testing, AI tutorial research, model evaluations, accuracy maintenance, and community corrections.',
  alternates: {
    canonical: 'https://h5games.space/editorial-policy',
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 py-2">
      {/* Header */}
      <div className="space-y-3 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Transparency & Standards</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Editorial & Testing Policy
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
          At h5games, we are dedicated to providing tested, reproducible AI art prompts and accurate educational guides for Google Gemini, ChatGPT, and generative AI creators.
        </p>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold">
            <Search className="w-4 h-4" />
          </div>
          <h2 className="text-base font-bold text-slate-900">1. How We Research Guides</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            All tutorials and prompt engineering breakdowns are written from first-hand testing on live generative AI models. We test model responses across diverse seeds, lighting setups, and camera configurations to verify that instructions produce consistent, reliable results before publication.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-base font-bold text-slate-900">2. How Prompts Are Tested</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every prompt in our library is evaluated against Google Gemini (Imagen 3) or ChatGPT (DALL-E 3). We check for anatomical accuracy, fabric textures, lighting balance, and prompt fidelity. We strictly avoid bloated, non-functional keywords such as &ldquo;hyper-detailed&rdquo; or &ldquo;8k&rdquo; that degrade output quality.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 font-bold">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <h2 className="text-base font-bold text-slate-900">3. Objective Tool Reviews</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            When reviewing AI software, we evaluate platforms objectively on prompt adherence, speed, pricing transparency, and real-world utility. We do not accept sponsored placements that compromise our honest evaluations, nor do we present unverified claims as facts.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
            <RefreshCw className="w-4 h-4" />
          </div>
          <h2 className="text-base font-bold text-slate-900">4. Content Accuracy & Updates</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Generative AI evolves rapidly. When models undergo architectural updates or feature deprecations, we review and refresh our tutorials and prompt recommendations to reflect current platform capabilities.
          </p>
        </div>
      </div>

      {/* Corrections Policy */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-slate-900">5. Requesting Corrections & Community Feedback</h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          We welcome feedback from creators, researchers, and developers. If you identify a factual error in an article, an outdated prompt syntax, or an issue with generation reproducibility, please reach out to our editorial desk. We investigate reported discrepancies promptly and publish transparent corrections where warranted.
        </p>

        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Editorial Desk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
