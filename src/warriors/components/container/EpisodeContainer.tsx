import InfiniteScroll from 'react-infinite-scroll-component';

import { EpisodeInterface } from '../../interfaces';
import { EpisodeCard } from '../card/EpisodeCard';
import './EpisodeContainer.css';

interface Props {
  episodes: EpisodeInterface[];
  hasMorePages: boolean;
  onNextPage: () => void;
}

export const EpisodeContainer = (props: Props) => {
  const { episodes, hasMorePages, onNextPage } = props;
  console.log('episodeList was rendered at', new Date().toLocaleTimeString());
  console.log('episodeList :::', episodes);

  return (
    <div className="episode-container">
      <InfiniteScroll
        dataLength={episodes.length}
        next={onNextPage}
        hasMore={hasMorePages}
        loader={<div className="loader-infinite-scroll">Loading...</div>}
        style={{ width: '100%' }}
      >
        {episodes &&
          episodes.length > 0 &&
          episodes.map((episode, index) => (
            <EpisodeCard key={`${index}-${episode.name}`} episode={episode} />
          ))}
      </InfiniteScroll>
    </div>
  );
};
