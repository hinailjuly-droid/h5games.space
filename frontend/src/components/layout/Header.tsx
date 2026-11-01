'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Bookmark, Flame, Compass, BookOpen, Menu, X, PlusCircle } from 'lucide-react';
import { useSavedPrompts } from '@/lib/useSavedPrompts';

export default function Header() {
  const pathname = usePathname();
  const { savedIds, mounted } = useSavedPrompts();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Explore', href: '/', icon: Compass },
    { label: 'Trending', href: '/trending', icon: Flame },
    { label: 'Categories', href: '/categories', icon: Sparkles },
    { label: 'Guides & Blog', href: '/blog', icon: BookOpen },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-700/40 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-sky-400 p-[1px] shadow-lg shadow-blue-900/40 group-hover:shadow-blue-600/50 transition-all duration-300">
            <div className="w-full h-full bg-[#081021] rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-sky-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-slate-100 group-hover:text-sky-300 transition-colors">
                h5games
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-blue-950/80 text-sky-300 border border-blue-700/50">
                PRO
              </span>
            </div>
            <span className="text-[11px] text-slate-400 tracking-wide hidden sm:block">
              Curated AI Prompts
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0b162b]/80 p-1.5 rounded-full border border-slate-700/50 shadow-inner">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white border border-sky-400/40 shadow-md shadow-blue-900/50'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Saved Prompts (No Login!) */}
          <Link
            href="/saved"
            className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium border transition-all ${
              pathname === '/saved'
                ? 'bg-blue-900/50 text-sky-200 border-sky-500/50 shadow-sm'
                : 'bg-slate-900/60 text-slate-200 border-slate-700/50 hover:border-sky-500/40 hover:bg-slate-800/80'
            }`}
            title="Your Bookmarked Prompts"
          >
            <Bookmark className="w-3.5 h-3.5 text-sky-400 fill-sky-400/20" />
            <span className="hidden sm:inline">Saved</span>
            {mounted && savedIds.length > 0 && (
              <span className="bg-sky-500 text-slate-950 text-[10px] px-1.5 py-0.2 rounded-full font-bold">
                {savedIds.length}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900/60 border border-slate-700/50 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-slate-300" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-700/40 bg-[#070e1c] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600/30 text-sky-300 border border-blue-500/40'
                    : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-4 h-4 text-sky-400" />
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
