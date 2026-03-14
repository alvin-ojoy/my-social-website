import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name.').max(100),
  email: z.string().email('Please enter a valid email address.').max(200),
  inquiryType: z.enum(['Brand', 'General', 'Collaboration']),
  company: z.string().max(100).optional().or(z.literal('')),
  message: z.string().min(10, 'Please enter a longer message.').max(2000),
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;