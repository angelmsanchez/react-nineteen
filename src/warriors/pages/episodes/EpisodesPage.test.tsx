import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EpisodesPage from './EpisodesPage';
import { describe, it, vi } from 'vitest';
import { QueryProvider } from '../../../contexts';
import { useEpisodes } from '../../hooks/useEpisodes';

vi.mock('../../components/container/EpisodeContainer', () => ({
  EpisodeContainer: ({ episodes }: any) => (
    <div data-testid="episode-container">{episodes[0]?.name}</div>
  ),
}));
vi.mock('../../../shared/components', () => ({
  Spinner: () => <div data-testid="spinner" />,
}));
vi.mock('../../hooks/useEpisodes', () => ({
  useEpisodes: () => ({
    episodes: [],
    isLoading: true,
    handleNextPage: vi.fn(),
  }),
}));

describe('Episodes List Test:', () => {
  it('should renders component and get the title of the page', async () => {
    const text = 'Episodes List';

    const { unmount } = render(
      <BrowserRouter>
        <QueryProvider>
          <EpisodesPage />
        </QueryProvider>
      </BrowserRouter>,
    );

    const element = screen.getByText(text);
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(text);
    unmount();
  });

  it('should renders loading spinner when loading', async () => {
    render(
      <BrowserRouter>
        <QueryProvider>
          <EpisodesPage />
        </QueryProvider>
      </BrowserRouter>,
    );

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should renders EpisodeContainer when episodes are loaded', async () => {
    // vi.mock('../../hooks/useEpisodes', () => ({
    //   useEpisodes: () => ({
    //     episodes: [{ name: 'Episode 1' }],
    //     isLoading: false,
    //     handleNextPage: vi.fn(),
    //   }),
    // }));

    render(
      <BrowserRouter>
        <QueryProvider>
          <EpisodesPage />
        </QueryProvider>
      </BrowserRouter>,
    );

    expect(screen.getByTestId('episode-container')).toHaveTextContent(
      'Episode 1',
    );
  });
});
