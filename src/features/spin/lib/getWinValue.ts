import { winCombinations } from '../config';

import type { Win } from '@src/entities/session/model';
import type { CombinationTuple } from '../../../entities/slot-machine/model';

export const getWinValue = (combination: CombinationTuple): Nullable<Win> => {
  const [firstSym, secondSym, thirdSym] = combination;

  if (firstSym === secondSym && firstSym === thirdSym) {
    return winCombinations[`${firstSym}`].all;
  }

  if (firstSym === secondSym && firstSym !== thirdSym) {
    return winCombinations[`${firstSym}`].double;
  }

  return null;
};
