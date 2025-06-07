const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const products = [
  {
    id: 1,
    name: 'Luxe Silk Blouse',
    description: 'Elegant silk blouse with subtle drape.',
    price: 79.5,
    color: 'Ivory',
    image: '/placeholder.png'
  },
  {
    id: 2,
    name: 'Tailored Pencil Skirt',
    description: 'Classic knee-length skirt for office wear.',
    price: 69.5,
    color: 'Charcoal',
    image: '/placeholder.png'
  },
  {
    id: 3,
    name: 'Cropped Cardigan',
    description: 'Soft knit cardigan with cropped fit.',
    price: 59.5,
    color: 'Powder Pink',
    image: '/placeholder.png'
  },
  {
    id: 4,
    name: 'Wrap Dress',
    description: 'Flattering wrap dress with belt.',
    price: 99.0,
    color: 'Navy',
    image: '/placeholder.png'
  }
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
