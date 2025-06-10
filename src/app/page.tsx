import useSWR from 'swr';
import ProductList from '../components/ProductList';
import Layout from '../components/Layout';
/**
 * Home page displaying a list of available products.
 */

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function Home() {
  const { data } = useSWR('/api/mock/products', fetcher);
  return (
    <Layout>
      <h1>Store</h1>
      {data ? <ProductList products={data} /> : 'Loading...'}
    </Layout>
  );
}
