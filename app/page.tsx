import { FeaturedResources } from '@/components/sections/featured-resources';
import { FeaturedWork } from '@/components/sections/featured-work';
import { VideoHero } from '@/components/sections/video-hero';
import { MinimalContactCta } from '@/components/sections/minimal-contact-cta';
import { SocialStrip } from '@/components/sections/social-strip';

export default function HomePage() {
  return (
    <>
      <VideoHero />
      <SocialStrip />
      <FeaturedWork />
      <FeaturedResources />
      <MinimalContactCta />
    </>
  );
}