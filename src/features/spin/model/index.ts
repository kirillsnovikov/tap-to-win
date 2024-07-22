import { useRef } from 'react';

import { useSlotMachineStore } from '@src/entities/slot-machine/model';
import { useSessionStore } from '@src/entities/session/model';

import { spinDelay } from '../config';

import type { CombinationTuple } from '@src/entities/slot-machine/model';

export const useSpin = () => {
  const isSpinned = useRef(false);
  const { setCombination, decreaseAttemptsLeft, increaseAttemptsTotal } = useSlotMachineStore();
  const { addCoins } = useSessionStore();

  const spin = (combination: CombinationTuple) => {
    if (isSpinned.current) {
      return;
    }
    isSpinned.current = true;
    setCombination(combination);
    increaseAttemptsTotal();
    decreaseAttemptsLeft();

    setTimeout(() => {
      addCoins(388);
      isSpinned.current = false;
    }, spinDelay);
  };

  return {
    spin,
  };
};
