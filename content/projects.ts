export type Project = {
  slug: string;
  title: string;
  category: 'YouTube' | 'Desk Setup' | 'Gear' | 'Creative Work';
  description: string;
  image: string;
  href?: string;
  badge?: string;
};

export const projects: Project[] = [
  {
    slug: 'filmmaking-workflow',
    title: 'Filmmaking Workflow',
    category: 'YouTube',
    description: 'Videos about shooting solo, camera setups, and making ordinary shots feel intentional.',
    image: '/images/projects/project-1.png',
    href: 'https://youtube.com/@alvinojoy',
    badge: 'Featured',
  },
  {
    slug: 'desk-setup-stories',
    title: 'Desk Setup Stories',
    category: 'Desk Setup',
    description: 'A curated look at the tools, lighting, and details that shape a better workspace.',
    image: '/images/projects/project-2.png',
    href: 'https://youtube.com/@alvinojoy',
  },
  {
    slug: 'tech-that-helps',
    title: 'Tech That Helps',
    category: 'Gear',
    description: 'Thoughtful coverage of creator gear, accessories, and workflow-friendly upgrades.',
    image: '/images/projects/project-3.png',
    href: 'https://youtube.com/@alvinojoy',
  },
  {
    slug: 'visual-experiments',
    title: 'Visual Experiments',
    category: 'Creative Work',
    description: 'Short cinematic concepts, B-roll practice, and storytelling built from everyday moments.',
    image: '/images/projects/project-4.png',
    href: 'https://youtube.com/@alvinojoy',
  },
];