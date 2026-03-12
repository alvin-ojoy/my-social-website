import { Container } from '@/components/ui/container';
import { ResourceCard } from '@/components/ui/resource-card';
import { resources } from '@/content/resources';

export default function ResourcesPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-10 max-w-3xl">
          <h1 className="text-4xl font-semibold text-white">Free Resources</h1>
          <p className="mt-4 leading-7 text-white/70">
            Download free creator resources designed to help you film, edit, and stay organized.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </Container>
    </section>
  );
}