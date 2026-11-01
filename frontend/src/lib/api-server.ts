import { INITIAL_PROMPTS, CATEGORIES } from './mockData';
import { Prompt, PromptsResponse, CategoryItem } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function fetchFromApi(endpoint: string, options: RequestInit = {}) {
  try {
    const url = `${API_URL}${endpoint}`;
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    return null;
  }
}

export const serverApi = {
  getPrompts: async (params: Record<string, string | number> = {}): Promise<PromptsResponse> => {
    const query = new URLSearchParams(
      Object.entries(params).map(([k, v]) => [k, String(v)])
    ).toString();
    const data = await fetchFromApi(`/prompts?${query}`, { next: { revalidate: 60 } });
    if (data && data.prompts) return data;

    return {
      prompts: INITIAL_PROMPTS,
      pagination: {
        page: 1,
        limit: 20,
        total: INITIAL_PROMPTS.length,
        pages: 1,
        hasNext: false,
        hasPrev: false,
      },
    };
  },

  getPromptBySlug: async (slug: string): Promise<{ prompt: Prompt; relatedPrompts: Prompt[] } | null> => {
    const data = await fetchFromApi(`/prompts/${slug}`, { next: { revalidate: 60 } });
    if (data && data.prompt) return data;

    const prompt = INITIAL_PROMPTS.find((p) => p.slug === slug);
    if (!prompt) return null;
    const relatedPrompts = INITIAL_PROMPTS.filter((p) => p.slug !== slug).slice(0, 4);
    return { prompt, relatedPrompts };
  },

  getFeaturedPrompts: async (): Promise<Prompt[]> => {
    const data = await fetchFromApi('/prompts/featured', { next: { revalidate: 60 } });
    if (Array.isArray(data) && data.length > 0) return data;
    return INITIAL_PROMPTS.filter((p) => p.featured).slice(0, 6);
  },

  getCategories: async (): Promise<CategoryItem[]> => {
    const data = await fetchFromApi('/prompts/categories', { next: { revalidate: 86400 } });
    if (Array.isArray(data) && data.length > 0) return data;
    return CATEGORIES;
  },
};
