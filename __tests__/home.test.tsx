import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

jest.mock('swr', () => ({
  useSWR: () => ({ data: [{ id: 1, name: 'Product', price: 1, color: 'Red' }] })
}));


test('renders products from API', () => {
  render(<Home />);
  expect(screen.getByText('Product')).toBeInTheDocument();
});
