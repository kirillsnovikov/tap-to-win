import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { RootLayout } from '@src/widgets/layouts/root';

import type { Player } from '@src/entities/session/model';

const RootComponent = () => (
  <RootLayout>
    <Outlet />
  </RootLayout>
);

export const Route = createRootRouteWithContext<{
  player: Nullable<Player>;
}>()({
  component: RootComponent,
});
