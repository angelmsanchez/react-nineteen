import { useEffect, useState } from 'react';

import styled from 'styled-components';

import './WarriorListPage.css';
import { WarriorInterface } from '../../interfaces';
import { Spinner } from '../../../shared/components';
import { PageResponseInterface } from '../../../shared/interfaces';
import { useGet } from '../../../shared/services';
import { warriorsService } from '../../services';
import WarriorList from '../../components/list/WarriorList';
import WarriorFilter from '../../components/filter/WarriorFilter';
import OriginalLength from '../../components/original-length/OriginalLength';
import FilterLength from '../../components/filter-length/FilterLength';

const PageContainer = styled.section`
  padding: 1.5rem;
`;

export default function WarriorListPage() {
  const [originalWarriors, setOriginalWarriors] = useState<WarriorInterface[]>(
    [],
  );
  const [filterWarriors, setFilterWarriors] = useState<WarriorInterface[]>([]);
  const [pageResponse, setPageResponse] =
    useState<PageResponseInterface<WarriorInterface>>();
  const [hasMorePages, setHasMorePages] = useState(true);
  const [url, setUrl] = useState('?limit=3');
  const { data } = useGet<PageResponseInterface<WarriorInterface>>(url);

  const handleNextWarriors = () => {
    if (pageResponse?.next)
      setUrl(
        pageResponse.next.replace(
          'https://finalspaceapi.com/api/v0/episode/',
          '',
        ),
      );
    else setHasMorePages(false);
  };

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        console.log('setTimeout', data);
        setPageResponse(data);
        setOriginalWarriors([...originalWarriors, ...data.results]);
        setFilterWarriors([
          ...filterWarriors,
          ...warriorsService.setIdByIndex(data.results),
        ]);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <PageContainer>
      <h4>Warriors List</h4>
      <OriginalLength originalWarriors={originalWarriors} />
      <FilterLength warriors={filterWarriors} />
      <br />
      {pageResponse && (
        <>
          <WarriorFilter
            originalWarriors={originalWarriors}
            filterWarriors={filterWarriors}
            handleSetDefault={() => setFilterWarriors(originalWarriors)}
            handleSortByTitle={setFilterWarriors}
            handleFilterColorHair={setFilterWarriors}
          />
          <WarriorList
            warriors={filterWarriors}
            hasMorePages={hasMorePages}
            onNextWarriors={handleNextWarriors}
          />
        </>
      )}
      {!pageResponse && <Spinner />}
    </PageContainer>
  );
}
