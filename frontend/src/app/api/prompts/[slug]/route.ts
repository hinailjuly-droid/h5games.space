import { NextRequest, NextResponse } from 'next/server';
import { INITIAL_PROMPTS } from '@/lib/mockData';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const prompt = INITIAL_PROMPTS.find((p) => p.slug === slug);
  if (!prompt) {
    return NextResponse.json({ message: 'Prompt not found' }, { status: 404 });
  }

  const relatedPrompts = INITIAL_PROMPTS.filter(
    (p) => p.slug !== slug && (p.category === prompt.category || p.model === prompt.model)
  ).slice(0, 4);

  return NextResponse.json({ prompt, relatedPrompts });
}
