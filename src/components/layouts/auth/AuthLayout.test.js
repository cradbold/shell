import { render, screen } from '@testing-library/react';
import AuthLayout from './AuthLayout';

test('renders learn react link', () => {
  render(<AuthLayout />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
