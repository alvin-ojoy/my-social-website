import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  inquiryType: z.enum(['Brand', 'General', 'Collaboration']),
  company: z.string().max(100).optional().or(z.literal('')),
  message: z.string().min(10).max(2000),
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;