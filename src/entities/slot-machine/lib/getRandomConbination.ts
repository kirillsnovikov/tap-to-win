import { slotMachineSymbols } from '../config';

import type { CombinationTuple } from '../model';

const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomCombination = (): CombinationTuple => [
  slotMachineSymbols[getRandomNumber(0, 5)],
  slotMachineSymbols[getRandomNumber(0, 5)],
  slotMachineSymbols[getRandomNumber(0, 5)],
];
