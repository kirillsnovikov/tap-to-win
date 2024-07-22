import { isNonNullable } from '@src/shared/lib/isNonNullable';

import { useGetPlayer } from '../model';

interface Props {
  fallback?: React.ReactNode;
  target?: React.ReactNode;
}

export const SessionGuard: React.FC<Props> = ({ target, fallback = null }) => {
  const player = useGetPlayer();

  if (isNonNullable(player)) {
    return <> {target}</>;
  }

  return <> {fallback}</>;
};
