# Architecture Overview

This document describes the high-level architecture for the Agentic AI Commerce application. It illustrates how the frontend and backend interact and highlights important source files.

## System Context

```mermaid
graph LR
    subgraph Browser
        B[User Browser]
    end

    subgraph Frontend
        FE[Next.js + React<br/>pages/*]
        Cart[Cart Context]
        FE -- uses --> Cart
    end

    subgraph Backend
        API[Next.js API Routes]
        Data[(In-memory product list)]
        API -- reads --> Data
    end

    B -- HTTP requests --> FE
    FE -- SWR fetch --> API
```

The Next.js frontend listens on port `3000` and its API routes under `/pages/api` provide the mock API. Cart state is maintained client side in `lib/cartContext.js` while data is fetched from the API using SWR.

### Key Components

#### API Route (`src/app/api/products/route.js`)
```javascript
export async function GET() {
  return Response.json(products);
}
```

#### Home Page (`pages/index.js`)
```javascript
const fetcher = url => fetch(url).then(r => r.json());

export default function Home() {
  const { data } = useSWR('/api/mock/products', fetcher);
  return (
    <Layout>
      <h1>Store</h1>
      {data ? <ProductList products={data} /> : 'Loading...'}
    </Layout>
  );
}
```

#### Product Detail (`pages/products/[id].js`)
```javascript
const fetcher = url => fetch(url).then(r => r.json());

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(id ? `/api/mock/products/${id}` : null, fetcher);
  const { addItem } = useCart();
  // ...render product and add-to-cart button...
}
```

#### Cart Context (`lib/cartContext.js`)
```javascript
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const addItem = item => setItems([...items, item]);
  const value = { items, addItem };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
```

## Sequence: Adding a Product to the Cart

```mermaid
sequenceDiagram
    participant U as User Browser
    participant FE as Next.js Page
    participant API as Next.js API Route
    participant D as Product Data

    U->>FE: Request /products/1
    FE->>API: GET /api/products/1
    API->>D: find product by id
    D-->>API: product
    API-->>FE: JSON response
    FE-->>U: Render detail view
    U->>FE: Click "Add to Cart"
    FE->>FE: useCart.addItem(product)
```

When a user views a product detail page, the page fetches the product from the Next.js API route and renders it. Selecting **Add to Cart** calls `useCart.addItem`, storing the product in React context.
