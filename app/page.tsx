import { FeaturedResources } from '@/components/sections/featured-resources';
import { BrandCarousel } from '@/components/sections/brand-carousel';
import { VideoHero } from '@/components/sections/video-hero';
import { MinimalContactCta } from '@/components/sections/minimal-contact-cta';
import { SocialStrip } from '@/components/sections/social-strip';

export default function HomePage() {
  return (
    <>
      <VideoHero />
      <BrandCarousel />
      <SocialStrip />
      <FeaturedResources />
      <MinimalContactCta />
    </>
  );
}