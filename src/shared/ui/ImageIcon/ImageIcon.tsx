import clsx from 'clsx';

import { capitalize } from '@src/shared/lib/capitalize';

import type { ImageIconProps } from './types';

import styles from './ImageIcon.module.css';

export const ImageIcon = ({ size = 'm', className, alt, ...rest }: ImageIconProps) => {
  const sizeClassName = styles[`size${capitalize(size)}`];
  const classNames = clsx(styles.imageIcon, sizeClassName, className);

  return <img {...rest} className={classNames} alt={alt} />;
};
