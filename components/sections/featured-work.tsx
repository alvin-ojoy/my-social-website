import { Container } from '@/components/ui/container';
import { ProjectCard } from '@/components/ui/project-card';
import { projects } from '@/content/projects';
import { signatureFont } from "@/app/layout";

export function FeaturedWork() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Selected Work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-neutral-900 sm:text-4xl lg:text-5xl">
            A more cinematic showcase for your videos and creative work
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-600 sm:text-base">
            Use this section to feature your best videos, creator projects, desk setup stories, or gear-focused work.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}