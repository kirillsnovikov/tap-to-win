import clsx from 'clsx';

import type { ContainerProps } from './types';

import styles from './Container.module.css';

const defaultComponent = 'section';

function Container<T extends React.ElementType = typeof defaultComponent>({
  as,
  className,
  ...rest
}: ContainerProps<T>) {
  const Component = as ?? defaultComponent;
  const classNames = clsx(styles.container, className);
  return <Component {...rest} className={classNames} />;
}

export default Container;
