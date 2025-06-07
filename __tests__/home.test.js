import React from "react";
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

jest.mock('swr', () => () => ({ data: [{ id: 1, name: 'Product', price: 1, color: 'Red' }] }));


test('renders products from API', () => {
  render(<Home />);
  expect(screen.getByText('Product 1')).toBeInTheDocument();
  expect(screen.getByText('Product 2')).toBeInTheDocument();
});
