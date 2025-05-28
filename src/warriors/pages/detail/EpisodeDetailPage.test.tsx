import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import EpisodeDetailPage from './EpisodeDetailPage';
import { BrowserRouter } from 'react-router-dom';
import { QueryProvider } from '../../../contexts';

describe('EpisodeDetailPage Test:', () => {
  it('should renders component and get the button title', async () => {
    const title = 'Episode Detail Page';

    render(
      <BrowserRouter>
        <QueryProvider>
          <EpisodeDetailPage />
        </QueryProvider>
      </BrowserRouter>,
    );

    const element = screen.getByText(title);
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(title);
  });
});
