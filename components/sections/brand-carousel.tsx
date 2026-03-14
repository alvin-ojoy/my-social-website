import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { brands } from '@/content/brands';
import { signatureFont } from '@/app/layout';

const loopedBrands = [...brands, ...brands];

export function BrandCarousel() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Past Partnerships</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-neutral-900 sm:text-4xl lg:text-5xl">
            Brands I’ve <span className={`${signatureFont.className} text-[#F7C948] text-6xl`}>worked</span> with
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-600 sm:text-base">
            A few of the brands I’ve collaborated with across YouTube, Instagram, and Tiktok campaigns.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-neutral-200 bg-white py-6 shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#fafafa] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#fafafa] to-transparent" />

          <div className="flex w-max animate-[brand-scroll_30s_linear_infinite] gap-4 px-4 [will-change:transform] hover:[animation-play-state:paused]">
            {loopedBrands.map((brand, index) => {
              const card = (
                <div className="flex h-24 w-[200px] shrink-0 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 px-6 transition hover:bg-white">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={120}
                    height={40}
                    className="h-20 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              );

              return brand.href ? (
                <Link
                  key={`${brand.name}-${index}`}
                  href={brand.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={brand.name}
                >
                  {card}
                </Link>
              ) : (
                <div key={`${brand.name}-${index}`} aria-label={brand.name}>
                  {card}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}