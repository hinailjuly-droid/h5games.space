import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Callout from './Callout';
import ArticleImage from './ArticleImage';
import PromptBox from './PromptBox';
import { BlogPromptExample } from '@/types';

interface ArticleContentProps {
  content: string;
  prompts?: BlogPromptExample[];
}

// Helper to slugify heading text into a valid HTML id
function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\{#([a-z0-9-_]+)\}/gi, '$1') // Extract explicit markdown {#anchor}
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function ArticleContent({ content, prompts }: ArticleContentProps) {
  return (
    <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-headings:scroll-mt-24 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-base prose-a:text-blue-600 prose-a:font-semibold hover:prose-a:text-blue-700 prose-code:text-blue-700 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono prose-code:text-xs sm:prose-code:text-sm prose-pre:bg-slate-900 prose-pre:rounded-2xl prose-pre:p-4 prose-hr:border-slate-200">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => {
            const rawText = React.Children.toArray(children)
              .map((c) => (typeof c === 'string' ? c : ''))
              .join('')
              .trim();
            const promptMatch = rawText.match(/^\[PROMPT:(\d+)\]$/i);
            if (promptMatch && prompts) {
              const pIdx = parseInt(promptMatch[1], 10) - 1;
              const pr = prompts[pIdx];
              if (pr) {
                return (
                  <PromptBox
                    number={pIdx + 1}
                    title={pr.title}
                    prompt={pr.prompt}
                    model={pr.model}
                    explanation={pr.explanation}
                    aspectRatio={pr.aspectRatio}
                    imageUrl={pr.imageUrl}
                    imageAlt={pr.imageAlt}
                    imageCaption={pr.imageCaption}
                  />
                );
              }
            }
            return <p>{children}</p>;
          },
          h2: ({ children }) => {
            const rawText = React.Children.toArray(children)
              .map((c) => (typeof c === 'string' ? c : ''))
              .join('');
            // Check for explicit {#anchor} in text
            const match = rawText.match(/\{#([a-z0-9-_]+)\}/i);
            const anchorId = match ? match[1] : slugify(rawText);
            const cleanTitle = rawText.replace(/\{#[a-z0-9-_]+\}/i, '').trim();

            return (
              <h2
                id={anchorId}
                className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-10 mb-4 pt-4 border-t border-slate-100 flex items-center group"
              >
                <span>{cleanTitle || children}</span>
                <a
                  href={`#${anchorId}`}
                  aria-label={`Link to section: ${cleanTitle}`}
                  className="ml-2 text-slate-300 hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  #
                </a>
              </h2>
            );
          },
          h3: ({ children }) => {
            const rawText = React.Children.toArray(children)
              .map((c) => (typeof c === 'string' ? c : ''))
              .join('');
            const match = rawText.match(/\{#([a-z0-9-_]+)\}/i);
            const anchorId = match ? match[1] : slugify(rawText);
            const cleanTitle = rawText.replace(/\{#[a-z0-9-_]+\}/i, '').trim();

            return (
              <h3
                id={anchorId}
                className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mt-6 mb-2"
              >
                {cleanTitle || children}
              </h3>
            );
          },
          blockquote: ({ children }) => {
            return <Callout type="tip">{children}</Callout>;
          },
          table: ({ children }) => {
            return (
              <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                  {children}
                </table>
              </div>
            );
          },
          thead: ({ children }) => {
            return (
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold uppercase tracking-wider text-[11px]">
                {children}
              </thead>
            );
          },
          th: ({ children }) => {
            return <th className="p-3.5 sm:p-4 font-bold">{children}</th>;
          },
          td: ({ children }) => {
            return <td className="p-3.5 sm:p-4 border-b border-slate-100">{children}</td>;
          },
          img: ({ src, alt }) => {
            if (!src) return null;
            return (
              <ArticleImage
                src={typeof src === 'string' ? src : ''}
                alt={alt || 'Article visual guide'}
                caption={alt}
              />
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
