import Container from '@src/shared/ui/Container';
import { Header } from '@src/widgets/header';

import styles from './RootLayout.module.css';

interface Props {
  children?: React.ReactNode;
}

export const RootLayout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <Container as="main" className={styles.container}>
      {children}
    </Container>
  </>
);
