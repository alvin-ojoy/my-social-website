import { z } from 'zod';

export const downloadRequestSchema = z.object({
  slug: z.string().min(1).max(100),
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  website: z.string().max(0).optional(),
});

export type DownloadRequestInput = z.infer<typeof downloadRequestSchema>;