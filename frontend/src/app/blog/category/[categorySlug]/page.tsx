import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Clock, ArrowRight, ArrowLeft, Sparkles, BookOpen } from 'lucide-react';
import { BLOG_CATEGORIES, INITIAL_BLOG_POSTS } from '@/lib/blogData';

interface Props {
  params: Promise<{ categorySlug: string }>;
}

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map((c) => ({
    categorySlug: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = BLOG_CATEGORIES.find((c) => c.slug === categorySlug);
  if (!category) return { title: 'Category Not Found | h5games' };

  return {
    title: `${category.name} | h5games AI Blog`,
    description: category.description,
    alternates: {
      canonical: `https://h5games.space/blog/category/${categorySlug}`,
    },
    openGraph: {
      title: `${category.name} — AI Tutorials & Guides`,
      description: category.description,
      url: `https://h5games.space/blog/category/${categorySlug}`,
      type: 'website',
    },
  };
}

export default async function BlogCategoryPage({ params }: Props) {
  const { categorySlug } = await params;
  const category = BLOG_CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const posts = INITIAL_BLOG_POSTS.filter((p) => p.categorySlug === categorySlug);

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
        name: category.name,
        item: `https://h5games.space/blog/category/${categorySlug}`,
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-blue-600 transition-colors">
          Blogs
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-bold">{category.name}</span>
      </nav>

      {/* Category Hero Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Category Archive</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {category.name}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Category Switcher Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
        <Link
          href="/blog"
          className="px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap bg-white text-slate-700 border border-slate-200 hover:bg-blue-50 hover:text-blue-700 shadow-xs transition-colors"
        >
          All Blogs
        </Link>
        {BLOG_CATEGORIES.map((cat) => {
          const isActive = cat.slug === categorySlug;
          return (
            <Link
              key={cat.slug}
              href={`/blog/category/${cat.slug}`}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors shadow-xs ${
                isActive
                  ? 'bg-blue-600 text-white border border-blue-600 shadow-blue-500/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-blue-50 hover:text-blue-700'
              }`}
            >
              {cat.name}
            </Link>
          );
        })}
      </div>

      {/* Articles Grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between"
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

              <div className="p-5 flex flex-col justify-between flex-grow gap-4">
                <div className="space-y-2">
                  <h2 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h2>
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
                    Read Article →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 max-w-md mx-auto space-y-4 px-6 shadow-xs">
          <Sparkles className="w-8 h-8 text-blue-600 mx-auto" />
          <h3 className="text-base font-bold text-slate-900">Articles Coming Soon</h3>
          <p className="text-xs text-slate-500">
            Our editorial team is currently preparing tested tutorials for {category.name}. Check back shortly!
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Explore All Blogs</span>
          </Link>
        </div>
      )}
    </div>
  );
}
