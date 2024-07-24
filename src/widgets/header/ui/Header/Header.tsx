import { Button } from '@src/shared/ui/Button';
import { Flex } from '@src/shared/ui/Flex';
import { Typography } from '@src/shared/ui/Typography';
import Container from '@src/shared/ui/Container';

import styles from './Header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <Container as="div" className={styles.container}>
      <Flex mainAxis="start">
        <Button variant="basic">Отмена</Button>
      </Flex>
      <Flex flow="column" crossAxis="center" mainAxis="center">
        <Typography as="h1" variant="textL" weight="medium">
          Tap To Win
        </Typography>
        <Typography as="span" color="gray" variant="textXs">
          бот
        </Typography>
      </Flex>
      <Flex mainAxis="end" crossAxis="center">
        <span>...</span>
      </Flex>
    </Container>
  </header>
);
