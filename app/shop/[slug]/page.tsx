import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { DownloadButton } from "@/components/ui/download-button";
import {
  getProductBySlug,
  publishedProducts,
} from "@/content/products";
import { siteConfig } from "@/content/site";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return publishedProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: `Product Not Found | ${siteConfig.name}`,
    };
  }

  return {
    title: `${product.title} | ${siteConfig.name}`,
    description: product.description,
    alternates: {
      canonical: `/shop/${product.slug}`,
    },
    openGraph: {
      title: product.title,
      description: product.description,
      url: `${siteConfig.url}/shop/${product.slug}`,
      images: [
        {
          url: product.coverImage,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mb-8">
          <Link
            href="/shop"
            className="text-sm text-neutral-500 transition hover:text-neutral-900"
          >
            Back to Shop
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="flex min-h-[380px] items-center justify-center rounded-[32px] bg-[#fcfbfc] p-8 sm:min-h-[480px] sm:p-12">
            <div className="relative h-[260px] w-full max-w-[360px] sm:h-[360px] sm:max-w-[460px]">
              <Image
                src={product.coverImage}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 460px"
                className="object-contain"
              />
            </div>
          </div>

          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Digital Product
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-neutral-900 sm:text-5xl">
              {product.title}
            </h1>
            <p className="mt-5 text-base leading-8 text-neutral-600 sm:text-lg">
              {product.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700">
                {product.priceLabel}
              </span>
              <span className="rounded-full border border-[#f3d38b] bg-[#fff7df] px-4 py-2 text-sm text-[#8f6500]">
                Shareable link ready
              </span>
            </div>

            <div className="mt-8">
              <DownloadButton
                slug={product.slug}
                title={product.title}
                label="Download"
                className="w-full sm:w-auto sm:min-w-[170px]"
              />
            </div>

            <div className="mt-10 rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-neutral-900">
                Share this product
              </h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Use this page link anywhere you want to send people directly to
                this download.
              </p>
              <div className="mt-4 rounded-2xl bg-neutral-100 px-4 py-3 text-sm text-neutral-700">
                {siteConfig.url}/shop/{product.slug}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
