'use client';

import React, { useState } from 'react';
import { Copy, Check, Sparkles, Layers } from 'lucide-react';

interface PromptBoxProps {
  title: string;
  prompt: string;
  model: string;
  explanation: string;
  aspectRatio?: string;
  className?: string;
}

export default function PromptBox({
  title,
  prompt,
  model,
  explanation,
  aspectRatio,
  className = '',
}: PromptBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy prompt:', err);
    }
  };

  return (
    <div
      className={`rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden my-6 transition-all hover:border-blue-300 hover:shadow-md ${className}`}
    >
      {/* Header bar */}
      <div className="bg-slate-50/80 px-4 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
          <h4 className="font-bold text-sm text-slate-900 tracking-tight">{title}</h4>
        </div>

        <div className="flex items-center gap-2">
          {aspectRatio && (
            <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
              {aspectRatio}
            </span>
          )}
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            <Layers className="w-3 h-3" />
            {model}
          </span>
        </div>
      </div>

      {/* Explanation */}
      {explanation && (
        <div className="px-4 pt-3 pb-1 text-xs text-slate-600 leading-relaxed bg-blue-50/20 border-b border-slate-100">
          <span className="font-semibold text-slate-800">Expected Result: </span>
          {explanation}
        </div>
      )}

      {/* Prompt content & Copy action */}
      <div className="p-4 bg-slate-900 text-slate-100 relative group">
        <pre className="font-mono text-xs sm:text-[13px] leading-relaxed whitespace-pre-wrap break-words pr-20 text-slate-200 selection:bg-blue-500 selection:text-white">
          {prompt}
        </pre>

        <button
          onClick={handleCopy}
          aria-label="Copy prompt text"
          className={`absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-md ${
            copied
              ? 'bg-emerald-600 text-white'
              : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/30'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
