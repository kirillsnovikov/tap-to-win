import { Ring } from '../Ring';

import styles from './Stage.module.css';

export const Stage = () => (
  <div className={styles.stage}>
    <Ring />
    <Ring />
    <Ring />
  </div>
);
