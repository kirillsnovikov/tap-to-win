import { useMemo } from 'react';

import { useSlotMachineStore } from '@src/entities/slot-machine/model';
import { slotMachineSymbols } from '@src/entities/slot-machine/config';

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
  const [first, second, third] = useMemo(
    () =>
      combination.map((symbol, i): React.CSSProperties => {
        const rotateX = attemptsTotal * 4 * 360 + getRotateX(symbol);
        return {
          transform: `rotateX(-${rotateX}deg)`,
          transitionDelay: `${(i + 1) * 100}ms`,
        };
      }),
    [combination, attemptsTotal],
  );

  return (
    <div className={styles.reels}>
      <Reel style={first} />
      <Reel style={second} />
      <Reel style={third} />
    </div>
  );
};
