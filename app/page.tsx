import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main>
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-400">
            New Collection
          </p>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
            Everything you need.
            <br />
            Nothing you don't.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-zinc-400">
            Discover carefully selected products designed for modern living.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-zinc-200"
          >
            Shop now →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm text-zinc-500">Our picks</p>
            <h2 className="text-3xl font-bold">Featured products</h2>
          </div>

          <Link
            href="/products"
            className="text-sm font-medium hover:underline"
          >
            View all →
          </Link>
        </div>

        <ProductGrid products={featuredProducts} />
      </section>
    </main>
  );
}