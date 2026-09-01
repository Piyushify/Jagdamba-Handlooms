import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10">
        <p className="text-sm text-zinc-500">Browse</p>
        <h1 className="text-4xl font-bold">All Products</h1>
      </div>

      <ProductGrid products={products} />
    </main>
  );
}