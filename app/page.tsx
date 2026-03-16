import { AboutIntro } from '@/components/sections/about-intro';
import { BrandCarousel } from '@/components/sections/brand-carousel';
import { FeaturedProducts } from "@/components/sections/featured-products";
import { VideoHero } from '@/components/sections/video-hero';
import { MinimalContactCta } from '@/components/sections/minimal-contact-cta';
import { SocialStrip } from '@/components/sections/social-strip';

export default function HomePage() {
  return (
    <>
      <VideoHero />
      <AboutIntro />
      <BrandCarousel />
      <SocialStrip />
      <FeaturedProducts />
      <MinimalContactCta />
    </>
  );
}