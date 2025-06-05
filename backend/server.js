const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const products = [
  { id: 1, name: 'Example Product', description: 'An example product', price: 9.99, image: '/placeholder.png' }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) return res.json(product);
  res.status(404).json({ message: 'Product not found' });
});

app.listen(port, () => {
  console.log(`Mock API server running on port ${port}`);
});
