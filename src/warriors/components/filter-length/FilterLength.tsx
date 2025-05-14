import React, { memo } from 'react';

import { WarriorInterface } from '../../interfaces';

interface Props {
  warriors: WarriorInterface[];
}

const FilterLength = memo(function FilterLength({ warriors = [] }: Props) {
  console.log('FilterLength was rendered at', new Date().toLocaleTimeString());

  return <p>Numero filtrado warriors: {warriors.length}</p>;
});

export default FilterLength;
