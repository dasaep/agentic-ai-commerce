import React from "react";
import '../styles/globals.css';
import { CartProvider } from '../lib/cartContext';
/**
 * Custom App component used by Next.js to initialize pages.
 * Wraps all pages with the `CartProvider`.
 */

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
