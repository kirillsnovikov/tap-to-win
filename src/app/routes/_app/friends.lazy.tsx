import { createLazyFileRoute } from '@tanstack/react-router';

const Friends = () => (
  <div className="p-2">
    <h3>Friends page</h3>
  </div>
);

export const Route = createLazyFileRoute('/_app/friends')({
  component: Friends,
});
