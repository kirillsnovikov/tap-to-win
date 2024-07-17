import { useState } from 'react';

import { SlotMachine as SlotMachineUi } from '@src/shared/ui/SlotMachine';

import { getRandomPositions } from '../../lib/getRandomPositions';

export const SlotMachine = () => {
  const [positions, setPositions] = useState(() => getRandomPositions());
  const [attemptsLeft, setAttemptsLeft] = useState(20);

  const startHandler = () => {
    setPositions(getRandomPositions());
    setAttemptsLeft((prev) => prev - 1);
  };

  return <SlotMachineUi positions={positions} attemptsLeft={attemptsLeft} onStart={startHandler} />;
};
