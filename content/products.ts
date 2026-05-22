export type Product = {
  slug: string;
  title: string;
  description: string;
  priceLabel: string;
  fileName: string;
  coverImage: string;
  isPublished?: boolean;
};

export const products: Product[] = [
  {
    slug: "cinematic-video-workflow-guide",
    title: "Cinematic Video Workflow Guide",
    description:
      "A one-page roadmap for planning, shooting, and editing more intentional cinematic videos.",
    priceLabel: "Free",
    fileName: "cinematic-video-workflow-guide.pdf",
    coverImage: "/images/products/cinematic-video-workflow-guide.png",
    isPublished: true,
  },
  {
    slug: "vertical-overlay-IG",
    title: "Instagram Reel Safezone Overlay",
    description:
      "Easy to use safezone PNG overlay for your vertical videos for any social media platform.",
    priceLabel: "Free",
    fileName: "Free_IG_Safe_Zone_Overlay_2026.zip",
    coverImage: "/images/products/ig-safezone-overlay-2026.png",
    isPublished: true,
  },
];
