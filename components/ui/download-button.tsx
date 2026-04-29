'use client';

import { useState } from 'react';
import { DownloadModal } from '@/components/ui/download-modal';
import type { DownloadFormInput } from '@/lib/validations/download';

type Props = {
  slug: string;
  title: string;
  label?: string;
};

export function DownloadButton({ slug, title, label = 'Download' }: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDownload(values: DownloadFormInput) {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slug,
          name: values.name,
          email: values.email,
          marketingConsent: values.marketingConsent,
          website: values.website || '',
        }),
      });

      let data: { error?: string; url?: string } | undefined;

      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(
          text.startsWith("<!DOCTYPE")
          ? "The download endpoint returned an HTML error page."
          : "Download failed."
        );
      }

      if (!response.ok || !data?.url) {
        throw new Error(data?.error || "Download failed.");
      } 

      setOpen(false);
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Download failed.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-xl border border-neutral-300 px-4 py-2 text-sm text-neutral-900 transition hover:bg-neutral-100"
      >
        {label}
      </button>

      <DownloadModal
        open={open}
        resourceTitle={title}
        loading={loading}
        error={error}
        onClose={() => {
          if (!loading) {
            setOpen(false);
            setError(null);
          }
        }}
        onSubmit={handleDownload}
      />
    </>
  );
}
