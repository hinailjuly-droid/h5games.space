export interface PromptParameters {
  ar?: string;
  seed?: string;
  stylize?: string;
  chaos?: string;
  version?: string;
  cfgScale?: string;
  steps?: string;
}

export interface Prompt {
  _id: string;
  title: string;
  slug: string;
  prompt: string;
  negativePrompt?: string;
  model: string;
  category: string;
  tags: string[];
  imageUrl: string;
  aspectRatio: string;
  parameters?: PromptParameters;
  description?: string;
  copies: number;
  likes: number;
  views: number;
  featured?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
  hasNext: boolean;
  hasPrev?: boolean;
}

export interface PromptsResponse {
  prompts: Prompt[];
  pagination: Pagination;
}

export interface CategoryItem {
  name: string;
  slug: string;
  count: number;
  icon?: string;
}

export interface ModelItem {
  name: string;
  count: number;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  publishedAt: string;
  featured?: boolean;
}

export interface BlogResponse {
  posts: BlogPost[];
  pagination: Pagination;
}

// Compatibility types for legacy code
export interface Game {
  _id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  thumbnail: string;
  playUrl: string;
  stars?: number;
  plays?: number;
  views?: number;
  featured?: boolean;
  active?: boolean;
  verified?: boolean;
  customDescription?: string;
}

export interface DashboardData {
  stats: {
    totalGames: number;
    activeGames: number;
    featuredGames: number;
    verifiedGames: number;
    monthlyPlays: number;
    monthlyViews: number;
  };
  recentGames: Game[];
}
