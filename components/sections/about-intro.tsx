import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

export function AboutIntro() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              About Alvin
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-neutral-900 sm:text-4xl lg:text-5xl">
              Content creation, tech reviews, and solo <span className='font-signature text-[#F7C948] text-6xl'>filmmaking</span>.
            </h2>

            <p className="mt-6 text-base leading-8 text-neutral-600 sm:text-lg">
              I’m Alvin — a solo content creator sharing practical ways to make
              better videos, build intentional setups, and create more with
              simpler workflows.
            </p>

            <p className="mt-4 text-base leading-8 text-neutral-600 sm:text-lg">
              On my channel, I break down real camera setups, shooting
              techniques, editing choices, and creator tools that make content
              creation a little bit easier.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="https://www.youtube.com/@alvinojoy"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Watch on YouTube
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
              >
                More About Me
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="group overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/profile2.jpg"
                alt="Alvin Ojoy"
                width={600}
                height={700}
                sizes="(min-width: 1024px) 400px, 100vw"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}