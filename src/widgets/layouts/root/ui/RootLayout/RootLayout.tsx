import Container from '@src/shared/ui/Container';

import styles from './RootLayout.module.css';

interface Props {
  children?: React.ReactNode;
}

export const RootLayout: React.FC<Props> = ({ children }) => (
  <Container as="main" className={styles.root}>
    {children}
  </Container>
);
