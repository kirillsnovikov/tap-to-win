import { Link, Outlet, createRootRouteWithContext, useRouterState } from '@tanstack/react-router';
import { Typography } from '@src/shared/ui/Typography';
import { Flex } from '@src/shared/ui/Flex';
import { RootLayout } from '@src/widgets/layouts/root';

import type { Player } from '@src/entities/session/model';

function RouterSpinner() {
  const isLoading = useRouterState({ select: (s) => s.status === 'pending' });
  return isLoading && <Typography>loading...</Typography>;
}

const RootComponent = () => (
  <RootLayout>
    <Flex flow="column">
      <RouterSpinner />
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Outlet />
    </Flex>
  </RootLayout>
);

export const Route = createRootRouteWithContext<{
  player: Nullable<Player>;
}>()({
  component: RootComponent,
});
