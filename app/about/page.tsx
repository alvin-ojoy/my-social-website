import { Container } from '@/components/ui/container';

export default function AboutPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-white">About</h1>
          <p className="mt-6 leading-8 text-white/70">
            I create content around filmmaking, technology, desk setups, and creative workflows for solo creators.
          </p>
        </div>
      </Container>
    </section>
  );
}