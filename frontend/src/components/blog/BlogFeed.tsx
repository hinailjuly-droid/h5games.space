'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Clock, ArrowRight, BookOpen, Sparkles, Filter } from 'lucide-react';
import { BlogPost, BlogCategory } from '@/types';

interface BlogFeedProps {
  initialPosts: BlogPost[];
  categories: BlogCategory[];
}

export default function BlogFeed({ initialPosts, categories }: BlogFeedProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesSearch =
        !searchTerm.trim() ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase().trim()));

      const matchesCategory =
        selectedCategory === 'all' || post.categorySlug === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [initialPosts, searchTerm, selectedCategory]);

  const featured = useMemo(() => {
    if (selectedCategory !== 'all' || searchTerm.trim()) return null;
    return initialPosts.find((p) => p.featured) || initialPosts[0];
  }, [initialPosts, selectedCategory, searchTerm]);

  const remainingPosts = useMemo(() => {
    if (featured) {
      return filteredPosts.filter((p) => p._id !== featured._id);
    }
    return filteredPosts;
  }, [filteredPosts, featured]);

  const popularPosts = useMemo(() => {
    return initialPosts.filter((p) => p.popular).slice(0, 3);
  }, [initialPosts]);

  return (
    <div className="space-y-10">
      {/* Search & Category Filter Navigation Bar */}
      <div className="space-y-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search AI guides, Gemini prompts, photography workflows..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 px-2 py-0.5 rounded bg-slate-200/60"
            >
              Clear
            </button>
          )}
        </div>

        {/* Categories Carousel */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                : 'bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700'
            }`}
          >
            All Guides ({initialPosts.length})
          </button>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.slug;
            const count = initialPosts.filter((p) => p.categorySlug === cat.slug).length;
            return (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                {cat.name} {count > 0 && `(${count})`}
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Big Article Hero (When not searching) */}
      {featured && (
        <section aria-label="Featured Article">
          <Link
            href={`/blog/${featured.slug}`}
            className="group block rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="relative aspect-[16/9] lg:aspect-auto lg:col-span-7 overflow-hidden bg-slate-100 min-h-[300px]">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-blue-700 border border-slate-200/80 shadow-xs backdrop-blur-md">
                    Featured Editorial
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
      )}

      {/* Popular Tutorials Strip */}
      {selectedCategory === 'all' && !searchTerm && popularPosts.length > 0 && (
        <section aria-label="Popular Tutorials" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base tracking-tight">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Popular Tutorials & Benchmarks</span>
            </div>
            <span className="text-xs text-slate-500 font-medium">Curated by Editors</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {popularPosts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                    {post.category}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{post.readTime}</span>
                  <span className="text-blue-600 font-semibold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Main Articles Grid */}
      <section aria-label="Article Grid" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
            {selectedCategory === 'all' && !searchTerm
              ? 'Latest Articles & Guides'
              : `Results (${remainingPosts.length})`}
          </h2>
        </div>

        {remainingPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingPosts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-blue-700 border border-slate-200/80 shadow-xs backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow gap-4">
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
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
                      Read Guide →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 max-w-md mx-auto space-y-4 px-6 shadow-xs">
            <BookOpen className="w-8 h-8 text-blue-600 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">No Guides Found</h3>
            <p className="text-xs text-slate-500">
              No articles matched your search or category filter. Try clearing the search keyword.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
