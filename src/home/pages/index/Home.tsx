import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../../../shared/components';
import { useCountStore } from '../../../zustand/counter';
import { useState } from 'react';
import { Counter } from '../../../components/counter/Counter';

const HomeContainer = styled.header`
  padding: 1.5rem;

  p {
    text-align: center;
    margin-top: 3rem;
    font-size: 1rem;
  }

  button {
    margin-left: calc(50% - (220px / 2));
  }
`;

export default function Home() {
  const [countLocal, setCount] = useState(0);
  const { increase, reset } = useCountStore();

  return (
    <HomeContainer>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {countLocal}
        </button>
        <button onClick={increase}>increase</button>
        <button onClick={reset}>reset</button>
        <Counter />
      </div>
      <Link to="/episodes">
        <Button>Episodes</Button>
      </Link>
      <Link to="/warriors">
        <Button>Go List Warriors</Button>
      </Link>
    </HomeContainer>
  );
}
