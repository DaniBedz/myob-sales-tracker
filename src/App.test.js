import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const typeHeading = screen.getByText(/type/i);
  expect(typeHeading).toBeInTheDocument();
});
