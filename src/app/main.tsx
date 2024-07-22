import React from 'react';
import ReactDOM from 'react-dom/client';

import 'unfonts.css';
import './styles/index.css';
import { App } from './ui/App';

const rootEl = document.getElementById('root');

if (rootEl !== null) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
