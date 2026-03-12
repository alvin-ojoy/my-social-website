import { Container } from '@/components/ui/container';

const featuredProjects = [
  {
    title: 'Filmmaking Workflow',
    category: 'YouTube',
    description: 'Videos about shooting solo, camera setups, and making ordinary shots feel intentional.',
  },
  {
    title: 'Desk Setup Stories',
    category: 'Creator Space',
    description: 'A curated look at the tools, lighting, and details that shape a better workspace.',
  },
  {
    title: 'Tech That Helps',
    category: 'Gear',
    description: 'Thoughtful coverage of creator gear, accessories, and workflow-friendly upgrades.',
  },
  {
    title: 'Visual Experiments',
    category: 'Creative Work',
    description: 'Short cinematic concepts, B-roll practice, and storytelling built from everyday moments.',
  },
];

export function FeaturedWork() {
  return (
    <section className="py-10 sm:py-16">
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">Selected Work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
            A simple showcase for your videos and creative work
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05] sm:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-10 aspect-[4/3] w-full rounded-[22px] border border-white/8 bg-gradient-to-br from-white/[0.08] to-white/[0.02]" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">{project.category}</p>
                    <h3 className="mt-2 text-2xl font-medium tracking-[-0.02em] text-white">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-sm text-white/30">0{index + 1}</span>
                </div>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/65">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}