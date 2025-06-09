import React from "react";
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Layout from '../../../components/Layout';
import { useCart } from '../../../lib/cartContext';
/**
 * Product detail page that displays information about a single product
 * and allows the user to add it to their cart.
 */

const fetcher = url => fetch(url).then(r => r.json());


export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(id ? `http://localhost:3001/api/products/${id}` : null, fetcher);
  const { addItem } = useCart();

  if (!data) return (
    <Layout>
      <p>Loading...</p>
    </Layout>
  );

  return (
    <Layout>
      <img
        src={data.image}
        alt={data.name}
        style={{ maxWidth: '400px', width: '100%', height: 'auto' }}
      />
      <h1>{data.name}</h1>
      <p>${data.price}</p>
      {data.color && <p>Color: {data.color}</p>}
      <p>{data.description}</p>
      <button onClick={() => addItem(data)}>Add to Cart</button>
    </Layout>
  );
}
