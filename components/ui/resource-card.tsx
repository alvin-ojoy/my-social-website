import { Resource } from '@/content/resources';
import { DownloadButton } from '@/components/ui/download-button';

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

      <div className="mt-6 flex items-center justify-between gap-4">
        <span className="text-sm text-neutral-500">{resource.priceLabel}</span>
        <DownloadButton slug={resource.slug} title={resource.title} />
      </div>
    </article>
  );
}