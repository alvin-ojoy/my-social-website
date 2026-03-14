export type Resource = {
  slug: string;
  title: string;
  description: string;
  category: 'Filmmaking' | 'Editing' | 'Desk Setup' | 'Productivity';
  priceLabel: 'Free';
  fileName: string;
  featured?: boolean;
  isPublished?: boolean;
};

export const resources: Resource[] = [
  {
    slug: 'solo-creator-shot-list',
    title: 'Solo Creator Shot List',
    description: 'A practical shot list for filming better videos when working alone.',
    category: 'Filmmaking',
    priceLabel: 'Free',
    fileName: 'solo-creator-shot-list.pdf',
    featured: true,
    isPublished: true,
  },
  {
    slug: 'editing-checklist',
    title: 'Editing Checklist',
    description: 'A simple repeatable checklist to help you finish edits faster and cleaner.',
    category: 'Editing',
    priceLabel: 'Free',
    fileName: 'editing-checklist.pdf',
    featured: true,
    isPublished: true,
  },
  {
    slug: 'desk-setup-guide',
    title: 'Desk Setup Guide',
    description: 'A compact setup guide for creators who want a clean and practical workspace.',
    category: 'Desk Setup',
    priceLabel: 'Free',
    fileName: 'desk-setup-guide.pdf',
    isPublished: true,
  },
];