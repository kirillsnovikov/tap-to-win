import { useState } from 'react';

import { Flex } from '../Flex';

import type { StagePositionsTuple } from './ui/Stage';

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
  onStart?: () => void;
  positions: StagePositionsTuple;
}

export const SlotMachine: React.FC<Props> = ({ attemptsLeft, attemptsTotal = 20, positions, onStart }) => {
  const [count, setCount] = useState(0);

  const onStartHandler = () => {
    onStart?.();
    setCount((prev) => prev + 1);
  };

  return (
    <div
      className={styles.slotMachine}
      onClick={onStartHandler}
      role="button"
      aria-label="slot-machine"
      aria-hidden="true"
    >
      <Stage positions={positions} total={count} />
      <Skin />
      <Flex mainAxis="spaceBetween" crossAxis="center" className={styles.statusBar}>
        <Attempts left={attemptsLeft} total={attemptsTotal} />
        <Status status="Free" />
      </Flex>
    </div>
  );
};
