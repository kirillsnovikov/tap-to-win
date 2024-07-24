import { create, useStore } from 'zustand';

import { isNonNullable } from '@src/shared/lib/isNonNullable';

export type Coins = number;
export type Win = number;
export type Level = number;

export interface Player {
  name: string;
  login: string;
  email: string;
  coins: Coins;
  picture: string;
  topWin: Win;
  level: Level;
}

const initialPlayer: Player = {
  coins: 0,
  email: 'etto@lsdk.eu',
  login: 'RoORUjj@L',
  name: 'VIeud LLdip',
  picture: 'https://avatars.mds.yandex.net/i?id=8fe6b90aab41119b8969bda6d0d41c00_sr-7545493-images-thumbs&n=13',
  topWin: 100000,
  level: 6,
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
