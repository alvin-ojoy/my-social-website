import { Container } from "@/components/ui/container";
import { ResourceCard } from "@/components/ui/resource-card";
import { resources } from "@/content/resources";

export default function ResourcesPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
            Resources
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-neutral-900 sm:text-5xl">
            Free creator tools and downloads
          </h1>

          <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg">
            Download free resources designed to help you film, edit, and stay
            organized.
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