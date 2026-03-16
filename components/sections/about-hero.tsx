import Image from "next/image";
import { Container } from "@/components/ui/container";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[280px] sm:h-[340px] lg:h-[420px]">
        <Image
          src="/images/about/about-banner.jpg"
          alt="About banner"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <Container className="relative z-10 h-full">
          <div className="flex h-full items-center justify-center text-center">
            <h1 className="uppercase max-w-5xl text-6xl font-semibold tracking-[-0.04em] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] sm:text-6xl lg:text-8xl">
              ABOUT{" "}
              <span className="font-signature text-[#F7C948] text-8xl lg:text-[1.5em]">
                ME
              </span>
              .
            </h1>
          </div>
        </Container>
      </div>
    </section>
  );
}