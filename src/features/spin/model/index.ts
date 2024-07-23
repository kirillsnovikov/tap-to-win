import { useRef } from 'react';

import { useSlotMachineStore } from '@src/entities/slot-machine/model';
import { useSessionStore } from '@src/entities/session/model';
import { isNonNullable } from '@src/shared/lib/isNonNullable';

import { spinDelay } from '../config';
import { getWinValue } from '../lib/getWinValue';

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
    const win = getWinValue(combination);
    increaseAttemptsTotal();
    decreaseAttemptsLeft();

    setTimeout(() => {
      if (isNonNullable(win)) {
        addCoins(win);
      }
      isSpinned.current = false;
    }, spinDelay);
  };

  return {
    spin,
  };
};
