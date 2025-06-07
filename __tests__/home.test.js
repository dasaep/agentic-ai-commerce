import React from "react";
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

jest.mock('swr', () => () => ({
  data: [
    { id: 1, name: 'Product 1', price: 1, color: 'red' },
    { id: 2, name: 'Product 2', price: 2, color: 'blue' }
  ]
}));

test('renders products from API', () => {
  render(<Home />);
  expect(screen.getByText('Product 1')).toBeInTheDocument();
  expect(screen.getByText('Product 2')).toBeInTheDocument();
});
