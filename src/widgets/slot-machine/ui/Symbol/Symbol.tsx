import clsx from 'clsx';

import type { SymbolProps } from './types';

import styles from './Symbol.module.css';

export const Symbol: React.FC<SymbolProps> = ({ symbol, className, ...rest }) => {
  const classNames = clsx(styles.symbol, className);
  const src = `/images/slot-machine/${symbol}.webp`;
  const alt = `symbol ${symbol}`;
  return (
    <div {...rest} className={classNames}>
      <img src={src} alt={alt} className={styles.symbolImg} />
    </div>
  );
};
