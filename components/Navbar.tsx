"use client";

import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { useCart } from "./CartProvider";

export default function Navbar() {
  const { cart } = useCart();

  const itemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="border-b border-zinc-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Jagdamba Handlooms
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm hover:text-zinc-500">
            Home
          </Link>

          <Link href="/products" className="text-sm hover:text-zinc-500">
            Products
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/login">
            <User size={20} />
          </Link>

          <Link href="/cart" className="relative">
            <ShoppingCart size={20} />

            {itemCount > 0 && (
              <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-xs text-white">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}