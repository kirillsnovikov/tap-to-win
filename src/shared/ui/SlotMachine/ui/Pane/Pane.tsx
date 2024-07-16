import clsx from 'clsx';

import type { PaneProps } from './types';

import styles from './Pane.module.css';

export const Pane: React.FC<PaneProps> = ({ name, className, ...rest }) => {
  const classNames = clsx(styles.pane, className);
  const src = `/images/slot-machine/${name}.webp`;
  const alt = `pane ${name}`;
  return (
    <div {...rest} className={classNames}>
      <img src={src} alt={alt} className={styles.paneImg} />
    </div>
  );
};
