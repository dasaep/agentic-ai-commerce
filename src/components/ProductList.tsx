import Link from 'next/link';
import styles from './ProductList.module.css';
/**
 * Renders a responsive grid of products with links to detail pages.
 * Each item shows an image, name, price and optional color.
 */

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  color?: string;
}

export default function ProductList({ products }: { products: Product[] }) {
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
