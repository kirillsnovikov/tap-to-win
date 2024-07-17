import clsx from 'clsx';

import { slotMachineSymbols } from '@src/entities/slot-machine/config';

import { symbolAngle, reelRadius } from '../../config';
import { Symbol } from '../Symbol';

import styles from './Reel.module.css';

type Props = React.HTMLAttributes<HTMLDivElement>;

export const Reel: React.FC<Props> = ({ className, ...rest }) => {
  const classNames = clsx(styles.reel, className);

  const symbols = slotMachineSymbols.map((symbol, i) => {
    const rotateX = i * symbolAngle;
    const style: React.CSSProperties = {
      transform: `rotateX(${rotateX}deg) translateZ(${reelRadius}px)`,
    };
    return <Symbol symbol={symbol} key={symbol} style={style} />;
  });

  return (
    <div {...rest} className={classNames}>
      {symbols}
    </div>
  );
};
