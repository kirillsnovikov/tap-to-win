import { AppLayout } from '@src/widgets/layouts/app/ui/AppLayout/AppLayout';
import { createFileRoute, Outlet } from '@tanstack/react-router';

const Component = () => (
  <AppLayout>
    <Outlet />
  </AppLayout>
);

export const Route = createFileRoute('/_app')({
  component: Component,
});
