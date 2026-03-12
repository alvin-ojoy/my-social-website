import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function Hero() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/45">
            Filmmaking • Desk Setups • Creator Tools
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
            Create better videos.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
            I share filmmaking, tech, and creator-focused resources for people building content on their own.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/resources">Download Free Resources</Button>
            <Button href="/contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}