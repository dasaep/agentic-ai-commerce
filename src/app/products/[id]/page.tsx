'use client';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import Layout from '../../../components/Layout';
import { useCart } from '../../../lib/cartContext';
/**
 * Product detail page that displays information about a single product
 * and allows the user to add it to their cart.
 */

const fetcher = (url: string) => fetch(url).then(r => r.json());
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;


export default function ProductDetail() {
  const params = useParams<{ id: string }>();
  const { id } = params;
  const { data } = useSWR(id ? `${API_BASE_URL}/api/products/${id}` : null, fetcher);
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
