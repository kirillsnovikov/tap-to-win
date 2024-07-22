import clsx from 'clsx';

import type { SlotMachineSymbolProps } from './types';

import styles from './SlotMachineSymbol.module.css';

export const SlotMachineSymbol: React.FC<SlotMachineSymbolProps> = ({ symbolName, className, ...rest }) => {
  const classNames = clsx(styles.symbol, className);
  const src = `/images/slot-machine/${symbolName}.webp`;
  const alt = `symbol ${symbolName}`;
  return (
    <div {...rest} className={classNames}>
      <img src={src} alt={alt} className={styles.symbolImg} />
    </div>
  );
};
