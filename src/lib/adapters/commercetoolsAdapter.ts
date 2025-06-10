export async function getCTProducts() {
  const token = await fetchCTToken();
  return fetch(`${CT_API_URL}/products`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

async function fetchCTToken() {
  // TODO: implement token retrieval
  return '';
}
