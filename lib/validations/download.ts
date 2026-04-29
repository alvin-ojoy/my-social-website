import { z } from 'zod';

export const downloadFormSchema = z.object({
  name: z.string().min(2, 'Please enter your name.').max(100),
  email: z.string().email('Please enter a valid email address.').max(200),
  marketingConsent: z.boolean().refine((value) => value, {
    message: 'Please agree to receive email updates before downloading.',
  }),
  website: z.string().max(0).optional(),
});

export const downloadRequestSchema = downloadFormSchema.extend({
  slug: z.string().min(1).max(100),
});

export type DownloadFormInput = z.infer<typeof downloadFormSchema>;
export type DownloadRequestInput = z.infer<typeof downloadRequestSchema>;
