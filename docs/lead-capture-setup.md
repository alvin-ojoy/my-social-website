# Lead Capture Setup

This repo now captures download leads in Supabase and syncs them to MailerLite from the server route at `app/api/download/route.ts`.

## Required environment variables

Add these in Vercel and your local `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=
DOWNLOAD_TOKEN_SECRET=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
MAILERLITE_API_KEY=
MAILERLITE_GROUP_ID=
```

Also keep the existing contact-form variables if you use that flow:

```bash
CONTACT_TO_EMAIL=
RESEND_API_KEY=
RESEND_FROM_EMAIL=
```

## Supabase setup

1. Open your Supabase SQL editor.
2. Run [supabase/lead_capture_schema.sql](/Users/alvinojoy/my-website/next-app/supabase/lead_capture_schema.sql).
3. Copy your project URL into `SUPABASE_URL`.
4. Copy your service role key into `SUPABASE_SERVICE_ROLE_KEY`.

The server route uses the service role key only on the server. Do not expose it to the browser.

## MailerLite setup

1. Create a group in MailerLite for download leads.
2. Generate an API token.
3. Put the token in `MAILERLITE_API_KEY`.
4. Put the MailerLite group ID in `MAILERLITE_GROUP_ID`.

Subscribers are upserted into MailerLite and added to the configured group. If MailerLite is temporarily unavailable, the lead is still stored in Supabase and the sync error is recorded there.
