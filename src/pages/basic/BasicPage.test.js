import { render, screen } from '@testing-library/react';
import { BasicPage } from './BasicPage';

test('renders learn react link', () => {
  render(<BasicPage />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
