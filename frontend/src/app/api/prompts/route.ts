import { NextRequest, NextResponse } from 'next/server';
import { INITIAL_PROMPTS } from '@/lib/mockData';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const model = searchParams.get('model');
  const search = searchParams.get('search')?.toLowerCase().trim();
  const sort = searchParams.get('sort') || 'trending';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '120', 10);

  let filtered = [...INITIAL_PROMPTS];

  if (category && category.toLowerCase() !== 'all') {
    filtered = filtered.filter(
      (p) =>
        p.category.toLowerCase() === category.toLowerCase() ||
        p.category.toLowerCase().replace(/[^a-z0-9]/g, '-') === category.toLowerCase()
    );
  }

  if (model && model.toLowerCase() !== 'all' && model.toLowerCase() !== 'all models') {
    filtered = filtered.filter((p) => p.model.toLowerCase() === model.toLowerCase());
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
    filtered.sort((a, b) => b.copies + b.likes * 2 - (a.copies + a.likes * 2));
  }

  const total = filtered.length;
  const paginated = filtered.slice((page - 1) * limit, page * limit);

  return NextResponse.json({
    prompts: paginated,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit) || 1,
      hasNext: page * limit < total,
      hasPrev: page > 1,
    },
  });
}
