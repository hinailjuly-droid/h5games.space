const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

/**
 * Server-side API utility using native fetch for Next.js caching & ISR.
 */
export async function fetchFromApi(endpoint: string, options: RequestInit = {}) {
  const url = `${API_URL}${endpoint}`;
  
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(error.error || `API error: ${res.status}`);
  }

  return res.json();
}

export const serverApi = {
  getGames: (params: any = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetchFromApi(`/games?${query}`, { next: { revalidate: 60, tags: ['games'] } });
  },
  
  getGameBySlug: (slug: string) => {
    return fetchFromApi(`/games/${slug}`, { next: { revalidate: 86400, tags: [`game-${slug}`] } });
  },
  
  getFeaturedGames: () => {
    return fetchFromApi('/games/featured', { next: { revalidate: 60, tags: ['featured-games'] } });
  },
  
  getTrendingGames: () => {
    return fetchFromApi('/games/trending', { next: { revalidate: 60, tags: ['trending-games'] } });
  },
  
  getPopularGames: () => {
    return fetchFromApi('/games/popular', { next: { revalidate: 60, tags: ['popular-games'] } });
  },
  
  getCategories: () => {
    return fetchFromApi('/games/categories', { next: { revalidate: 86400, tags: ['categories'] } });
  },

  getAllGameSlugs: async (limit = 2000) => {
    // Fetch games to get slugs for SSG
    const data = await fetchFromApi(`/games?limit=${limit}`, { next: { revalidate: 60 } });
    return data.games.map((g: any) => g.slug);
  },

  getLatestBlogPosts: (limit = 3) => {
    return fetchFromApi(`/blog?limit=${limit}&featured=true`, { next: { revalidate: 60, tags: ['blog'] } });
  },

  getBlogPosts: (params: any = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetchFromApi(`/blog?${query}`, { next: { revalidate: 60, tags: ['blog'] } });
  },

  getPostBySlug: (slug: string) => {
    return fetchFromApi(`/blog/${slug}`, { next: { revalidate: 86400, tags: [`blog-${slug}`] } });
  }
};
