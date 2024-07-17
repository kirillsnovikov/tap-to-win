import { panes } from '../../../shared/ui/SlotMachine/config';

import type { StagePositionsTuple } from '../../../shared/ui/SlotMachine/ui/Stage';

const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomPositions = (): StagePositionsTuple => [
  panes[getRandomNumber(0, 5)],
  panes[getRandomNumber(0, 5)],
  panes[getRandomNumber(0, 5)],
];
