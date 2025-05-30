import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home Test:', () => {
  it('should renders component and get the title of page', async () => {
    const title = 'Home Page';
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    const element = screen.getByText(title);
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(title);
  });
});
