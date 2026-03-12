import { Container } from '@/components/ui/container';

export default function ContactPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold text-white">Contact</h1>
          <p className="mt-4 leading-7 text-white/70">
            For partnerships, collaborations, and general inquiries, send a message through the form that will be added
            next.
          </p>
        </div>
      </Container>
    </section>
  );
}