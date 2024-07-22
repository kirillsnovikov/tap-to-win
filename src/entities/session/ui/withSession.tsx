import { isNonNullable } from '@src/shared/lib/isNonNullable';

import { useGetPlayer } from '../model';

import type { Player } from '../model';
import type { ComponentType } from 'react';

export interface WithSessionBaseProps {
  player: Player;
}

export const withSession = <T extends WithSessionBaseProps>(Component: ComponentType<T>) => {
  const WithSessionComponent: React.FC<Omit<T, keyof WithSessionBaseProps> & { fallback?: React.ReactNode }> =
    function WithSessionComponent({ fallback, ...rest }) {
      const player = useGetPlayer();

      if (isNonNullable(player)) {
        return <Component {...(rest as T)} player={player} />;
      }

      return <> {fallback}</>;
    };

  return WithSessionComponent;
};
