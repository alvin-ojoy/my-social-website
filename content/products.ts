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
    slug: "sony-slog3-free-lut",
    title: "Sony S-Log3 Free LUT",
    description:
      "A clean starting-point LUT for Sony S-Log3 footage, designed for quick cinematic conversion and easy grading.",
    priceLabel: "Free",
    fileName: "AO-S-LOG3-FREE.cube.zip",
    coverImage: "/images/products/sony-slog3-free-lut.png",
    isPublished: true,
  },{
    slug: "vertical-overlay-all-socials",
    title: "Vertical Safezones (All Socials)",
    description:
      "Easy to use safezone PNG overlay for your vertical videos for any social media platform.",
    priceLabel: "Free",
    fileName: "Free_Socials_Overlay_AO_strong.png.zip",
    coverImage: "/images/products/free-overlay.png",
    isPublished: true,
  },
];