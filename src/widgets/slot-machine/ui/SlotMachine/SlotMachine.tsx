import { SpinTapOverlay } from '@src/features/spin/ui/SpinTapOverlay';

import { Flex } from '../../../../shared/ui/Flex';
import { Attempts } from '../Attempts';
import { Skin } from '../Skin';
import { Reels } from '../Reels';
import { SpinCost } from '../SpinCost';

import styles from './SlotMachine.module.css';

export const SlotMachine = () => (
  <SpinTapOverlay>
    <div className={styles.slotMachine}>
      <Reels />
      <Skin />
      <Flex mainAxis="spaceBetween" crossAxis="center" className={styles.statusBar}>
        <Attempts />
        <SpinCost />
      </Flex>
    </div>
  </SpinTapOverlay>
);
