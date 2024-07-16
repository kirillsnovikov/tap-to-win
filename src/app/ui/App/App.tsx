import { Home as HomePage } from '@src/pages/home/ui/Home';
import Container from '@src/shared/ui/Container';

import styles from './App.module.css';

export const App = () => (
  <Container as="main" className={styles.app}>
    <HomePage />
  </Container>
);
