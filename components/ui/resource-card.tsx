import { Resource } from '@/content/resources';

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-400">
        {resource.category}
      </div>

      <h3 className="text-xl font-semibold text-neutral-900">{resource.title}</h3>

      <p className="mt-3 text-sm leading-6 text-neutral-600">
        {resource.description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-neutral-500">{resource.priceLabel}</span>

        <a
          href={`/api/download?slug=${resource.slug}`}
          className="rounded-xl border border-neutral-300 px-4 py-2 text-sm text-neutral-900 transition hover:bg-neutral-100"
        >
          Download
        </a>
      </div>
    </article>
  );
}