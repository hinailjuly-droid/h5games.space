import { MetadataRoute } from 'next';
import { INITIAL_PROMPTS, CATEGORIES, BLOG_POSTS } from '@/lib/mockData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://h5games.space';

  const promptEntries: MetadataRoute.Sitemap = INITIAL_PROMPTS.map((p) => ({
    url: `${baseUrl}/prompt/${p.slug}`,
    lastModified: new Date(p.createdAt || Date.now()),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt || Date.now()),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const categoryEntries: MetadataRoute.Sitemap = CATEGORIES.filter((c) => c.slug !== 'all').map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  const routes = [
    '',
    '/trending',
    '/categories',
    '/blog',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/dmca',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.7,
  }));

  return [...routes, ...promptEntries, ...categoryEntries, ...blogEntries];
}
