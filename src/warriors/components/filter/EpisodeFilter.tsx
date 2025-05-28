import { useState, ChangeEvent, memo } from 'react';

import styled from 'styled-components';

import { EpisodeInterface } from '../../interfaces';
import { Button } from '../../../shared/components';

const EpisodeContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  @media ${(props) => props.theme.screenMd} {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
  }
`;
const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 220px;
  letter-spacing: 2px;

  @media ${(props) => props.theme.screenMd} {
    margin: 0 0 0 1.5rem;
  }

  select {
    appearance: none;
    background-color: transparent;
    border-color: ${(props) => props.theme.main};
    border-width: 2px;
    border-radius: 6px;
    padding: 0.4rem;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
  }
`;
const ButtonContainer = styled.div`
  @media ${(props) => props.theme.screenMd} {
    margin-left: auto;
  }
`;

interface Props {
  originalEpisode?: EpisodeInterface[];
  filterEpisode?: EpisodeInterface[];
  handleSetDefault: () => void;
  handleSortByTitle: (sortEpisode: EpisodeInterface[]) => void;
  handleFilterColorHair: (sortEpisode: EpisodeInterface[]) => void;
}

const EpisodeFilter = memo(function EpisodeFilter(props: Props) {
  const {
    originalEpisode,
    filterEpisode,
    handleSetDefault,
    handleSortByTitle,
    handleFilterColorHair,
  } = props;
  console.log('EpisodeFilter');

  const [isSortAsc, setIsSortAsc] = useState(true);
  const [hairColorSelected, setHairColorSelected] = useState('');

  const sortableFunction = (
    Episode: EpisodeInterface[],
  ): EpisodeInterface[] => {
    return Episode.sort((a, b) =>
      isSortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
    );
  };

  const sortByName = (): void => {
    setIsSortAsc(!isSortAsc);
    if (filterEpisode && filterEpisode.length > 0)
      handleSortByTitle([...sortableFunction(filterEpisode)]);
  };

  const changeSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    const newValue = event.target.value;
    setHairColorSelected(newValue);
    let filterByHairColor = originalEpisode?.filter((Episode) =>
      Episode.air_date.includes(newValue),
    );
    if (filterByHairColor && filterByHairColor.length > 0)
      filterByHairColor = [...sortableFunction(filterByHairColor)];
    if (filterByHairColor && filterByHairColor.length > 0)
      handleFilterColorHair([...filterByHairColor]);
  };

  return (
    <EpisodeContainer>
      <div>
        <Button handleClick={sortByName} disabled={!originalEpisode}>
          <>
            Sort by name
            {isSortAsc ? ' Ascendant' : ' Descendant'}
          </>
        </Button>
      </div>
      <SelectContainer role="select-role" className="Episode-filter__select">
        <label>Filter by hair color</label>
        <select value={hairColorSelected} onChange={changeSelect}>
          <option value=""> - </option>
          <option value="auburn">Auburn</option>
          <option value="blond">Blond</option>
          <option value="brown">Brown</option>
          <option value="grey">Grey</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="n/a">n/a</option>
          <option value="none">None</option>
        </select>
      </SelectContainer>
      <ButtonContainer>
        <Button
          handleClick={() => {
            setIsSortAsc(true);
            setHairColorSelected('');
            handleSetDefault();
          }}
        >
          <>Set Default</>
        </Button>
      </ButtonContainer>
    </EpisodeContainer>
  );
});

export default EpisodeFilter;
