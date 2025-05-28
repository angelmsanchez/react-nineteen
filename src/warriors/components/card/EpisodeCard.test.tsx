import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryProvider } from '../../../contexts';
import { EpisodeCard } from './EpisodeCard';

describe('EpisodeCard Test:', () => {
  it('should renders component and get the button title', async () => {
    const episode = {
      id: 1,
      name: 'episode-1',
    };

    render(
      <BrowserRouter>
        <QueryProvider>
          <EpisodeCard episode={episode} />
        </QueryProvider>
      </BrowserRouter>,
    );

    const element = screen.getByText(episode.name);
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(episode.name);
  });
});
