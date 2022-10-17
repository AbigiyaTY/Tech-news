import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders It workes link', () => {
  render(<App />);
  const linkElement = screen.getByText(/It workes/i);
  expect(linkElement).toBeInTheDocument();
});
