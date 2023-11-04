import { render, screen } from '@testing-library/react';
import { ProfilePage } from './Profile';

test('renders learn react link', () => {
  render(<ProfilePage />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
