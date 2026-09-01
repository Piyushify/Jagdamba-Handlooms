"use client";

import Link from "next/link";
import CartItem from "@/components/CartItem";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { cart, total } = useCart();

  if (cart.length === 0) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="text-6xl">🛒</div>

        <h1 className="mt-6 text-3xl font-bold">Your cart is empty</h1>

        <p className="mt-3 text-zinc-500">
          Looks like you haven't added anything yet.
        </p>

        <Link
          href="/products"
          className="mt-8 inline-block rounded-full bg-black px-6 py-3 text-white"
        >
          Start shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-10 text-4xl font-bold">Shopping Cart</h1>

      <div className="grid gap-10 md:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <aside className="h-fit rounded-2xl bg-zinc-100 p-6">
          <h2 className="text-xl font-bold">Order summary</h2>

          <div className="mt-6 flex justify-between text-zinc-600">
            <span>Subtotal</span>
            <span>₹{total.toLocaleString("en-IN")}</span>
          </div>

          <div className="mt-3 flex justify-between text-zinc-600">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="my-6 border-t border-zinc-200" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₹{total.toLocaleString("en-IN")}</span>
          </div>

          <Link
            href="/checkout"
            className="mt-6 block rounded-full bg-black py-3 text-center font-medium text-white"
          >
            Checkout
          </Link>
        </aside>
      </div>
    </main>
  );
}