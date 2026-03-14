import { NextRequest, NextResponse } from 'next/server';
import { resources } from '@/content/resources';
import { checkRateLimit } from '@/lib/rate-limit';
import { createDownloadToken } from '@/lib/download-token';
import { downloadRequestSchema } from '@/lib/validations/download';

console.log("download route module loaded");

function getClientIp(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'unknown';
  }
  return 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const limit = checkRateLimit(`download:${ip}`);

    if (!limit.allowed) {
      return NextResponse.json(
        { error: 'Too many download requests. Please try again shortly.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = downloadRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const resource = resources.find(
      (item) => item.slug === parsed.data.slug && item.isPublished
    );

    if (!resource) {
      return NextResponse.json({ error: 'Resource not found.' }, { status: 404 });
    }

    // Placeholder for future email platform integration.
    // Example later: save parsed.data.name + parsed.data.email to ConvertKit/Beehiiv/MailerLite.
    console.log('Download lead captured', {
      slug: parsed.data.slug,
      name: parsed.data.name,
      email: parsed.data.email,
      ip,
      at: new Date().toISOString(),
    });

    const token = createDownloadToken(resource.slug);

    return NextResponse.json({
      ok: true,
      url: `/api/download/file?token=${token}`,
    });
    } catch (error) {
      console.error("Download route error:", error);
      return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }
}