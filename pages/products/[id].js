import React from "react";
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Layout from '../../components/Layout';
import { useCart } from '../../lib/cartContext';

const fetcher = url => fetch(url).then(r => r.json());


export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(id ? `http://localhost:3001/api/products/${id}` : null, fetcher);
  const { addItem } = useCart();

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Nav />
      <div className="container">
        <img src={data.image} alt={data.name} style={{ maxWidth: '400px', width: '100%', height: 'auto' }} />
        <h1>{data.name}</h1>
        <p>${data.price}</p>
        <p>{data.description}</p>
        <button onClick={() => addItem(data)}>Add to Cart</button>
      </div>
    </div>
  );
}
