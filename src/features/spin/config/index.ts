import type { Win } from '@src/entities/session/model';
import type { SlotMachineSymbolName } from '@src/entities/slot-machine/model';

export const spinDelay = 2000;

export const winCombinations: Record<
  SlotMachineSymbolName,
  {
    all: Win;
    double: Nullable<Win>;
  }
> = {
  apple: {
    all: 300,
    double: 20,
  },
  battery: {
    all: 25,
    double: 5,
  },
  cherry: {
    all: 100,
    double: 10,
  },
  diamond: {
    all: 1000,
    double: 50,
  },
  lemon: {
    all: 100,
    double: 10,
  },
  seven: {
    all: 100000,
    double: null,
  },
};
