"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function CheckoutPage() {
  const { cart, total } = useCart();

  if (cart.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-3xl font-bold">Nothing to checkout</h1>

        <Link
          href="/products"
          className="mt-6 inline-block text-sm underline"
        >
          Continue shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-10 text-4xl font-bold">Checkout</h1>

      <div className="grid gap-10 md:grid-cols-[1fr_320px]">
        <form className="space-y-6">
          <div>
            <h2 className="mb-4 text-xl font-bold">Contact information</h2>

            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
              required
            />
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold">Shipping address</h2>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
                required
              />

              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
                required
              />

              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="City"
                  className="rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
                  required
                />

                <input
                  type="text"
                  placeholder="PIN code"
                  className="rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-black py-4 font-medium text-white"
          >
            Place order
          </button>
        </form>

        <aside className="h-fit rounded-2xl bg-zinc-100 p-6">
          <h2 className="text-xl font-bold">Your order</h2>

          <div className="mt-6 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>
                  {item.name} × {item.quantity}
                </span>

                <span>
                  ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </span>
              </div>
            ))}
          </div>

          <div className="my-6 border-t border-zinc-200" />

          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>₹{total.toLocaleString("en-IN")}</span>
          </div>
        </aside>
      </div>
    </main>
  );
}