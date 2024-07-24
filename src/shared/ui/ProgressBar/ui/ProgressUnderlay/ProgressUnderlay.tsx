import clsx from 'clsx';

import styles from './ProgressUnderlay.module.css';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const ProgressUnderlay: React.FC<Props> = ({ children, className }) => (
  <span className={clsx(className, styles.underlay)}>{children}</span>
);
