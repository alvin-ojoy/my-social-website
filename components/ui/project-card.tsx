import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/content/projects';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const content = (
    <article className="group relative overflow-hidden rounded-[30px] border border-neutral-200 bg-white text-white text-neutral-900 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index < 2}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/75 backdrop-blur-md">
              {project.category}
            </span>
            {project.badge ? (
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
                {project.badge}
              </span>
            ) : null}
          </div>

          <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] text-white/55 backdrop-blur-md">
            0{index + 1}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/72 sm:text-[15px]">
                {project.description}
              </p>
            </div>

            <div className="mt-1 rounded-full border border-white/15 bg-white/10 p-2 text-white/85 backdrop-blur-md transition group-hover:bg-white group-hover:text-black">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );

  if (project.href) {
    return (
      <Link href={project.href} target="_blank" rel="noreferrer" className="block">
        {content}
      </Link>
    );
  }

  return content;
}