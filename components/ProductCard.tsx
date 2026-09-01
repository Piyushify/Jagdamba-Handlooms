"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "./CartProvider";

type Props = {
  product: Product;
};

export function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3 font-medium text-white transition hover:bg-zinc-800"
    >
      <ShoppingCart size={18} />
      Add to cart
    </button>
  );
}

export default function ProductCard({ product }: Props) {
  return (
    <article className="group">
      <Link href={`/products/${product.id}`}>
        <div className="flex aspect-square items-center justify-center rounded-2xl bg-zinc-100 text-7xl transition group-hover:bg-zinc-200">
          {product.emoji}
        </div>
      </Link>

      <div className="mt-4">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          {product.category}
        </p>

        <Link href={`/products/${product.id}`}>
          <h3 className="mt-1 font-semibold hover:underline">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 font-medium">
          ₹{product.price.toLocaleString("en-IN")}
        </p>
      </div>
    </article>
  );
}