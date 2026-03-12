import { resources } from '@/content/resources';
import { Container } from '@/components/ui/container';
import { ResourceCard } from '@/components/ui/resource-card';

export function FeaturedResources() {
  const featured = resources.filter((item) => item.featured);

  return (
    <section className="py-20">
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">Free Tools</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Resources built from my real workflow</h2>
          <p className="mt-4 text-white/70">
            Grab free creator downloads designed to help you shoot, edit, and organize better.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </Container>
    </section>
  );
}