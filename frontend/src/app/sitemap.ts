import { MetadataRoute } from 'next';
import { serverApi } from '@/lib/api-server';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.h5games.space';

  let gameEntries: MetadataRoute.Sitemap = [];
  let blogEntries: MetadataRoute.Sitemap = [];
  
  try {
    const data = await serverApi.getGames({ limit: 2000 });
    const slugs = (data?.games || []).map((g: any) => g.slug);
    
    gameEntries = slugs.map((slug: string) => ({
      url: `${baseUrl}/game/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

    const blogData = await serverApi.getBlogPosts({ limit: 100 });
    blogEntries = (blogData?.posts || []).map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt || post.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.warn('Sitemap dynamic fetch skipped (backend unreachable). Proceeding with static routes.');
  }

  const routes = [
    '',
    '/games',
    '/featured',
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

  const categoryRoutes = [
    'action', 'puzzle', 'rpg', 'racing', 'strategy', 'arcade', 'multiplayer', 'board-card', 'simulation', 'platformer'
  ].map((cat) => ({
    url: `${baseUrl}/category/${cat}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...routes, ...categoryRoutes, ...gameEntries, ...blogEntries];
}
