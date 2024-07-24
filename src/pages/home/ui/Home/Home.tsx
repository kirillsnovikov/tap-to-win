import { Flex } from '@src/shared/ui/Flex';
import { PlayerInfo } from '@src/widgets/player-info';
import { SlotMachine } from '@src/widgets/slot-machine';

import styles from './Home.module.css';

export const Home = () => (
  <Flex crossAxis="center" flow="column" rowGap={28} className={styles.home}>
    <PlayerInfo />
    <Flex className={styles.slotMachineWrapper} center>
      <SlotMachine />
    </Flex>
  </Flex>
);
