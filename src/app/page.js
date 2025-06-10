import React from "react";
import useSWR from 'swr';
import ProductList from '../components/ProductList';
import Layout from '../components/Layout';
/**
 * Home page displaying a list of available products.
 */

const fetcher = url => fetch(url).then(r => r.json());
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const { data } = useSWR(`${API_BASE_URL}/api/products`, fetcher);
  return (
    <Layout>
      <h1>Store</h1>
      {data ? <ProductList products={data} /> : 'Loading...'}
    </Layout>
  );
}
