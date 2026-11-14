import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  HelpCircle,
  FolderOpen,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { INITIAL_BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/blogData';
import PromptBox from '@/components/blog/PromptBox';
import TableOfContents from '@/components/blog/TableOfContents';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INITIAL_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = INITIAL_BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Article Not Found | h5games' };

  return {
    title: `${post.title} | h5games Blogs`,
    description: post.excerpt,
    alternates: {
      canonical: `https://h5games.space/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://h5games.space/blog/${slug}`,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = INITIAL_BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedArticles = INITIAL_BLOG_POSTS.filter(
    (p) => p.slug !== slug && (p.categorySlug === post.categorySlug || p.featured)
  ).slice(0, 3);

  // Article JSON-LD Structured Data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: [post.coverImage],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role || 'AI Researcher & Writer',
    },
    publisher: {
      '@type': 'Organization',
      name: 'h5games',
      url: 'https://h5games.space',
      logo: {
        '@type': 'ImageObject',
        url: 'https://h5games.space/icon',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://h5games.space/blog/${slug}`,
    },
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://h5games.space',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blogs',
        item: 'https://h5games.space/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.category,
        item: `https://h5games.space/blog/category/${post.categorySlug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: post.title,
        item: `https://h5games.space/blog/${slug}`,
      },
    ],
  };

  const faqSchema =
    post.faqs && post.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <article className="max-w-4xl mx-auto space-y-8 py-2">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumbs"
        className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 font-medium"
      >
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-blue-600 transition-colors">
          Blogs
        </Link>
        <span>/</span>
        <Link
          href={`/blog/category/${post.categorySlug}`}
          className="hover:text-blue-600 transition-colors"
        >
          {post.category}
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-semibold truncate max-w-[200px] sm:max-w-none">
          {post.title}
        </span>
      </nav>

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-200 pb-6">
        <div className="flex items-center gap-2">
          <Link
            href={`/blog/category/${post.categorySlug}`}
            className="text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200"
          >
            {post.category}
          </Link>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {post.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 pt-3 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-200 border border-slate-200">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-slate-900 font-bold block">{post.author.name}</span>
              {post.author.role && (
                <span className="text-[11px] text-slate-400 block">{post.author.role}</span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.publishedAt}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Cover Image */}
      <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Table of Contents */}
      {post.toc && post.toc.length > 0 && <TableOfContents items={post.toc} />}

      {/* Tested Prompt Examples Display (if present) */}
      {post.prompts && post.prompts.length > 0 && (
        <section aria-label="Tested Prompts" className="space-y-4 my-8">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Featured Copyable Prompts From This Guide</span>
          </div>
          <div className="space-y-4">
            {post.prompts.map((pr, idx) => (
              <PromptBox
                key={idx}
                title={pr.title}
                prompt={pr.prompt}
                model={pr.model}
                explanation={pr.explanation}
                aspectRatio={pr.aspectRatio}
              />
            ))}
          </div>
        </section>
      )}

      {/* Markdown Content */}
      <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-headings:scroll-mt-20 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-code:text-blue-700 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:text-slate-700 prose-blockquote:bg-blue-50/50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>

      {/* FAQ Section (if present) */}
      {post.faqs && post.faqs.length > 0 && (
        <section aria-label="Frequently Asked Questions" className="space-y-4 my-10 pt-6 border-t border-slate-200">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            <span>Frequently Asked Questions</span>
          </div>
          <div className="space-y-3">
            {post.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5"
              >
                <h3 className="text-sm font-bold text-slate-900">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Internal Link to Prompt Library Category */}
      {post.relatedPromptCategory && (
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 my-8">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
              Related Prompt Collection
            </span>
            <h4 className="text-base font-bold text-slate-900">
              Explore 100+ Curated {post.relatedPromptCategory.toUpperCase()} Prompts
            </h4>
            <p className="text-xs text-slate-600">
              Discover tested prompts ready to copy with realistic camera parameters.
            </p>
          </div>
          <Link
            href={`/category/${post.relatedPromptCategory}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-500/20 whitespace-nowrap transition-colors"
          >
            <span>View Category</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section aria-label="Related Articles" className="space-y-4 pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">Related Tutorials & Guides</h3>
            <Link
              href="/blog"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>All Blogs</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedArticles.map((rel) => (
              <Link
                key={rel._id}
                href={`/blog/${rel.slug}`}
                className="group p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                    {rel.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{rel.readTime}</span>
                  <span className="text-blue-600 font-semibold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
