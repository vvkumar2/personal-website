import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Varun Kumar', () => {
  render(<App />);
  const nameElement = screen.getByText(/Varun Kumar/i);
  expect(nameElement).toBeInTheDocument();
});
