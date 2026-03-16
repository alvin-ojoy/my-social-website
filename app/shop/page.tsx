import { ShopHero } from "@/components/sections/shop-hero";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/ui/product-card";
import { products } from "@/content/products";

export default function ShopPage() {
  return (
    <>
      <ShopHero />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Digital Products
            </p>
            {/*<h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-neutral-900 sm:text-4xl">
              Creator tools built from my real workflow
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">
              Download practical digital products for filming, editing, and building better creator systems.
            </p>*/}
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {products
              .filter((product) => product.isPublished)
              .map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
          </div>
        </Container>
      </section>
    </>
  );
}