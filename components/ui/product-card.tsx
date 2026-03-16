import Image from "next/image";
import { Product } from "@/content/products";
import { DownloadButton } from "@/components/ui/download-button";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-[28px] bg-transparent p-2">
      <div className="flex items-center justify-center rounded-[28px] bg-[#fcfbfc] p-8 sm:p-10">
        <Image
          src={product.coverImage}
          alt={product.title}
          width={320}
          height={420}
          className="h-auto w-[180px] object-contain transition duration-500 group-hover:scale-[1.02] sm:w-[220px]"
        />
      </div>

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold uppercase tracking-[-0.02em] text-neutral-900">
            {product.title}
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-600">
            {product.description}
          </p>
          <p className="mt-3 text-base text-neutral-800">{product.priceLabel}</p>
        </div>

        <DownloadButton
          slug={product.slug}
          title={product.title}
          label="Get Product"
        />
      </div>
    </article>
  );
}