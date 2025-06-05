import React from "react";
import Nav from '../components/Nav';
import { useCart } from '../lib/cartContext';

export default function Cart() {
  const { items } = useCart();
  return (
    <div>
      <Nav />
      <h1>Cart</h1>
      {items.length ? (
        items.map((item, idx) => (
          <div key={idx}>
            {item.name} - ${item.price}
          </div>
        ))
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
}
