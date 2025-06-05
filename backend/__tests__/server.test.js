const request = require('supertest');
const express = require('express');

// create app similar to server.js
const app = express();
app.use(express.json());
const products = [{ id: 1, name: 'Example Product', description: 'An example product', price: 9.99, image: '/placeholder.png' }];
app.get('/api/products', (req, res) => res.json(products));
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) return res.json(product);
  res.status(404).json({ message: 'Product not found' });
});

describe('API', () => {
  it('should list products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
