create extension if not exists pgcrypto;

create table if not exists public.download_leads (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text,
  first_download_slug text,
  first_downloaded_at timestamptz,
  last_download_slug text,
  last_downloaded_at timestamptz,
  download_count integer not null default 0,
  consented_to_marketing boolean not null default false,
  consented_at timestamptz,
  consent_ip text,
  last_user_agent text,
  mailerlite_subscriber_id text,
  mailerlite_status text,
  mailerlite_error text,
  mailerlite_last_synced_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.download_events (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text,
  slug text not null,
  consented_to_marketing boolean not null default false,
  consented_at timestamptz,
  ip_address text,
  user_agent text,
  source text,
  created_at timestamptz not null default now()
);

create index if not exists download_events_email_idx
  on public.download_events (email);

create index if not exists download_events_slug_idx
  on public.download_events (slug);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists download_leads_set_updated_at on public.download_leads;

create trigger download_leads_set_updated_at
before update on public.download_leads
for each row
execute function public.set_updated_at();

alter table public.download_leads enable row level security;
alter table public.download_events enable row level security;

revoke all on public.download_leads from anon, authenticated;
revoke all on public.download_events from anon, authenticated;
