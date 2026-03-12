import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/validations/contact';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid form submission' }, { status: 400 });
    }

    if (parsed.data.website) {
      return NextResponse.json({ success: true });
    }

    if (!resend || !process.env.CONTACT_TO_EMAIL) {
      return NextResponse.json({ error: 'Email service is not configured' }, { status: 500 });
    }

    await resend.emails.send({
      from: 'Website Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL,
      subject: `New ${parsed.data.inquiryType} inquiry from ${parsed.data.name}`,
      replyTo: parsed.data.email,
      text: `Name: ${parsed.data.name}
Email: ${parsed.data.email}
Inquiry Type: ${parsed.data.inquiryType}
Company: ${parsed.data.company || 'N/A'}

Message:
${parsed.data.message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}