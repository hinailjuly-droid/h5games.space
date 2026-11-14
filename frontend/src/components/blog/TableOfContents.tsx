'use client';

import React from 'react';
import { List, ChevronRight } from 'lucide-react';
import { BlogTOCItem } from '@/types';

interface TableOfContentsProps {
  items: BlogTOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Table of Contents"
      className="p-5 rounded-2xl bg-slate-50/90 border border-slate-200/90 shadow-xs my-6"
    >
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200 text-slate-900 font-bold text-xs uppercase tracking-wider">
        <List className="w-4 h-4 text-blue-600" />
        <span>Table of Contents</span>
      </div>

      <ul className="space-y-2 text-xs font-medium">
        {items.map((item, idx) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group flex items-start gap-2 text-slate-600 hover:text-blue-600 transition-colors py-0.5"
            >
              <span className="text-[11px] font-mono text-slate-400 group-hover:text-blue-600 shrink-0 mt-0.5">
                {(idx + 1).toString().padStart(2, '0')}.
              </span>
              <span className="leading-snug">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
