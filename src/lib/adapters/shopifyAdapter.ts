export async function getShopifyProducts() {
  return fetch(SHOPIFY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN,
    },
    body: JSON.stringify({ query: SHOPIFY_PRODUCT_QUERY }),
  });
}

const SHOPIFY_PRODUCT_QUERY = ``; // TODO: define query
