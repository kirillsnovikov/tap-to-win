import { useMemo } from 'react';

import { useSlotMachineStore } from '@src/entities/slot-machine/model';
import { slotMachineSymbols } from '@src/entities/slot-machine/config';

import { symbolAngle } from '../../config';
import { Reel } from '../Reel';

import type { SlotMachineSymbolName } from '@src/entities/slot-machine/model';

import styles from './Reels.module.css';

const getRotateX = (symbolName: SlotMachineSymbolName) => {
  const symbolIdx = slotMachineSymbols.indexOf(symbolName);
  return symbolIdx * symbolAngle;
};

export const Reels = () => {
  const { attemptsTotal, combination } = useSlotMachineStore();
  const [first, second, third] = useMemo(
    () =>
      combination.map((symbol, i): React.CSSProperties => {
        const rotateX = attemptsTotal * 4 * 360 + getRotateX(symbol);

        const transitionDelay = i * 300;
        return {
          transform: `rotateX(-${rotateX}deg)`,
          transitionDelay: `${transitionDelay}ms`,
        };
      }),
    [combination, attemptsTotal],
  );

  return (
    <div className={styles.reels}>
      <Reel style={{ ...first, transitionDuration: `${1400}ms` }} />
      <Reel style={{ ...second, transitionDuration: `${1200}ms` }} />
      <Reel style={{ ...third, transitionDuration: `${1400}ms` }} />
    </div>
  );
};
