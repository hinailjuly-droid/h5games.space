import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Sparkles, Camera, CheckCircle2, BookOpen } from 'lucide-react';
import { CATEGORIES, INITIAL_PROMPTS } from '@/lib/mockData';
import { CATEGORY_EDITORIAL_DATA } from '@/lib/categoryData';
import CategoryPromptGrid from '@/components/prompts/CategoryPromptGrid';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.filter((c) => c.slug !== 'all').map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const editorial = CATEGORY_EDITORIAL_DATA[slug];
  const catItem = CATEGORIES.find((c) => c.slug === slug);
  const name = editorial?.name || catItem?.name || slug;

  const title = editorial?.seoTitle || `${name} AI Prompts — Curated Prompts for Gemini & ChatGPT`;
  const description =
    editorial?.seoDescription ||
    `Explore tested ${name} AI image prompts with exact camera angles and 1-click copy for Google Gemini and ChatGPT.`;

  return {
    title: `${title} | h5games`,
    description,
    alternates: {
      canonical: `https://h5games.space/category/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://h5games.space/category/${slug}`,
      type: 'website',
    },
  };
}

export default async function CategoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const editorial = CATEGORY_EDITORIAL_DATA[slug];
  const catItem = CATEGORIES.find((c) => c.slug === slug);

  if (!catItem && !editorial) {
    notFound();
  }

  const categoryName = editorial?.name || catItem?.name || slug;

  // Filter prompts for this category
  const prompts = INITIAL_PROMPTS.filter((p) => {
    const pCat = p.category.toLowerCase();
    const targetSlug = slug.toLowerCase();
    const targetName = categoryName.toLowerCase();
    return (
      pCat === targetName ||
      pCat.replace(/[^a-z0-9]/g, '-') === targetSlug ||
      pCat.includes(targetName)
    );
  });

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
        name: 'Categories',
        item: 'https://h5games.space/categories',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: categoryName,
        item: `https://h5games.space/category/${slug}`,
      },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${categoryName} AI Prompts`,
    description: editorial?.seoDescription,
    url: `https://h5games.space/category/${slug}`,
  };

  return (
    <div className="space-y-8">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/categories" className="hover:text-blue-600 transition-colors">
          Categories
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-bold">{categoryName}</span>
      </nav>

      {/* Editorial Category Header & Introduction */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Prompt Genre</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {categoryName} AI Prompts
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            {editorial?.introduction ||
              `Discover tested ${categoryName} AI image prompts crafted with accurate camera focal lengths and atmospheric lighting cues.`}
          </p>
        </div>

        {/* Use Cases & Recommended Optics */}
        {editorial && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs">
            {/* Practical Use Cases */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="font-bold text-slate-900 block uppercase tracking-wide text-[11px]">
                Key Creative Use Cases:
              </span>
              <ul className="space-y-1.5 text-slate-600">
                {editorial.useCases.map((uc, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{uc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Camera & Lighting */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-slate-900 uppercase tracking-wide text-[11px]">
                  <Camera className="w-3.5 h-3.5 text-blue-600" />
                  <span>Recommended Lighting & Optics:</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {editorial.recommendedOptics}
                </p>
              </div>

              {editorial.relatedTutorialSlug && (
                <div className="pt-2 border-t border-slate-200">
                  <Link
                    href={`/blog/${editorial.relatedTutorialSlug}`}
                    className="inline-flex items-center gap-1 text-blue-600 font-bold hover:text-blue-700 transition-colors"
                  >
                    <BookOpen className="w-3 h-3" />
                    <span>Tutorial: {editorial.relatedTutorialTitle} →</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Related Category Pills */}
        {editorial?.relatedCategories && editorial.relatedCategories.length > 0 && (
          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-medium">Related Categories:</span>
            {editorial.relatedCategories.map((rel) => (
              <Link
                key={rel.slug}
                href={`/category/${rel.slug}`}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 font-semibold transition-colors"
              >
                {rel.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Interactive Prompt Cards Grid */}
      <section aria-label={`${categoryName} Prompts Collection`}>
        <CategoryPromptGrid prompts={prompts} categoryName={categoryName} />
      </section>
    </div>
  );
}
