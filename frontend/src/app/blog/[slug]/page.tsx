import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Layers,
  ChevronRight,
  ShieldCheck,
  RefreshCw,
  FolderOpen,
  Share2,
} from 'lucide-react';
import { INITIAL_BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/blogData';
import PromptBox from '@/components/blog/PromptBox';
import TableOfContents from '@/components/blog/TableOfContents';
import ArticleContent from '@/components/blog/ArticleContent';
import ShareButtons from '@/components/blog/ShareButtons';
import { BlogTOCItem } from '@/types';

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
    title: `${post.title} | h5games AI Blog`,
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
          alt: post.coverImageAlt || post.title,
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

// Helper to extract H2 headings from markdown if post.toc is omitted
function extractTOC(content: string, existingTOC?: BlogTOCItem[]): BlogTOCItem[] {
  if (existingTOC && existingTOC.length > 0) return existingTOC;

  const h2Regex = /^##\s+([^#\n]+)$/gm;
  const items: BlogTOCItem[] = [];
  let match;

  while ((match = h2Regex.exec(content)) !== null) {
    const rawHeading = match[1].trim();
    const anchorMatch = rawHeading.match(/\{#([a-z0-9-_]+)\}/i);
    const id = anchorMatch
      ? anchorMatch[1]
      : rawHeading
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_-]+/g, '-');
    const title = rawHeading.replace(/\{#[a-z0-9-_]+\}/i, '').trim();
    if (title && id) {
      items.push({ id, title });
    }
  }

  return items;
}

export default async function UniversalArticleTemplatePage({ params }: Props) {
  const { slug } = await params;
  const post = INITIAL_BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const tocItems = extractTOC(post.content, post.toc);

  const relatedArticles = INITIAL_BLOG_POSTS.filter(
    (p) => p.slug !== slug && (p.categorySlug === post.categorySlug || p.featured)
  ).slice(0, 3);

  const popularArticles = INITIAL_BLOG_POSTS.filter(
    (p) => p.slug !== slug && p.popular
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
    <article className="max-w-7xl mx-auto py-2 space-y-8">
      {/* 1. Structured Data */}
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

      {/* 2. Top Breadcrumb Navigation */}
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
        <span className="text-slate-800 font-semibold truncate max-w-[220px] sm:max-w-none">
          {post.title}
        </span>
      </nav>

      {/* 3. Article Header: Category Badge, H1 Title, Lead, Metadata */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-2">
          <Link
            href={`/blog/category/${post.categorySlug}`}
            className="text-xs font-bold uppercase tracking-wider text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200 transition-colors"
          >
            {post.category}
          </Link>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
          {post.title}
        </h1>

        <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-4xl">
          {post.excerpt}
        </p>

        {/* Author & Publishing Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden bg-slate-200 border border-slate-200 shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-900 font-bold">{post.author.name}</span>
                <span className="inline-flex items-center text-[10px] text-blue-700 font-semibold bg-blue-50 px-1.5 py-0.2 rounded border border-blue-100">
                  Verified
                </span>
              </div>
              {post.author.role && (
                <span className="text-[11px] text-slate-400 block">{post.author.role}</span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Published: {post.publishedAt}</span>
            </div>
            {post.updatedAt && (
              <>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-1 text-blue-700 font-medium">
                  <RefreshCw className="w-3 h-3 text-blue-600" />
                  <span>Updated: {post.updatedAt}</span>
                </div>
              </>
            )}
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* 4. Featured Hero Image */}
      <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-sm">
        <Image
          src={post.coverImage}
          alt={post.coverImageAlt || post.title}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover object-center"
        />
      </div>

      {/* 5. Mobile Collapsible Table of Contents (Shown only on small screens) */}
      <div className="block lg:hidden">
        {tocItems.length > 0 && <TableOfContents items={tocItems} variant="inline" />}
      </div>

      {/* 6. Main Editorial Grid (Reading Column + Desktop Sticky Sidebar) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Main Reading Column (8 cols on desktop) */}
        <div className="lg:col-span-8 min-w-0 space-y-8">
          {/* Universal Prompt Box Component Showcase (if structured prompts provided and not embedded inline) */}
          {post.prompts && post.prompts.length > 0 && !post.content.includes('[PROMPT:') && (
            <section aria-label="Featured Copyable Prompts" className="space-y-4 my-6">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200 text-slate-900 font-bold text-base sm:text-lg">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Featured Copyable Prompts in This Guide</span>
              </div>
              <div className="space-y-6">
                {post.prompts.map((pr, idx) => (
                  <PromptBox
                    key={idx}
                    number={idx + 1}
                    title={pr.title}
                    prompt={pr.prompt}
                    model={pr.model}
                    explanation={pr.explanation}
                    aspectRatio={pr.aspectRatio}
                    imageUrl={pr.imageUrl}
                    imageAlt={pr.imageAlt}
                    imageCaption={pr.imageCaption}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Main Markdown Article Content */}
          <ArticleContent content={post.content} prompts={post.prompts} />

          {/* Universal Article Ending: FAQs Accordion (if present) */}
          {post.faqs && post.faqs.length > 0 && (
            <section
              id="faqs"
              aria-label="Frequently Asked Questions"
              className="space-y-4 pt-8 mt-10 border-t border-slate-200 scroll-mt-24"
            >
              <div className="flex items-center gap-2 text-slate-900 font-bold text-lg sm:text-xl">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <span>Frequently Asked Questions</span>
              </div>
              <div className="space-y-3">
                {post.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 transition-all hover:border-slate-300"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Prompt Library Cross-Link Banner */}
          {post.relatedPromptCategory && (
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-blue-50/90 via-sky-50/60 to-white border border-blue-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 my-8">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                  Prompt Library Collection
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  Explore 100+ Curated {post.relatedPromptCategory.toUpperCase()} Prompts
                </h4>
                <p className="text-xs text-slate-600 max-w-lg">
                  Every prompt in our library is tested on Google Gemini & ChatGPT with 1-click copy buttons and verified camera settings.
                </p>
              </div>
              <Link
                href={`/category/${post.relatedPromptCategory}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-500/25 whitespace-nowrap transition-colors"
              >
                <span>Browse Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}

          {/* Author Bio Box */}
          <div className="p-6 rounded-2xl bg-slate-50/90 border border-slate-200 flex items-start gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 border border-slate-200 shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-sm">{post.author.name}</span>
                <span className="text-blue-700 font-semibold text-[11px]">
                  {post.author.role || 'AI Researcher'}
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Specializing in multimodal prompt engineering, optical camera parameters, and generative model benchmarking at h5games.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Sticky Sidebar (4 cols on desktop) */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-20 space-y-6">
          {/* 1. Desktop Sticky Table of Contents */}
          {tocItems.length > 0 && <TableOfContents items={tocItems} variant="sidebar" />}

          {/* 2. Popular Articles Box */}
          {popularArticles.length > 0 && (
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Popular Guides</span>
              </div>
              <div className="space-y-3">
                {popularArticles.map((pop) => (
                  <Link
                    key={pop._id}
                    href={`/blog/${pop.slug}`}
                    className="group block space-y-1 transition-colors"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">
                      {pop.category}
                    </span>
                    <h5 className="text-xs font-bold text-slate-800 group-hover:text-blue-600 leading-snug line-clamp-2">
                      {pop.title}
                    </h5>
                    <span className="text-[10px] text-slate-400 block">{pop.readTime}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 3. Explore Blog Categories */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider">
              <FolderOpen className="w-4 h-4 text-blue-600" />
              <span>Browse Categories</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {BLOG_CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/blog/category/${cat.slug}`}
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-colors ${
                    cat.slug === post.categorySlug
                      ? 'bg-blue-50 text-blue-700 border-blue-200 font-bold'
                      : 'bg-slate-50 text-slate-600 hover:text-blue-600 hover:bg-white border-slate-200'
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* 7. Bottom Related Articles Grid */}
      {relatedArticles.length > 0 && (
        <section aria-label="Related Articles" className="space-y-4 pt-10 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                Continue Reading
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Related AI Tutorials & Benchmarks
              </h3>
            </div>
            <Link
              href="/blog"
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>Explore All Blogs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedArticles.map((rel) => (
              <Link
                key={rel._id}
                href={`/blog/${rel.slug}`}
                className="group p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {rel.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{rel.readTime}</span>
                  </div>
                  <span className="text-blue-600 font-bold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                    Read Article →
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
