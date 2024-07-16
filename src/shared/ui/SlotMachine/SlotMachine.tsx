import { Flex } from '../Flex';

import styles from './SlotMachine.module.css';
import { Attempts } from './ui/Attempts';
import { Skin } from './ui/Skin';
import { Stage } from './ui/Stage';
import { Status } from './ui/Status';

interface Props {
  children?: React.ReactNode;
  attemptsTotal?: number;
  attemptsLeft: number;
  onFinish?: () => void;
}

export const SlotMachine: React.FC<Props> = ({ attemptsLeft, attemptsTotal = 20 }) => (
  <div className={styles.slotMachine}>
    <Stage />
    <Skin />
    <Flex mainAxis="spaceBetween" crossAxis="center" className={styles.statusBar}>
      <Attempts left={attemptsLeft} total={attemptsTotal} />
      <Status status="Free" />
    </Flex>
  </div>
);
