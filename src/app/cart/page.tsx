import Layout from '../../components/Layout';
import { useCart } from '../../lib/cartContext';
/**
 * Shopping cart page listing items added by the user.
 */

export default function Cart() {
  const { items } = useCart();
  return (
    <Layout>
      <h1>Cart</h1>
      {items.length ? (
        items.map((item, idx) => (
          <div key={idx}>
            {item.name} - ${item.price}
            {item.color && <span> - {item.color}</span>}
          </div>
        ))
      ) : (
        <p>Cart is empty</p>
      )}
    </Layout>
  );
}
