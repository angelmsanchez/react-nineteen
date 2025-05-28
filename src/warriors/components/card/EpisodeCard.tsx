import { Link } from 'react-router-dom';
import styled from 'styled-components';

import swordLaser from '../../../assets/images/espada-laser.png';
import { EpisodeInterface } from '../../interfaces';

const LinkCustom = styled(Link)`
  padding: 1rem;
  margin: 1rem 0.5rem;
  width: 100%;
  max-width: 280px;
  min-width: 200px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
  border: 2px solid rgba(7, 7, 7, 0.12);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 2px 10px rgba(9, 114, 208, 0.24);
    border-color: rgba(9, 114, 208, 0.24);
    cursor: url(${swordLaser}), auto;
  }
`;

const Title = styled.h6`
  text-align: center;
  margin: 1.5rem 0 1.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 1rem;
`;

const Container = styled.div`
  margin-top: auto;
  transition: all 0.3s ease;
  margin-bottom: 0.5rem;
  color: #0972d0;
  opacity: 0;
  font-size: 1.1rem;
  font-weight: 600;

  &:hover {
    transition: all 0.3s ease;
    opacity: 1;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
interface Props {
  episode: Partial<EpisodeInterface>;
  // episode: Pick<EpisodeInterface, 'id' | 'name' | 'director'>;
  // episode: Omit<
  //   EpisodeInterface,
  //   'air_date' | 'writer' | 'characters' | 'img_url'
  // >;
  // episode: WithOptional<
  //   EpisodeInterface,
  //   'air_date' | 'writer' | 'characters' | 'img_url'
  // >;
  // episode: WithRequired<
  //   EpisodeInterface,
  //   'id' | 'name' | 'director'
  // >;
}

export function EpisodeCard(props: Props) {
  const { episode } = props;

  return (
    <LinkCustom to={`/episodes/detail/${episode.id}`}>
      <Title>{episode.name}</Title>
      <p>
        <span>Director:</span> {episode.director}
      </p>
      <Container>Go To Detail</Container>
    </LinkCustom>
  );
}
