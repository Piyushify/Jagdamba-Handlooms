import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { AddToCartButton } from "@/components/ProductCard";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = products.find((product) => product.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <Link
        href="/products"
        className="mb-8 inline-block text-sm text-zinc-500 hover:text-black"
      >
        ← Back to products
      </Link>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="flex aspect-square items-center justify-center rounded-3xl bg-zinc-100 text-8xl">
          {product.emoji}
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm uppercase tracking-widest text-zinc-500">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold">{product.name}</h1>

          <p className="mt-5 text-2xl font-semibold">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <p className="mt-6 leading-7 text-zinc-600">
            {product.description}
          </p>

          <AddToCartButton product={product} />
        </div>
      </div>
    </main>
  );
}