import React from 'react';
import ReactDOM from 'react-dom/client';

import 'unfonts.css';
import './styles/index.css';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

const router = createRouter({
  routeTree,
  context: {
    player: null,
  },
  defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootEl = document.getElementById('root');

if (rootEl !== null) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
