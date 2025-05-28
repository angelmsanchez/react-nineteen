import { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import { EpisodeInterface } from '../../interfaces';
import { Button, Spinner } from '../../../shared/components';
import { useGet } from '../../../shared/services';

const PageContainer = styled.div`
  padding: 1.5rem;
`;
const DataContainer = styled.div`
  margin-top: 2rem;
`;

export default function EpisodeDetailPage() {
  const params = useParams();
  const [episode, setEpisode] = useState<EpisodeInterface>();
  const { data } = useGet<EpisodeInterface>(`people/${params.idEpisode}`);

  useEffect(() => {
    if (data) {
      setEpisode(data);
    }
  }, [data]);

  return (
    <PageContainer>
      <h1>Episode Detail Page</h1>
      <Link to="/Episodes">
        <Button>
          <>Go List Episodes</>
        </Button>
      </Link>
      {episode && (
        <DataContainer>
          <p>
            <span>Name:</span> {episode.name}
          </p>
          <p>
            <span>air_date:</span> {episode.air_date}
          </p>
          <p>
            <span>characters:</span> {episode.characters}
          </p>
          <p>
            <span>director:</span> {episode.director}
          </p>
          <p>
            <span>img_url:</span> {episode.img_url}
          </p>
          <p>
            <span>Name:</span> {episode.name}
          </p>
          <p>
            <span>writer:</span> {episode.writer}
          </p>
        </DataContainer>
      )}
      {!episode && <Spinner />}
    </PageContainer>
  );
}
