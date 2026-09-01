export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  emoji: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "wireless-headphones",
    name: "Wireless Headphones",
    price: 4999,
    category: "Audio",
    emoji: "🎧",
    description:
      "Comfortable wireless headphones with immersive sound and long battery life.",
  },
  {
    id: "smart-watch",
    name: "Smart Watch",
    price: 6999,
    category: "Wearables",
    emoji: "⌚",
    description:
      "A modern smartwatch for tracking your day, notifications and everyday activity.",
  },
  {
    id: "mechanical-keyboard",
    name: "Mechanical Keyboard",
    price: 4499,
    category: "Accessories",
    emoji: "⌨️",
    description:
      "A compact mechanical keyboard designed for comfortable typing and productivity.",
  },
  {
    id: "desk-lamp",
    name: "Minimal Desk Lamp",
    price: 2499,
    category: "Home",
    emoji: "💡",
    description:
      "A clean and minimal desk lamp that fits perfectly into a modern workspace.",
  },
  {
    id: "backpack",
    name: "Everyday Backpack",
    price: 2999,
    category: "Lifestyle",
    emoji: "🎒",
    description:
      "A lightweight everyday backpack with plenty of space for your essentials.",
  },
  {
    id: "coffee-maker",
    name: "Coffee Maker",
    price: 5499,
    category: "Home",
    emoji: "☕",
    description: "A simple coffee maker for making great coffee at home.",
  },
  {
    id: "camera",
    name: "Compact Camera",
    price: 18999,
    category: "Electronics",
    emoji: "📷",
    description:
      "A compact camera for capturing everyday moments with excellent image quality.",
  },
  {
    id: "sneakers",
    name: "Everyday Sneakers",
    price: 3999,
    category: "Fashion",
    emoji: "👟",
    description:
      "Comfortable everyday sneakers designed for walking and casual use.",
  },
];
