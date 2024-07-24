import { Navigation } from '@src/widgets/navigation';

import styles from './AppLayout.module.css';

interface Props {
  children?: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => (
  <div className={styles.app}>
    {children}
    <Navigation className={styles.nav} />
  </div>
);
