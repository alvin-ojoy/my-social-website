import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { products } from "@/content/products";
import { DownloadButton } from "@/components/ui/download-button";

export function FeaturedProducts() {
  const featured = products.filter((product) => product.isPublished);

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      <Image
        src="/images/backgrounds/featured-product.jpg"
        alt=""
        fill
        className="object-cover opacity-20"
        priority
      />
        
      {/* overlay */}
      <div className="absolute inset-0 bg-white/10" />

      <Container className="relative z-10">
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Shop
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-neutral-900 sm:text-4xl lg:text-5xl">
              Digital products <span className="font-signature text-[#F7C948] text-5xl">built</span> from my real workflow
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">
              Practical creator tools for filming, editing, and building better
              systems.
            </p>
          </div>

          <Link
            href="/shop"
            className="hidden items-center justify-center rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100 sm:inline-flex sm:min-w-[144px]"
          >
            Visit Shop
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {featured.map((product) => (
            <article key={product.slug} className="group">
              <div className="flex items-center justify-center rounded-[28px] bg-[#fcfbfc] p-8 sm:p-10">
                <Image
                  src={product.coverImage}
                  alt={product.title}
                  width={320}
                  height={420}
                  className="h-auto w-[180px] object-contain transition duration-500 group-hover:scale-[1.02] sm:w-[220px]"
                />
              </div>

              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold uppercase tracking-[-0.02em] text-neutral-900">
                    {product.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-600">
                    {product.description}
                  </p>
                  <p className="mt-3 text-base text-neutral-800">
                    {product.priceLabel}
                  </p>
                </div>

                <DownloadButton
                  slug={product.slug}
                  title={product.title}
                  label="Download"
                  className="w-full sm:w-auto sm:min-w-[152px]"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Link
            href="/shop"
            className="inline-flex w-full items-center justify-center rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
          >
            Visit Shop
          </Link>
        </div>
      </Container>
    </section>
  );
}
