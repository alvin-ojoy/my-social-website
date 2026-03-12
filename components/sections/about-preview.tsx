import { Container } from '@/components/ui/container';

export function AboutPreview() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">About</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Built for a creator-first brand</h2>
          <p className="mt-4 max-w-3xl text-white/70">
            This site is designed to showcase your content, send viewers to your social platforms, offer helpful free
            downloads, and make it easy for brands to contact you.
          </p>
        </div>
      </Container>
    </section>
  );
}