import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'Blogs | h5games',
  description: 'In-depth tutorials, camera lens techniques, and prompt engineering strategies for Google Gemini and ChatGPT.',
};

export default function BlogListingPage() {
  const posts = BLOG_POSTS;
  const featured = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Blogs
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Explore prompt engineering breakdowns, camera lens setups, and tutorials for generative AI.
        </p>
      </div>

      {/* Featured Big Article */}
      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group block rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="relative aspect-[16/9] lg:aspect-auto lg:col-span-7 overflow-hidden bg-slate-100 min-h-[280px]">
              <Image
                src={featured.coverImage}
                alt={featured.title}
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
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {featured.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {featured.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
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
      )}

      {/* Grid of Other Articles */}
      <div className="space-y-5">
        <h2 className="text-lg font-bold text-slate-900 tracking-tight">
          Latest Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherPosts.map((post) => (
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
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{post.readTime}</span>
                  </div>
                  <span className="text-blue-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Blog →
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
