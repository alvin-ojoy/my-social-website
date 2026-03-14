import path from 'path';
import { promises as fs } from 'fs';
import mime from 'mime-types';
import { NextRequest, NextResponse } from 'next/server';
import { resources } from '@/content/resources';
import { verifyDownloadToken } from '@/lib/download-token';

export async function GET(request: NextRequest) {
  try {
    const token = request.nextUrl.searchParams.get('token');

    if (!token) {
      return NextResponse.json({ error: 'Missing token.' }, { status: 400 });
    }

    const result = verifyDownloadToken(token);

    if (!result.valid) {
      return NextResponse.json({ error: 'Invalid or expired token.' }, { status: 403 });
    }

    const resource = resources.find((item) => item.slug === result.slug && item.isPublished);

    if (!resource) {
      return NextResponse.json({ error: 'Resource not found.' }, { status: 404 });
    }

    const filePath = path.join(process.cwd(), 'public', 'downloads', resource.fileName);
    const fileBuffer = await fs.readFile(filePath);
    const contentType = mime.lookup(resource.fileName) || 'application/octet-stream';

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${resource.fileName}"`,
        'Cache-Control': 'private, no-store, max-age=0',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Unable to download file.' }, { status: 500 });
  }
}