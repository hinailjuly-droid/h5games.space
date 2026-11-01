import axios from 'axios';
import { INITIAL_PROMPTS, CATEGORIES, AI_MODELS, BLOG_POSTS } from './mockData';
import { Prompt, PromptsResponse, CategoryItem, ModelItem, BlogPost } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || (typeof window !== 'undefined' ? '/api' : 'http://localhost:3000/api');

const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const promptsApi = {
  getPrompts: async (params?: {
    page?: number;
    limit?: number;
    category?: string;
    model?: string;
    search?: string;
    sort?: string;
  }): Promise<PromptsResponse> => {
    try {
      const { data } = await api.get('/prompts', { params });
      if (data && Array.isArray(data.prompts) && data.prompts.length > 0) return data;
      throw new Error('API returned empty or invalid structure');
    } catch {
      // Fallback filtering on mock data
      let filtered = [...INITIAL_PROMPTS];
      const category = params?.category;
      const model = params?.model;
      const search = params?.search?.toLowerCase().trim();
      const sort = params?.sort || 'trending';

      if (category && category.toLowerCase() !== 'all') {
        filtered = filtered.filter(
          (p) => p.category.toLowerCase() === category.toLowerCase() ||
                 p.category.toLowerCase().replace(/[^a-z0-9]/g, '-') === category.toLowerCase()
        );
      }

      if (model && model.toLowerCase() !== 'all' && model.toLowerCase() !== 'all models') {
        filtered = filtered.filter(
          (p) => p.model.toLowerCase() === model.toLowerCase()
        );
      }

      if (search) {
        filtered = filtered.filter(
          (p) =>
            p.title.toLowerCase().includes(search) ||
            p.prompt.toLowerCase().includes(search) ||
            p.tags.some((t) => t.toLowerCase().includes(search)) ||
            p.category.toLowerCase().includes(search)
        );
      }

      if (sort === 'copies' || sort === 'most-copied') {
        filtered.sort((a, b) => b.copies - a.copies);
      } else if (sort === 'likes' || sort === 'most-liked') {
        filtered.sort((a, b) => b.likes - a.likes);
      } else if (sort === 'newest') {
        filtered.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
      } else {
        // trending
        filtered.sort((a, b) => (b.copies + b.likes * 2) - (a.copies + a.likes * 2));
      }

      const page = params?.page || 1;
      const limit = params?.limit || 20;
      const total = filtered.length;
      const paginated = filtered.slice((page - 1) * limit, page * limit);

      return {
        prompts: paginated,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit) || 1,
          hasNext: page * limit < total,
          hasPrev: page > 1,
        },
      };
    }
  },

  getPromptBySlug: async (slug: string): Promise<{ prompt: Prompt; relatedPrompts: Prompt[] } | null> => {
    try {
      const { data } = await api.get(`/prompts/${slug}`);
      if (data && data.prompt) return data;
      throw new Error('Prompt not found from API');
    } catch {
      const prompt = INITIAL_PROMPTS.find((p) => p.slug === slug);
      if (!prompt) return null;
      const relatedPrompts = INITIAL_PROMPTS.filter(
        (p) => p.slug !== slug && (p.category === prompt.category || p.model === prompt.model)
      ).slice(0, 4);
      return { prompt, relatedPrompts };
    }
  },

  getFeaturedPrompts: async (): Promise<Prompt[]> => {
    try {
      const { data } = await api.get('/prompts/featured');
      if (Array.isArray(data) && data.length > 0) return data;
      throw new Error('No featured prompts returned');
    } catch {
      return INITIAL_PROMPTS.filter((p) => p.featured).slice(0, 6);
    }
  },

  getCategories: async (): Promise<CategoryItem[]> => {
    try {
      const { data } = await api.get('/prompts/categories');
      if (Array.isArray(data) && data.length > 0) return data;
      throw new Error('Failed to fetch categories');
    } catch {
      return CATEGORIES;
    }
  },

  getModels: async (): Promise<ModelItem[]> => {
    try {
      const { data } = await api.get('/prompts/models');
      if (Array.isArray(data) && data.length > 0) return data;
      throw new Error('Failed to fetch models');
    } catch {
      return AI_MODELS;
    }
  },

  trackCopy: async (id: string): Promise<{ success: boolean; copies?: number }> => {
    try {
      const { data } = await api.post(`/prompts/${id}/copy`);
      return data;
    } catch {
      return { success: true };
    }
  },

  trackLike: async (id: string, action: 'like' | 'unlike'): Promise<{ success: boolean; likes?: number }> => {
    try {
      const { data } = await api.post(`/prompts/${id}/like`, { action });
      return data;
    } catch {
      return { success: true };
    }
  },
};

export const blogApi = {
  getPosts: async (): Promise<BlogPost[]> => {
    try {
      const { data } = await api.get('/blog');
      if (Array.isArray(data) && data.length > 0) return data;
      throw new Error('No posts returned');
    } catch {
      return BLOG_POSTS;
    }
  },

  getPostBySlug: async (slug: string): Promise<BlogPost | null> => {
    try {
      const { data } = await api.get(`/blog/${slug}`);
      if (data && data.title) return data;
      throw new Error('Post not found');
    } catch {
      return BLOG_POSTS.find((p) => p.slug === slug) || null;
    }
  },
};

// Compatibility stubs for legacy routes
export const gamesApi = {
  getGames: async () => ({ games: [], pagination: { total: 0, page: 1, limit: 10, pages: 1, hasNext: false } }),
  getGameBySlug: async () => null,
  getFeaturedGames: async () => [],
  getTrendingGames: async () => [],
  getPopularGames: async () => [],
  getCategories: async () => [],
  searchGames: async () => ({ games: [] }),
  trackPlay: async () => ({}),
  trackView: async () => ({}),
};

export const adminApi = {
  login: async () => ({ success: true, token: 'mock' }),
  getDashboard: async () => ({
    stats: {
      totalGames: 12,
      monthlyPlays: 4500,
      monthlyViews: 12000,
      activeGames: 12,
      featuredGames: 4,
      verifiedGames: 8
    },
    recentGames: []
  }),
  triggerFetch: async () => ({ success: true }),
  getDashboardStats: async () => ({
    totalGames: 12,
    monthlyPlays: 4500,
    monthlyViews: 12000,
    activeGames: 12,
    featuredGames: 4,
    verifiedGames: 8
  }),
  getAnalytics: async () => ({
    pageViews: 12000,
    uniqueVisitors: 3400,
    daily: [
      { date: '2026-10-25', views: 80 },
      { date: '2026-10-26', views: 110 },
      { date: '2026-10-27', views: 140 },
      { date: '2026-10-28', views: 190 },
      { date: '2026-10-29', views: 220 },
      { date: '2026-10-30', views: 250 },
      { date: '2026-10-31', views: 310 }
    ],
    categoryStats: [
      { _id: 'Cinematic', totalPlays: 1200 },
      { _id: 'Traditional', totalPlays: 980 },
      { _id: 'Cyberpunk', totalPlays: 850 }
    ],
    topByPlays: [
      { title: 'Royal Indian Bride', category: 'Traditional', plays: 1200, views: 3400 },
      { title: 'Neon Shinjuku Samurai', category: 'Cyberpunk', plays: 980, views: 2800 }
    ]
  }),
  getSettings: async () => ({ siteName: 'h5games' }),
  updateSettings: async () => ({ success: true }),
  updateGame: async () => ({ success: true }),
  deleteGame: async () => ({ success: true }),
  getGames: async () => ({ games: [], pagination: { total: 0 } }),
};
