import { useState } from 'react';
import clsx from 'clsx';

import viteLogo from '@public/vite.svg';
import { Button } from '@shared/ui/Button';
import reactLogo from '@src/assets/react.svg';

import styles from './App.module.css';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main className={styles.app}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className={clsx(styles.logo, styles.react)} alt="React logo" />
        </a>
        <Button />
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button
          type="button"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code>
          and save to test HMR
        </p>
      </div>
      <p className={styles.readTheDocs}>Click on the Vite and React logos to learn more</p>
    </main>
  );
};
