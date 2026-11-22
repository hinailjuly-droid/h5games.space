'use client';

import React, { useState, useEffect } from 'react';
import { List, ChevronDown, ChevronRight, Hash } from 'lucide-react';
import { BlogTOCItem } from '@/types';

interface TableOfContentsProps {
  items: BlogTOCItem[];
  variant?: 'inline' | 'sidebar';
  className?: string;
}

export default function TableOfContents({
  items,
  variant = 'inline',
  className = '',
}: TableOfContentsProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (!items || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) return null;

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
      // Close mobile dropdown if open
      setMobileOpen(false);
    }
  };

  // Sidebar Sticky Variant (Desktop)
  if (variant === 'sidebar') {
    return (
      <nav
        aria-label="Table of Contents"
        className={`p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 ${className}`}
      >
        <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider">
          <List className="w-4 h-4 text-blue-600" />
          <span>In This Article</span>
        </div>

        <ul className="space-y-1 text-xs">
          {items.map((item, idx) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleScrollTo(e, item.id)}
                  className={`group flex items-start gap-2 py-1.5 px-2 rounded-lg transition-colors leading-snug ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-bold'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] mt-0.5 shrink-0 ${
                      isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'
                    }`}
                  >
                    {(idx + 1).toString().padStart(2, '0')}.
                  </span>
                  <span>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  // Inline Variant (Collapsible on Mobile, compact on Desktop)
  return (
    <nav
      aria-label="Table of Contents"
      className={`rounded-2xl bg-slate-50/90 border border-slate-200/90 shadow-xs my-6 overflow-hidden ${className}`}
    >
      {/* Header bar / Toggle on mobile */}
      <div
        onClick={() => setMobileOpen(!mobileOpen)}
        className="p-4 sm:p-5 flex items-center justify-between cursor-pointer select-none border-b border-slate-200/60"
      >
        <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider">
          <List className="w-4 h-4 text-blue-600" />
          <span>Table of Contents</span>
          <span className="text-[11px] font-mono text-slate-400 font-normal lowercase">
            ({items.length} sections)
          </span>
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-label="Toggle Table of Contents"
          className="p-1 rounded-md text-slate-500 hover:text-slate-900 transition-transform sm:hidden"
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              mobileOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {/* Content: Always visible on sm screens, collapsible on mobile */}
      <div className={`p-4 sm:p-5 pt-3 ${mobileOpen ? 'block' : 'hidden sm:block'}`}>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs font-medium">
          {items.map((item, idx) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleScrollTo(e, item.id)}
                  className={`group flex items-start gap-2 py-1 px-1.5 rounded-md transition-colors ${
                    isActive
                      ? 'text-blue-600 font-bold bg-blue-50/70'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-white'
                  }`}
                >
                  <span
                    className={`text-[11px] font-mono shrink-0 mt-0.5 ${
                      isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'
                    }`}
                  >
                    {(idx + 1).toString().padStart(2, '0')}.
                  </span>
                  <span className="leading-snug">{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
