import './EpisodesPage.css';
import { Spinner } from '../../../shared/components';
import { useEpisodes } from '../../hooks/useEpisodes';
import { EpisodeContainer } from '../../components/container/EpisodeContainer';

export default function EpisodesPage() {
  const { episodes, isLoading, handleNextPage } = useEpisodes();
  console.log('EpisodesPage', episodes);

  return (
    <section>
      <h4>Episodes List</h4>
      {/* <OriginalLength originalepisodes={originalWarriors} /> */}
      {/* <FilterLength warriors={filterWarriors} /> */}
      <br />
      {!isLoading && episodes && (
        <>
          <EpisodeContainer
            episodes={episodes}
            hasMorePages={true}
            onNextPage={handleNextPage}
          />
        </>
      )}
      {isLoading && <Spinner />}
    </section>
  );
}
