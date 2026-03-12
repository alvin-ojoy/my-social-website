import { Resource } from '@/content/resources';

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <div className="mb-3 text-xs uppercase tracking-[0.2em] text-white/50">{resource.category}</div>
      <h3 className="text-xl font-semibold text-white">{resource.title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{resource.description}</p>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-white/60">{resource.priceLabel}</span>
        <a
          href={`/api/download?slug=${resource.slug}`}
          className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white transition hover:bg-white/10"
        >
          Download
        </a>
      </div>
    </article>
  );
}