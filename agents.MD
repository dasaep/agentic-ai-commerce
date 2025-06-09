# Agents.md

## 📁 Project Structure

```
my-ecommerce-app/
├── public/
├── src/
│   ├── app/                             # Next.js App Directory (app router)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── api/
│   │   │   ├── mock/
│   │   │   │   └── [...mockEndpoints].ts
│   │   │   ├── commercetools/
│   │   │   │   └── [...commercetoolsHandlers].ts
│   │   │   └── shopify/
│   │   │       └── [...shopifyHandlers].ts
│   ├── components/
│   ├── styles/
│   ├── utils/
│   ├── lib/
│   │   ├── adapters/
│   │   │   ├── commercetoolsAdapter.ts
│   │   │   └── shopifyAdapter.ts
│   │   └── apiClient.ts
│   └── types/
├── .eslintrc.js
├── .prettierrc
├── jest.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🔌 API Directory

### 1. **Mock API Endpoints** (`/app/api/mock`)
- Simulates product listings, user data, cart, checkout
- Useful for local development or fallback during API downtime

```ts
// /app/api/mock/products.ts
export async function GET() {
  return Response.json([
    { id: '1', name: 'Mock Shirt', price: 30 },
    { id: '2', name: 'Mock Pants', price: 50 }
  ]);
}
```

### 2. **CommerceTools Adapter** (`/lib/adapters/commercetoolsAdapter.ts`)
- Connects to commercetools APIs securely using API client credentials.
- Handles token refresh, retry mechanisms, and rate limiting.

```ts
export async function getCTProducts() {
  const token = await fetchCTToken();
  return await fetch(`${CT_API_URL}/products`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
```

### 3. **Shopify Adapter** (`/lib/adapters/shopifyAdapter.ts`)
- Handles Shopify Storefront API queries via GraphQL.
- Caches responses where appropriate.

```ts
export async function getShopifyProducts() {
  return await fetch(SHOPIFY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN,
    },
    body: JSON.stringify({ query: SHOPIFY_PRODUCT_QUERY }),
  });
}
```

---

## 🎯 Code Standards & Linting

### ESLint Configuration (`.eslintrc.js`)
- Based on Airbnb, Next.js, and Prettier

```js
module.exports = {
  extends: ['next/core-web-vitals', 'airbnb', 'prettier'],
  plugins: ['jsx-a11y', 'react-hooks', 'security'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-console': 'warn',
    'security/detect-object-injection': 'error',
  },
};
```

### Prettier (`.prettierrc`)
```json
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "printWidth": 100
}
```

---

## 🛡️ OWASP & Security Best Practices

- Sanitize all inputs client-side & server-side
- Escape all user-generated output
- Use HTTPS everywhere
- Store secrets in `.env.local` and never commit
- Use Helmet headers
- Avoid `eval()` and dynamic code execution
- Rate-limit APIs (especially login, register, password reset)
- Implement CSRF tokens for mutations
- Enforce CORS headers

---

## 📈 Google Core Web Vitals Benchmarks

| Metric                | Target        |
|----------------------|---------------|
| LCP (Largest Contentful Paint) | < 2.5s        |
| FID (First Input Delay)        | < 100ms       |
| CLS (Cumulative Layout Shift)  | < 0.1         |

### Performance Optimization Checklist:
- Image optimization via `next/image`
- Lazy loading components
- Code splitting via dynamic imports
- Use SWR or React Query for fetching
- Enable GZIP/Brotli compression
- Preload critical fonts (use `font-display: swap`)
- Avoid layout shifts by reserving dimensions for images & embeds

---

## ✅ Test Coverage & QA

### Tooling:
- `Jest` with `@testing-library/react`
- `Cypress` for e2e tests
- Coverage enforced via `jest.config.js`

### Commands:
```bash
npm run test
npm run test:coverage
npm run cypress
```

### Target Coverage:
| Area      | Coverage % |
|-----------|------------|
| Unit      | > 90%      |
| Integration | > 80%   |
| E2E       | > 70%      |

### Sample Jest Rule (jest.config.js):
```js
coverageThreshold: {
  global: {
    branches: 80,
    functions: 90,
    lines: 90,
    statements: 90,
  },
},
```

---

## 📦 Deployment Considerations

- Use `Vercel` or `Netlify` with environment variables securely injected
- Static content served via CDN
- Use Edge Functions for personalization
- Enable ISR (Incremental Static Regeneration) where applicable

---

## 🔐 Secrets Management
- Use `.env.local` for local dev
- CI/CD secrets injected via pipeline

```env
CT_API_URL=https://api.europe-west1.gcp.commercetools.com
CT_CLIENT_ID=xxx
CT_CLIENT_SECRET=xxx
SHOPIFY_URL=https://yourshop.myshopify.com/api/graphql
SHOPIFY_TOKEN=yyy
```

---

## 📚 Recommended Libraries
- `axios` or `fetch` (native) for HTTP
- `zod` or `yup` for schema validation
- `swr` or `react-query` for data fetching
- `clsx` for conditional classNames
- `next-seo` for SEO
- `helmet` or `next-secure-headers` for security

---

## 🧠 Final Thoughts
This architecture promotes separation of concerns, plug-and-play commerce integrations, adherence to modern performance and security standards, and high developer productivity. Each adapter can be independently enhanced for scalability (e.g., caching, batching, retries) while keeping mock support for reliable local testing.

For contributions, follow the commit convention, run tests locally, and document your API contracts via Swagger/OpenAPI or similar tools.

---

**Document Owner**: DevOps + Frontend Architect  
**Last Updated**: 2025-06-09
