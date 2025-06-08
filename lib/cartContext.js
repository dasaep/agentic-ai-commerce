import React, { createContext, useContext, useState } from 'react';
/**
 * React context providing a simple in-memory shopping cart.
 * `CartProvider` wraps pages and exposes `addItem` and `items` via `useCart`.
 */
const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const addItem = item => setItems([...items, item]);
  const value = { items, addItem };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
