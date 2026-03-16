import { AboutHero } from "@/components/sections/about-hero";
import { Container } from "@/components/ui/container";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <section className="py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              About
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-neutral-900 sm:text-5xl">
              <span className="font-signature text-[#F7C948] text-6xl lg:text-6xl sm:text-4xl">Filmmaking,</span> tech, and thoughtful creator systems.
            </h1>

            <p className="mt-6 text-base leading-8 text-neutral-600 sm:text-lg">
              I create content around filmmaking, desk setups, tech, and better
              workflows for solo creators. This site is where I share my work,
              free resources, and ways to get in touch for collaborations.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-neutral-900">
                  What I make
                </h2>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Videos about cameras, creator workflows, desk setups, gear, and
                  making simple moments feel more cinematic.
                </p>
              </div>

              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-neutral-900">
                  Why this site exists
                </h2>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  To give viewers a clean place to find my videos, download free
                  resources, and connect for brand work or creative projects.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
    
  );
}