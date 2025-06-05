import React from "react";
import '../styles/globals.css';
import { CartProvider } from '../lib/cartContext';

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
