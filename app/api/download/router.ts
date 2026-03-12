import { NextRequest, NextResponse } from 'next/server';
import { resources } from '@/content/resources';

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
  }

  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    return NextResponse.json({ error: 'Resource not found' }, { status: 404 });
  }

  const fileUrl = `/downloads/${resource.fileName}`;
  return NextResponse.redirect(new URL(fileUrl, request.url));
}