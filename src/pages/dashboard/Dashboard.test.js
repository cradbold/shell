import { render, screen } from '@testing-library/react';
import { DashboardPage } from './Dashboard';

test('renders learn react link', () => {
  render(<DashboardPage />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
