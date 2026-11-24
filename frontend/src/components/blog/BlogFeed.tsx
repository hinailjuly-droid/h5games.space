'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';
import { BlogPost, BlogCategory } from '@/types';

interface BlogFeedProps {
  initialPosts: BlogPost[];
  categories: BlogCategory[];
}

export default function BlogFeed({ initialPosts }: BlogFeedProps) {
  const featured = initialPosts.find((p) => p.featured) || initialPosts[0];
  const others = initialPosts.filter((p) => p.slug !== featured?.slug);

  if (!featured) {
    return (
      <div className="text-center py-24 text-slate-500 text-sm">
        No articles published yet. Check back soon.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Featured Article Hero */}
      <section aria-label="Featured Article">
        <Link
          href={`/blog/${featured.slug}`}
          className="group block rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="relative aspect-[16/9] lg:aspect-auto lg:col-span-7 overflow-hidden bg-slate-100 min-h-[300px]">
              <Image
                src={featured.coverImage}
                alt={featured.coverImageAlt || featured.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-blue-700 border border-slate-200/80 shadow-xs backdrop-blur-md">
                  Featured
                </span>
              </div>
            </div>
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {featured.category}
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {featured.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden bg-slate-200">
                    <Image
                      src={featured.author.avatar}
                      alt={featured.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-medium text-slate-700">{featured.author.name}</span>
                  <span>•</span>
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{featured.readTime}</span>
                </div>
                <span className="text-blue-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Additional Articles Grid */}
      {others.length > 0 && (
        <section aria-label="More Articles" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <Image
                  src={post.coverImage}
                  alt={post.coverImageAlt || post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-blue-700 border border-slate-200/80 shadow-xs backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.readTime}</span>
                  </div>
                  <span className="text-blue-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      )}
    </div>
  );
}
