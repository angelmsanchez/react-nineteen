import { describe, it, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

test('DEMO TEST', () => {
  expect(true).toBe(true);
});

describe('App component:', () => {
  it('renders the main page', () => {
    render(<App />);
    expect(true).toBeTruthy();
  });
});
