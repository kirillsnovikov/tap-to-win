import { createLazyFileRoute } from '@tanstack/react-router';

const Component = () => (
  <div className="p-2">
    <h3>Earn page</h3>
  </div>
);

export const Route = createLazyFileRoute('/_app/earn/')({
  component: Component,
});
