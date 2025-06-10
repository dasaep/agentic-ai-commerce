import { products } from '../../productsData';
import { NextRequest } from 'next/server';

export function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const product = products.find(p => p.id === Number(params.id));
  if (product) {
    return Response.json(product);
  }
  return new Response(JSON.stringify({ message: 'Product not found' }), {
    status: 404,
  });
}
