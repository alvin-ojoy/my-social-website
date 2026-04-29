'use client';

import { useState } from 'react';
import { DownloadModal } from '@/components/ui/download-modal';
import type { DownloadFormInput } from '@/lib/validations/download';
import { cn } from '@/lib/utils';

type Props = {
  slug: string;
  title: string;
  label?: string;
  className?: string;
};

export function DownloadButton({
  slug,
  title,
  label = 'Download',
  className,
}: Props) {
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
        className={cn(
          "inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white shadow-[0_14px_35px_rgba(0,0,0,0.14)] transition hover:bg-[#F7C948] hover:text-neutral-950",
          className
        )}
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
