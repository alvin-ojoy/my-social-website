import { FeaturedResources } from '@/components/sections/featured-resources';
import { FeaturedWork } from '@/components/sections/featured-work';
import { Hero } from '@/components/sections/hero';
import { MinimalContactCta } from '@/components/sections/minimal-contact-cta';
import { SocialStrip } from '@/components/sections/social-strip';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialStrip />
      <FeaturedWork />
      <FeaturedResources />
      <MinimalContactCta />
    </>
  );
}