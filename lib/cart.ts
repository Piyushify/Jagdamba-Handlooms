import { CartProduct } from "@/components/CartProvider";

export function getCartTotal(cart: CartProduct[]) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function getCartItemCount(cart: CartProduct[]) {
  return cart.reduce((total, item) => total + item.quantity, 0);
}
