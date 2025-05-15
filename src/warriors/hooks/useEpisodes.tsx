import { useState } from 'react';
import { useGet } from '../../shared/services';
import { EpisodeInterface } from '../interfaces';

export function useEpisodes() {
  const [limit, setLimit] = useState(3);
  const { data, isLoading } = useGet<EpisodeInterface[]>(
    `episode?limit=${limit}`,
  );

  const handleNextPage = () => {
    console.log('handleNextPage was called');
    setLimit((prev) => prev + 3);
  };

  return { episodes: data, isLoading, handleNextPage };
}
