import clsx from 'clsx';

import { paneAngle, panes, ringRadius } from '../../config';
import { Pane } from '../Pane';

import styles from './Ring.module.css';

type Props = React.HTMLAttributes<HTMLDivElement>;

export const Ring: React.FC<Props> = ({ className, ...rest }) => {
  const classNames = clsx(styles.ring, className);

  const listPanes = panes.map((pane, i) => {
    const rotateX = i * paneAngle;
    const style: React.CSSProperties = {
      transform: `rotateX(${rotateX}deg) translateZ(${ringRadius}px)`,
    };
    return <Pane name={pane} key={pane} style={style} />;
  });

  return (
    <div {...rest} className={classNames}>
      {listPanes}
    </div>
  );
};
