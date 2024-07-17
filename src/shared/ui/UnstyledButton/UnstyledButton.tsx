import React from 'react';
import { clsx } from 'clsx';

import type { PolymorphicRef } from '@src/shared/types/polymorphic';
import type { UnstyledButtonComponent, UnstyledButtonProps } from './types';

import styles from './UnstyledButton.module.css';

const UnstyledButtonBase = <T extends React.ElementType>(props: UnstyledButtonProps<T>, ref: PolymorphicRef<T>) => {
  const { as, className, children, ...rest } = props;

  const Component = as ?? 'button';

  return (
    <Component {...rest} className={clsx(styles.button, className)} ref={ref}>
      {children}
    </Component>
  );
};

export const UnstyledButton: UnstyledButtonComponent = React.forwardRef(UnstyledButtonBase);
