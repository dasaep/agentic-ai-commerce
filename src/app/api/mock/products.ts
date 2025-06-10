import { products } from './productsData';

export async function GET() {
  return Response.json(products);
}
