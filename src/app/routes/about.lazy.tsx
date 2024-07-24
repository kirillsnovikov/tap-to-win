import { createLazyFileRoute } from '@tanstack/react-router';

const About = () => (
  <div className="p-2">
    <h3>About page</h3>
  </div>
);

export const Route = createLazyFileRoute('/about')({
  component: About,
});
