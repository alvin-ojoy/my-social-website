import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function ContactCta() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 sm:p-10">
          <h2 className="text-3xl font-semibold text-white">Let’s work together</h2>
          <p className="mt-4 max-w-2xl text-white/70">
            For brand partnerships, collaborations, or general inquiries, reach out through the contact page.
          </p>
          <div className="mt-8">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}