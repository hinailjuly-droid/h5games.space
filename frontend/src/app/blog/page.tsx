import React from 'react';
import { Metadata } from 'next';
import BlogFeed from '@/components/blog/BlogFeed';
import { BLOG_CATEGORIES, INITIAL_BLOG_POSTS } from '@/lib/blogData';

export const metadata: Metadata = {
  title: 'AI Tutorials, Guides & Prompt Engineering | h5games Blog',
  description: 'In-depth tutorials, camera lens techniques, model benchmarks, and prompt engineering strategies for Google Gemini, ChatGPT, and FLUX.',
  alternates: {
    canonical: 'https://h5games.space/blog',
  },
  openGraph: {
    title: 'AI Tutorials, Guides & Prompt Engineering | h5games Blog',
    description: 'In-depth tutorials, camera lens techniques, model benchmarks, and prompt engineering strategies for Google Gemini and ChatGPT.',
    url: 'https://h5games.space/blog',
    type: 'website',
  },
};

export default function BlogListingPage() {
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
    ],
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <BlogFeed initialPosts={INITIAL_BLOG_POSTS} categories={BLOG_CATEGORIES} />
    </div>
  );
}
