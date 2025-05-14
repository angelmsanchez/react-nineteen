import React, { memo } from 'react';

import { WarriorInterface } from '../../interfaces';

interface Props {
  originalWarriors: WarriorInterface[];
}

const OriginalLength = memo(function OriginalLength({ originalWarriors = [] }: Props) {
  console.log('OriginalLength was rendered at', new Date().toLocaleTimeString());

  return <p>Numero original warriors: {originalWarriors.length}</p>;
});

export default OriginalLength;
