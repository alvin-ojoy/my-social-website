import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function MinimalContactCta() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Contact</p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-neutral-900 sm:text-5xl">
            Let’s create something thoughtful.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600">
            For partnerships, brand collaborations, creator projects, or general inquiries,
            get in touch through the contact page.
          </p>

          <div className="mt-8">
            <Button href="/contact">Start a Conversation</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}