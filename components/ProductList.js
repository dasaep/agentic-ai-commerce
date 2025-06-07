import React from "react";
import Link from 'next/link';
import styles from './ProductList.module.css';

export default function ProductList({ products }) {
  return (
    <div className={`container ${styles.grid}`}>
      {products.map(p => (
        <div key={p.id} className={styles.item}>
          <Link href={`/products/${p.id}`}>
            <img src={p.image} alt={p.name} className={styles.image} />
          </Link>
          <h3>{p.name}</h3>
          <p className={styles.price}>${p.price}</p>
          {p.color && (
            <p className={styles.color}>Color: {p.color}</p>
          )}
          <Link href={`/products/${p.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}
