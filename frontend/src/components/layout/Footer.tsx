import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 text-xs mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-700 to-sky-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-base text-slate-900 tracking-tight">h5games</span>
            </Link>
            <p className="text-slate-500 text-xs leading-relaxed">
              The premier open directory for state-of-the-art generative AI prompts. Curated, tested, and ready to copy for Google Gemini and ChatGPT.
            </p>
          </div>

          {/* AI Engines */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-bold tracking-wider uppercase text-[11px]">AI Models</h4>
            <ul className="space-y-2 font-medium">
              <li><Link href="/?model=Google+Gemini" className="hover:text-blue-600 transition-colors">Google Gemini Prompts</Link></li>
              <li><Link href="/?model=ChatGPT" className="hover:text-blue-600 transition-colors">ChatGPT Image Prompts</Link></li>
              <li><a href="https://gemini.google.com/app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Open Google Gemini ↗</a></li>
              <li><a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Open ChatGPT ↗</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-bold tracking-wider uppercase text-[11px]">Popular Categories</h4>
            <ul className="space-y-2 font-medium">
              <li><Link href="/category/cinematic" className="hover:text-blue-600 transition-colors">Cinematic & Movie Stills</Link></li>
              <li><Link href="/category/traditional-ethnic" className="hover:text-blue-600 transition-colors">Traditional & Royal Wear</Link></li>
              <li><Link href="/category/fashion-editorial" className="hover:text-blue-600 transition-colors">Vogue & High Fashion</Link></li>
              <li><Link href="/category/cyberpunk-sci-fi" className="hover:text-blue-600 transition-colors">Cyberpunk & Neon UI</Link></li>
              <li><Link href="/category/couple-portrait" className="hover:text-blue-600 transition-colors">Romantic Couple Portraits</Link></li>
            </ul>
          </div>

          {/* Legal & Editorial */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-bold tracking-wider uppercase text-[11px]">Editorial & Legal</h4>
            <ul className="space-y-2 font-medium">
              <li><Link href="/blog" className="hover:text-blue-600 transition-colors">Blogs</Link></li>
              <li><Link href="/about" className="hover:text-blue-600 transition-colors">About the Project</Link></li>
              <li><Link href="/editorial-policy" className="hover:text-blue-600 transition-colors">Editorial Policy</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact Editorial</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/dmca" className="hover:text-blue-600 transition-colors">DMCA Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} h5games. All prompts shared under creative open curation.</p>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Built for AI creators worldwide</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
