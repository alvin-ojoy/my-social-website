import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/content/products';
import { checkRateLimit } from '@/lib/rate-limit';
import { createDownloadToken } from '@/lib/download-token';
import { downloadRequestSchema } from '@/lib/validations/download';
import {
  captureDownloadLead,
  LeadCaptureConfigError,
  LeadCapturePersistenceError,
} from '@/lib/leads';

function getClientIp(request: NextRequest) {
  const forwarded =
    request.headers.get('x-forwarded-for') ??
    request.headers.get('x-real-ip');

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
      return NextResponse.json(
        {
          error:
            parsed.error.issues[0]?.message || 'Invalid download request.',
        },
        { status: 400 }
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const resource = products.find(
      (item) => item.slug === parsed.data.slug && item.isPublished
    );

    if (!resource) {
      return NextResponse.json({ error: 'Resource not found.' }, { status: 404 });
    }

    const consentedAt = new Date().toISOString();
    const userAgent = request.headers.get('user-agent') || 'unknown';

    await captureDownloadLead(
      {
        email: parsed.data.email,
        name: parsed.data.name,
      },
      {
        slug: parsed.data.slug,
        consentedAt,
        ipAddress: ip,
        userAgent,
      }
    );

    const token = createDownloadToken(resource.slug);

    return NextResponse.json({
      ok: true,
      url: `/api/download/file?token=${token}`,
    });
  } catch (error) {
    console.error('Download route error:', error);

    if (error instanceof LeadCaptureConfigError) {
      return NextResponse.json(
        { error: 'Download capture is not configured yet.' },
        { status: 500 }
      );
    }

    if (error instanceof LeadCapturePersistenceError) {
      return NextResponse.json(
        {
          error:
            'We could not save your download details right now. Please try again in a moment.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
