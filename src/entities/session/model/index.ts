import { create, useStore } from 'zustand';

import { isNonNullable } from '@src/shared/lib/isNonNullable';

export interface Player {
  name: string;
  login: string;
  email: string;
  coins: number;
  picture: string;
  topWin: number;
}

const initialPlayer: Player = {
  coins: 1494000,
  email: 'etto@lsdk.eu',
  login: 'RoORUjj@L',
  name: 'VIeud LLdip',
  picture: '',
  topWin: 100000,
};

interface State {
  player: Nullable<Player>;
}

interface Actions {
  setPlayer: (player: Player) => void;
  addCoins: (coins: number) => void;
}

export const useSessionStore = create<State & Actions>((set) => ({
  player: initialPlayer,
  setPlayer: (player) => {
    set({
      player,
    });
  },
  addCoins: (coins) => {
    set((state) => {
      if (isNonNullable(state.player)) {
        return {
          player: { ...state.player, coins: state.player.coins + coins },
        };
      }

      return state;
    });
  },
}));

export const useGetPlayer = () => useStore(useSessionStore, (state) => state.player);
