'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  downloadFormSchema,
  type DownloadFormInput,
} from '@/lib/validations/download';

type Props = {
  open: boolean;
  resourceTitle: string;
  loading: boolean;
  error: string | null;
  onClose: () => void;
  onSubmit: (values: DownloadFormInput) => Promise<void>;
};

export function DownloadModal({
  open,
  resourceTitle,
  loading,
  error,
  onClose,
  onSubmit,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DownloadFormInput>({
    resolver: zodResolver(downloadFormSchema),
    defaultValues: {
      name: '',
      email: '',
      marketingConsent: false,
      website: '',
    },
  });

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    if (open) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close modal overlay"
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-md rounded-[28px] border border-neutral-200 bg-white p-6 shadow-2xl sm:p-7">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.28em] text-neutral-400">Free Download</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-neutral-900">
            Get {resourceTitle}
          </h3>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            Enter your name and email to access this free resource.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="download-name" className="mb-2 block text-sm font-medium text-neutral-800">
              Name
            </label>
            <input
              id="download-name"
              {...register('name')}
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition focus:border-neutral-900"
              placeholder="Your name"
            />
            {errors.name ? <p className="mt-2 text-xs text-red-600">{errors.name.message}</p> : null}
          </div>

          <div>
            <label htmlFor="download-email" className="mb-2 block text-sm font-medium text-neutral-800">
              Email
            </label>
            <input
              id="download-email"
              type="email"
              {...register('email')}
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition focus:border-neutral-900"
              placeholder="you@example.com"
            />
            {errors.email ? <p className="mt-2 text-xs text-red-600">{errors.email.message}</p> : null}
          </div>

          <input
            {...register('website')}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <div>
            <label className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm leading-6 text-neutral-700">
              <input
                type="checkbox"
                {...register('marketingConsent')}
                className="mt-1 h-4 w-4 rounded border-neutral-300 text-black"
              />
              <span>
                I agree to receive occasional emails from Alvin Ojoy about new
                downloads, creator resources, and product updates. You can
                unsubscribe anytime.
              </span>
            </label>
            {errors.marketingConsent ? (
              <p className="mt-2 text-xs text-red-600">
                {errors.marketingConsent.message}
              </p>
            ) : null}
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Preparing download...' : 'Continue to Download'}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
