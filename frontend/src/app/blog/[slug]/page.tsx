import React from 'react';
import { BLOG_POSTS } from '@/lib/mockData';
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
    title: `${post.title} | h5games Blogs`,
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
      <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-4 bg-white rounded-2xl border border-slate-200">
        <Sparkles className="w-10 h-10 text-blue-600 mx-auto" />
        <h1 className="text-2xl font-bold text-slate-900">Article Not Found</h1>
        <p className="text-sm text-slate-600">The blog article you are looking for does not exist.</p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Back button */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blogs</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
          <span>{post.category}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 rounded-full overflow-hidden bg-slate-200">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <span className="text-slate-800 font-semibold">{post.author.name}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{post.readTime}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{post.publishedAt}</span>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
        <Image src={post.coverImage} alt={post.title} fill priority className="object-cover" />
      </div>

      {/* Markdown Content */}
      <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-code:text-blue-700 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:text-slate-700 prose-blockquote:bg-blue-50/50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      {/* CTA Box */}
      <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-4 my-10">
        <h3 className="text-xl font-bold text-slate-900">Ready to create your own images?</h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
          Explore our complete collection of tested AI prompts with exact camera angles and 1-click copy.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-500/25 transition-colors"
        >
          <Sparkles className="w-4 h-4" />
          <span>Browse All Prompts</span>
        </Link>
      </div>
    </article>
  );
}
