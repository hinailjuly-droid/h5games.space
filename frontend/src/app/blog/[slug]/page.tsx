import React from 'react';
import { BLOG_POSTS } from '@/lib/mockData';
import { BlogPost } from '@/types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Article Not Found | h5games' };

  return {
    title: `${post.title} | h5games Guides`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-4">
        <Sparkles className="w-10 h-10 text-sky-400 mx-auto" />
        <h1 className="text-2xl font-bold text-slate-100">Article Not Found</h1>
        <p className="text-sm text-slate-300">The guide you are looking for does not exist.</p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Guides
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back button */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Guides</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-700/40 pb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{post.category}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 rounded-full overflow-hidden bg-blue-900/40">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <span className="text-slate-200 font-medium">{post.author.name}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readTime}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.publishedAt}</span>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-slate-950 border border-slate-700/60 shadow-2xl">
        <Image src={post.coverImage} alt={post.title} fill priority className="object-cover" />
      </div>

      {/* Markdown Content in Dark White & Slate */}
      <div className="prose prose-invert max-w-none prose-headings:font-bold prose-headings:text-slate-100 prose-p:text-slate-300 prose-p:leading-relaxed prose-a:text-sky-400 prose-code:text-sky-300 prose-code:bg-slate-900/80 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-blockquote:border-sky-500 prose-blockquote:text-slate-300">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      {/* CTA Box in Deep Navy */}
      <div className="p-8 rounded-3xl glass-card text-center space-y-4 my-10">
        <h3 className="text-xl font-bold text-slate-100">Ready to create your own images?</h3>
        <p className="text-xs text-slate-300 max-w-md mx-auto">
          Explore our complete collection of tested Google Gemini and ChatGPT prompts with exact camera angles and copy buttons.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 text-white shadow-lg shadow-blue-950/50"
        >
          <Sparkles className="w-4 h-4" />
          <span>Browse 10,000+ AI Prompts</span>
        </Link>
      </div>
    </article>
  );
}
