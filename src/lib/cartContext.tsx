'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
/**
 * React context providing a simple in-memory shopping cart.
 * `CartProvider` wraps pages and exposes `addItem` and `items` via `useCart`.
 */
interface CartItem {
  [key: string]: unknown;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: CartItem) => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const addItem = (item: CartItem) => setItems([...items, item]);
  const value: CartContextValue = { items, addItem };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('CartProvider missing');
  return ctx;
};
