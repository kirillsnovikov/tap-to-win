import { useMemo } from 'react';

import { Ring } from '../Ring';
import { panes, paneAngle } from '../../config';

import type { PaneName } from '../Pane';

import styles from './Stage.module.css';

export type StagePositionsTuple = [PaneName, PaneName, PaneName];

interface Props {
  positions: StagePositionsTuple;
  total: number;
}

const getRotateX = (position: PaneName) => {
  const positionNumber = panes.indexOf(position);
  return 360 - positionNumber * paneAngle;
};

export const Stage: React.FC<Props> = ({ positions, total }) => {
  const [first, second, third] = useMemo(
    () =>
      positions.map((position): React.CSSProperties => {
        const rotateX = total * 4 * 360 + getRotateX(position);
        return {
          transform: `rotateX(${rotateX}deg)`,
        };
      }),
    [positions, total],
  );

  return (
    <div className={styles.stage}>
      <Ring style={first} />
      <Ring style={second} />
      <Ring style={third} />
    </div>
  );
};
