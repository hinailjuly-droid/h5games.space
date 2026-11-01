import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'AI Prompt Engineering Guides & Tutorials | h5games',
  description: 'In-depth tutorials, camera lens techniques, and prompt engineering strategies for Google Gemini and ChatGPT.',
};

export default function BlogListingPage() {
  const posts = BLOG_POSTS;
  const featured = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-700/50 text-sky-300 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Prompt Engineering Academy</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
          AI Guides & Tutorials
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Learn prompt crafting secrets, camera optical parameters, and generation workflows from top generative artists.
        </p>
      </div>

      {/* Featured Big Article */}
      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group block rounded-3xl overflow-hidden glass-card transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="relative aspect-[16/9] lg:aspect-auto lg:col-span-7 overflow-hidden bg-slate-950 min-h-[300px]">
              <Image
                src={featured.coverImage}
                alt={featured.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 text-sky-300 border border-slate-700/60 backdrop-blur-md">
                  Featured Guide
                </span>
              </div>
            </div>
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                  {featured.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 group-hover:text-sky-300 transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {featured.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/40 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{featured.readTime}</span>
                </div>
                <span className="text-sky-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Grid of Other Articles */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-100 tracking-tight">
          Latest Articles & Breakdowns
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPosts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl overflow-hidden glass-card flex flex-col justify-between"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-slate-950/80 text-sky-300 border border-slate-700/60 backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/40 flex items-center justify-between text-xs text-slate-400">
                  <span>{post.readTime}</span>
                  <span className="text-sky-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Guide →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
