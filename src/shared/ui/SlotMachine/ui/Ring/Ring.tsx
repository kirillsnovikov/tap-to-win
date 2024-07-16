import { paneAngle, panes, ringRadius } from '../../config';
import { Pane } from '../Pane';

import styles from './Ring.module.css';

export const Ring = () => {
  const map = panes.map((pane, i) => {
    const rotateX = i * paneAngle;
    const style: React.CSSProperties = {
      transform: `rotateX(${rotateX}deg) translateZ(${ringRadius}px)`,
    };
    return <Pane name={pane} key={pane} style={style} />;
  });

  return <div className={styles.ring}>{map}</div>;
};
