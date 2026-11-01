import { NextResponse } from 'next/server';
import { CATEGORIES } from '@/lib/mockData';

export async function GET() {
  return NextResponse.json(CATEGORIES);
}
