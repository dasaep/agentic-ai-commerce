import React from "react";
import Link from 'next/link';

export default function ProductList({ products }) {
  return (
    <div className="container">
      {products.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <Link href={`/products/${p.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}
