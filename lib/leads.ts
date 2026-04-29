type LeadCaptureEnv = {
  supabaseUrl: string;
  supabaseServiceRoleKey: string;
  mailerliteApiKey: string;
  mailerliteGroupId: string;
};

type LeadIdentity = {
  email: string;
  name: string;
};

type LeadContext = {
  slug: string;
  consentedAt: string;
  ipAddress: string;
  userAgent: string;
};

type LeadRow = {
  email: string;
  name: string | null;
  download_count: number;
  first_download_slug: string | null;
  first_downloaded_at: string | null;
  last_download_slug: string | null;
  last_downloaded_at: string | null;
};

type MailerLiteSubscriberResponse = {
  data?: {
    id: string;
    status: string;
  };
  message?: string;
  errors?: Record<string, string[]>;
};

export class LeadCaptureConfigError extends Error {}
export class LeadCapturePersistenceError extends Error {}

function getLeadCaptureEnv(): LeadCaptureEnv {
  const supabaseUrl = process.env.SUPABASE_URL ?? '';
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';
  const mailerliteApiKey = process.env.MAILERLITE_API_KEY ?? '';
  const mailerliteGroupId = process.env.MAILERLITE_GROUP_ID ?? '';

  const missing = [
    !supabaseUrl && 'SUPABASE_URL',
    !supabaseServiceRoleKey && 'SUPABASE_SERVICE_ROLE_KEY',
    !mailerliteApiKey && 'MAILERLITE_API_KEY',
    !mailerliteGroupId && 'MAILERLITE_GROUP_ID',
  ].filter(Boolean);

  if (missing.length > 0) {
    throw new LeadCaptureConfigError(
      `Missing lead capture environment variables: ${missing.join(', ')}`
    );
  }

  return {
    supabaseUrl,
    supabaseServiceRoleKey,
    mailerliteApiKey,
    mailerliteGroupId,
  };
}

async function fetchSupabase<T>(
  env: LeadCaptureEnv,
  path: string,
  init?: RequestInit
): Promise<T> {
  const headers = new Headers(init?.headers);
  headers.set('apikey', env.supabaseServiceRoleKey);
  headers.set('Authorization', `Bearer ${env.supabaseServiceRoleKey}`);
  headers.set('Content-Type', 'application/json');

  const response = await fetch(`${env.supabaseUrl}/rest/v1/${path}`, {
    ...init,
    headers,
    cache: 'no-store',
  });

  if (!response.ok) {
    const body = await response.text();
    throw new LeadCapturePersistenceError(
      `Supabase request failed (${response.status}): ${body}`
    );
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

async function getExistingLead(env: LeadCaptureEnv, email: string) {
  const encodedEmail = encodeURIComponent(email);
  const rows = await fetchSupabase<LeadRow[]>(
    env,
    `download_leads?select=email,name,download_count,first_download_slug,first_downloaded_at,last_download_slug,last_downloaded_at&email=eq.${encodedEmail}&limit=1`
  );

  return rows[0] ?? null;
}

async function upsertLead(
  env: LeadCaptureEnv,
  identity: LeadIdentity,
  context: LeadContext
) {
  const existingLead = await getExistingLead(env, identity.email);
  const nextCount = (existingLead?.download_count ?? 0) + 1;

  await fetchSupabase(
    env,
    'download_leads?on_conflict=email',
    {
      method: 'POST',
      headers: {
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify({
        email: identity.email,
        name: identity.name,
        first_download_slug: existingLead?.first_download_slug ?? context.slug,
        first_downloaded_at:
          existingLead?.first_downloaded_at ?? context.consentedAt,
        last_download_slug: context.slug,
        last_downloaded_at: context.consentedAt,
        consented_to_marketing: true,
        consented_at: context.consentedAt,
        consent_ip: context.ipAddress,
        last_user_agent: context.userAgent,
        download_count: nextCount,
      }),
    }
  );
}

async function insertLeadEvent(
  env: LeadCaptureEnv,
  identity: LeadIdentity,
  context: LeadContext
) {
  await fetchSupabase(env, 'download_events', {
    method: 'POST',
    headers: {
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      email: identity.email,
      name: identity.name,
      slug: context.slug,
      consented_to_marketing: true,
      consented_at: context.consentedAt,
      ip_address: context.ipAddress,
      user_agent: context.userAgent,
      source: 'website-download-modal',
    }),
  });
}

async function updateMailerLiteSyncStatus(
  env: LeadCaptureEnv,
  email: string,
  payload: {
    mailerlite_status: string;
    mailerlite_subscriber_id?: string | null;
    mailerlite_error?: string | null;
    mailerlite_last_synced_at: string;
  }
) {
  const encodedEmail = encodeURIComponent(email);

  await fetchSupabase(env, `download_leads?email=eq.${encodedEmail}`, {
    method: 'PATCH',
    headers: {
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(payload),
  });
}

async function syncMailerLiteSubscriber(
  env: LeadCaptureEnv,
  identity: LeadIdentity,
  context: LeadContext
) {
  const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.mailerliteApiKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: identity.email,
      fields: {
        name: identity.name,
      },
      groups: [env.mailerliteGroupId],
      status: 'active',
      subscribed_at: formatMailerLiteDate(context.consentedAt),
      opted_in_at: formatMailerLiteDate(context.consentedAt),
      ip_address: context.ipAddress !== 'unknown' ? context.ipAddress : undefined,
      optin_ip: context.ipAddress !== 'unknown' ? context.ipAddress : undefined,
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    const body = (await response.text()).slice(0, 500);
    throw new Error(`MailerLite request failed (${response.status}): ${body}`);
  }

  return (await response.json()) as MailerLiteSubscriberResponse;
}

function formatMailerLiteDate(value: string) {
  return value.slice(0, 19).replace('T', ' ');
}

export async function captureDownloadLead(
  identity: LeadIdentity,
  context: LeadContext
) {
  const env = getLeadCaptureEnv();

  await upsertLead(env, identity, context);
  await insertLeadEvent(env, identity, context);

  try {
    const result = await syncMailerLiteSubscriber(env, identity, context);

    await updateMailerLiteSyncStatus(env, identity.email, {
      mailerlite_status: result.data?.status ?? 'active',
      mailerlite_subscriber_id: result.data?.id ?? null,
      mailerlite_error: null,
      mailerlite_last_synced_at: context.consentedAt,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message.slice(0, 500) : 'Unknown error';

    await updateMailerLiteSyncStatus(env, identity.email, {
      mailerlite_status: 'sync_failed',
      mailerlite_subscriber_id: null,
      mailerlite_error: message,
      mailerlite_last_synced_at: context.consentedAt,
    });

    console.error('MailerLite sync failed', {
      email: identity.email,
      slug: context.slug,
      error: message,
    });
  }
}
