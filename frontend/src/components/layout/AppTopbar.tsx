'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, Sparkles } from 'lucide-react';

interface AppTopbarProps {
  onOpenMobileSidebar: () => void;
}

export default function AppTopbar({ onOpenMobileSidebar }: AppTopbarProps) {
  return (
    <header className="sticky top-0 z-30 h-14 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between shadow-xs">
      {/* Mobile Hamburger & Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileSidebar}
          className="p-1.5 rounded-lg text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 md:hidden"
          aria-label="Open Navigation"
        >
          <Menu className="w-5 h-5" />
        </button>
        <Link href="/" className="md:hidden flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-700 to-sky-500 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-extrabold text-sm text-slate-900 tracking-tight">h5games</span>
        </Link>
      </div>

      {/* Right Spacer / Actions */}
      <div className="flex items-center gap-2"></div>
    </header>
  );
}
