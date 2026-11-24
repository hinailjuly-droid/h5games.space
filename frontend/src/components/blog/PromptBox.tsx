'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Copy, Check, Sparkles, Layers, Image as ImageIcon } from 'lucide-react';

export interface PromptBoxProps {
  number?: number | string;
  title: string;
  prompt: string;
  model?: string;
  explanation?: string;
  aspectRatio?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageCaption?: string;
  className?: string;
}

export default function PromptBox({
  number,
  title,
  prompt,
  model = 'Google Gemini & ChatGPT',
  explanation,
  aspectRatio,
  imageUrl,
  imageAlt,
  imageCaption,
  className = '',
}: PromptBoxProps) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  // Format prompt number as "PROMPT 01", "PROMPT 02", etc.
  const formattedNumber =
    number !== undefined
      ? typeof number === 'number'
        ? `PROMPT ${number.toString().padStart(2, '0')}`
        : number.toUpperCase().startsWith('PROMPT')
        ? number.toUpperCase()
        : `PROMPT ${number.toUpperCase()}`
      : null;

  const handleCopy = async () => {
    setCopyError(false);
    let success = false;

    // 1. Try modern Clipboard API
    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(prompt);
        success = true;
      } catch (err) {
        console.warn('Clipboard API failed, trying fallback...', err);
      }
    }

    // 2. Robust fallback for older browsers or non-HTTPS/sandboxed iframes
    if (!success && typeof document !== 'undefined') {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = prompt;
        // Avoid scrolling to bottom
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = '0';
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';
        textArea.setAttribute('readonly', '');
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          success = true;
        }
      } catch (err) {
        console.error('Fallback copy failed:', err);
      }
    }

    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 3000);
    }
  };

  return (
    <div
      className={`rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden my-8 transition-all hover:border-blue-300 hover:shadow-md ${className}`}
    >
      {/* 1. Header Bar: Prompt Number Badge & Title */}
      <div className="bg-slate-50/90 px-4 sm:px-5 py-3.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex flex-wrap items-center gap-2.5">
          {formattedNumber && (
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-200/80">
              [ {formattedNumber} ]
            </span>
          )}
          <h4 className="font-bold text-sm sm:text-base text-slate-900 tracking-tight">
            {title}
          </h4>
        </div>
      </div>

      {/* 2. Short Explanation of intended result */}
      {explanation && (
        <div className="px-4 sm:px-5 py-2.5 text-xs text-slate-600 leading-relaxed bg-blue-50/25 border-b border-slate-100 flex items-start gap-2">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-800">Intended Result: </span>
            <span>{explanation}</span>
          </div>
        </div>
      )}

      {/* 3. Optional Example Demonstration Image */}
      {imageUrl && (
        <div className="p-4 sm:p-5 bg-slate-50/50 border-b border-slate-100">
          <div className="relative w-full max-w-sm mx-auto rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
            <Image
              src={imageUrl}
              alt={imageAlt || title}
              width={682}
              height={1024}
              sizes="(max-width: 768px) 100vw, 384px"
              className="w-full h-auto object-contain object-center block"
              loading="lazy"
            />
          </div>
          {imageCaption && (
            <p className="mt-2.5 text-center text-xs text-slate-500 italic px-2">
              {imageCaption}
            </p>
          )}
        </div>
      )}

      {/* 4. Complete Prompt Text in Readable Container */}
      <div className="p-4 sm:p-5 bg-slate-50/70 border-b border-slate-200/80">
        <label className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400 block mb-1.5">
          Prompt Text:
        </label>
        <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-[13px] font-mono leading-relaxed select-all whitespace-pre-wrap break-words">
          {prompt}
        </div>
      </div>

      {/* 5. Prominent COPY PROMPT Button DIRECTLY BELOW THE PROMPT TEXT */}
      <div className="p-3 sm:p-4 bg-white flex items-center justify-end">
        <button
          onClick={handleCopy}
          type="button"
          aria-label={`Copy prompt: ${title}`}
          className={`w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-95 ${
            copied
              ? 'bg-emerald-600 text-white shadow-emerald-500/20'
              : copyError
              ? 'bg-rose-600 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25 hover:shadow-md'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 stroke-[2.5]" />
              <span>COPIED TO CLIPBOARD!</span>
            </>
          ) : copyError ? (
            <span>FAILED TO COPY - SELECT TEXT MANUALLY</span>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>COPY PROMPT</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
