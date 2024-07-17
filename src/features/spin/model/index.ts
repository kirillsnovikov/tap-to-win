import { useRef } from 'react';

import { useSlotMachineStore } from '@src/entities/slot-machine/model';

import { spinDelay } from '../config';

import type { CombinationTuple } from '@src/entities/slot-machine/model';

export const useSpin = () => {
  const isSpinned = useRef(false);
  const { setCombination, decreaseAttemptsLeft, increaseAttemptsTotal } = useSlotMachineStore();

  const spin = (combination: CombinationTuple) => {
    if (isSpinned.current) {
      return;
    }
    isSpinned.current = true;
    setCombination(combination);
    increaseAttemptsTotal();
    decreaseAttemptsLeft();

    setTimeout(() => {
      isSpinned.current = false;
    }, spinDelay);
  };

  return {
    spin,
  };
};
