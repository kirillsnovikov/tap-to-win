import { create, useStore } from 'zustand';

import { attemptsLimit } from '../config';
import { getRandomCombination } from '../lib/getRandomConbination';

import type { slotMachineSymbols } from '../config';

export type SlotMachineSymbolName = (typeof slotMachineSymbols)[number];

export type CombinationTuple = [SlotMachineSymbolName, SlotMachineSymbolName, SlotMachineSymbolName];

const initialCombination = getRandomCombination();

interface State {
  attemptsLimit: number;
  attemptsTotal: number;
  attemptsLeft: number;
  spinCost: number;
  combination: CombinationTuple;
  isWin: boolean;
}

interface Actions {
  decreaseAttemptsLeft: () => void;
  increaseAttemptsTotal: () => void;
  setCombination: (combination: CombinationTuple) => void;
  setIsWin: (isWin: boolean) => void;
}

export const useSlotMachineStore = create<State & Actions>((set) => ({
  combination: initialCombination,
  attemptsLeft: attemptsLimit,
  attemptsTotal: 0,
  spinCost: 0,
  attemptsLimit,
  isWin: false,
  decreaseAttemptsLeft: () => {
    set((state) => ({
      attemptsLeft: state.attemptsLeft - 1,
    }));
  },
  increaseAttemptsTotal: () => {
    set((state) => ({
      attemptsTotal: state.attemptsTotal + 1,
    }));
  },
  setCombination: (combination) => {
    set({
      combination,
    });
  },
  setIsWin: (isWin) => {
    set({
      isWin,
    });
  },
}));

export const getCombination = () => useSlotMachineStore.getState().combination;

export const useGetAttempts = (): [attemptsLeft: number, attemptsLimit: number] =>
  useStore(useSlotMachineStore, (state) => [state.attemptsLeft, state.attemptsLimit]);

export const useGetAttemptsTotal = () => useStore(useSlotMachineStore, (state) => state.attemptsTotal);

export const useGetSpinCost = () => useStore(useSlotMachineStore, (state) => state.spinCost);

export const useGetIsWin = () => useStore(useSlotMachineStore, (state) => state.isWin);
