"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { CartProduct, useCart } from "./CartProvider";

type Props = {
  item: CartProduct;
};

export default function CartItem({ item }: Props) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 rounded-2xl border border-zinc-200 p-4">
      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-4xl">
        {item.emoji}
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          <h3 className="font-semibold">{item.name}</h3>

          <p className="text-sm text-zinc-500">
            ₹{item.price.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center rounded-full border border-zinc-200">
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="p-2"
            >
              <Minus size={15} />
            </button>

            <span className="px-2 text-sm">{item.quantity}</span>

            <button
              onClick={() => increaseQuantity(item.id)}
              className="p-2"
            >
              <Plus size={15} />
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-zinc-400 hover:text-red-500"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}