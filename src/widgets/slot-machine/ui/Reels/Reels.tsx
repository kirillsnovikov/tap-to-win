import { useMemo } from 'react';

import { useSlotMachineStore } from '@src/entities/slot-machine/model';
import { slotMachineSymbols } from '@src/entities/slot-machine/config';
import { spinDelay } from '@src/features/spin/config';

import { symbolAngle } from '../../config';
import { Reel } from '../Reel';

import type { SlotMachineSymbol } from '@src/entities/slot-machine/model';

import styles from './Reels.module.css';

const getRotateX = (symbol: SlotMachineSymbol) => {
  const symbolIdx = slotMachineSymbols.indexOf(symbol);
  return symbolIdx * symbolAngle;
};

export const Reels = () => {
  const { attemptsTotal, combination } = useSlotMachineStore();
  const combinationLenth = combination.length;
  const [first, second, third] = useMemo(
    () =>
      combination.map((symbol, i): React.CSSProperties => {
        const rotateX = attemptsTotal * 4 * 360 + getRotateX(symbol);

        const transitionDelay = i * 300;
        const transitionDuration = spinDelay - transitionDelay - (combinationLenth - i + 1) * 50;
        return {
          transform: `rotateX(-${rotateX}deg)`,
          transitionDelay: `${transitionDelay}ms`,
          transitionDuration: `${transitionDuration}ms`,
        };
      }),
    [combination, attemptsTotal, combinationLenth],
  );

  return (
    <div className={styles.reels}>
      <Reel style={first} />
      <Reel style={second} />
      <Reel style={third} />
    </div>
  );
};
