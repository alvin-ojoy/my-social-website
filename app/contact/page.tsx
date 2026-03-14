import { Container } from '@/components/ui/container';
import { ContactForm } from '@/components/forms/contact-form';

export default function ContactPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-neutral-900 sm:text-5xl">
            Let’s connect.
          </h1>
          <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg">
            For partnerships, collaborations, creator projects, or general inquiries, send a message below.
          </p>
        </div>

        <div className="max-w-3xl">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}