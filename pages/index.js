import React from "react";
import useSWR from 'swr';
import ProductList from '../components/ProductList';
import Layout from '../components/Layout';

const fetcher = url => fetch(url).then(r => r.json());

export default function Home() {
  const { data } = useSWR('http://localhost:3001/api/products', fetcher);
  return (
    <Layout>
      <h1>Store</h1>
      {data ? <ProductList products={data} /> : 'Loading...'}
    </Layout>
  );
}
