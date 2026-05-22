import Image from "next/image";
import Link from "next/link";
import { Product } from "@/content/products";
import { DownloadButton } from "@/components/ui/download-button";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-[28px] bg-transparent">
      <Link
        href={`/shop/${product.slug}`}
        className="block"
      >
        <div className="flex min-h-[360px] items-center justify-center rounded-[28px] bg-[#fcfbfc] p-8 sm:min-h-[420px] sm:p-10">
          <div className="relative h-[240px] w-full max-w-[320px] sm:h-[300px] sm:max-w-[380px]">
            <Image
              src={product.coverImage}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 320px, 380px"
              className="object-contain transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </Link>

      <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <Link href={`/shop/${product.slug}`} className="block">
            <h2 className="text-xl font-semibold uppercase tracking-[-0.02em] text-neutral-900 transition hover:text-neutral-700">
              {product.title}
            </h2>
          </Link>
          <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-600">
            {product.description}
          </p>
          <p className="mt-3 text-base text-neutral-800">{product.priceLabel}</p>
        </div>

        <DownloadButton
          slug={product.slug}
          title={product.title}
          label="Download"
          className="w-full sm:w-auto sm:min-w-[152px]"
        />
      </div>
    </article>
  );
}
