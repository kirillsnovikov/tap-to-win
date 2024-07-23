import clsx from 'clsx';

import type { AvatarProps } from './types';

import styles from './Avatar.module.css';

export const Avatar: React.FC<AvatarProps> = ({ className, alt = 'profile image', ...rest }) => {
  const classNames = clsx(styles.avatar, className);
  return (
    <div className={classNames}>
      <img {...rest} alt={alt} className={styles.img} />
    </div>
  );
};
