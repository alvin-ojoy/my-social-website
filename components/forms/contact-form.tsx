'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactInput } from '@/lib/validations/contact';

export function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      inquiryType: 'Brand',
      company: '',
      message: '',
      website: '',
    },
  });

  async function onSubmit(values: ContactInput) {
    setServerError(null);
    setSuccess(false);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (!response.ok) {
      setServerError(data.error || 'Unable to send message.');
      return;
    }

    setSuccess(true);
    reset();
  }

  return (
    <div className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.28em] text-neutral-400">Contact Form</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-neutral-900">
          Send a message
        </h2>
        <p className="mt-3 text-sm leading-6 text-neutral-600">
          For brand partnerships, collaborations, creator projects, or general inquiries.
        </p>
      </div>

      {success ? (
        <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          Thanks — your message was sent successfully.
        </div>
      ) : null}

      {serverError ? (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverError}
        </div>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-neutral-800">
              Name
            </label>
            <input
              id="contact-name"
              {...register('name')}
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition focus:border-neutral-900"
              placeholder="Your name"
            />
            {errors.name ? <p className="mt-2 text-xs text-red-600">{errors.name.message}</p> : null}
          </div>

          <div>
            <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-neutral-800">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              {...register('email')}
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition focus:border-neutral-900"
              placeholder="you@example.com"
            />
            {errors.email ? <p className="mt-2 text-xs text-red-600">{errors.email.message}</p> : null}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-inquiryType" className="mb-2 block text-sm font-medium text-neutral-800">
              Inquiry type
            </label>
            <select
              id="contact-inquiryType"
              {...register('inquiryType')}
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition focus:border-neutral-900"
            >
              <option value="Brand">Brand</option>
              <option value="Collaboration">Collaboration</option>
              <option value="General">General</option>
            </select>
            {errors.inquiryType ? <p className="mt-2 text-xs text-red-600">{errors.inquiryType.message}</p> : null}
          </div>

          <div>
            <label htmlFor="contact-company" className="mb-2 block text-sm font-medium text-neutral-800">
              Company
            </label>
            <input
              id="contact-company"
              {...register('company')}
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition focus:border-neutral-900"
              placeholder="Optional"
            />
            {errors.company ? <p className="mt-2 text-xs text-red-600">{errors.company.message}</p> : null}
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-neutral-800">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={6}
            {...register('message')}
            className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition focus:border-neutral-900"
            placeholder="Tell me about your project, brand, or inquiry."
          />
          {errors.message ? <p className="mt-2 text-xs text-red-600">{errors.message.message}</p> : null}
        </div>

        <input {...register('website')} tabIndex={-1} autoComplete="off" className="hidden" />

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}