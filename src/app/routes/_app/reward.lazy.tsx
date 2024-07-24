import { createLazyFileRoute } from '@tanstack/react-router';

const Component = () => (
  <div className="p-2">
    <h3>Reward page</h3>
  </div>
);

export const Route = createLazyFileRoute('/_app/reward')({
  component: Component,
});
