import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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

      {/* Interactive Prompt Cards Grid */}
      <section aria-label={`${categoryName} Prompts Collection`}>
        <CategoryPromptGrid prompts={prompts} categoryName={categoryName} />
      </section>
    </div>
  );
}
