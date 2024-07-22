import React from 'react';
import { clsx } from 'clsx';

import type { PolymorphicRef } from '@src/shared/types/polymorphic';
import type { BaseTypographyComponent, BaseTypographyProps } from './types';

import styles from './BaseTypography.module.css';

const TypographyComponent = <T extends React.ElementType>(props: BaseTypographyProps<T>, ref: PolymorphicRef<T>) => {
  const { as: Component = 'p', color, variant, center = false, ellipsis = false, children, className, ...rest } = props;

  const variantClassName = variant && styles[`${variant}`];
  const colorClassName = color && styles[`${color}`];

  const classNames = clsx(
    styles.typography,
    variantClassName,
    colorClassName,
    ellipsis && styles.ellipsis,
    center && styles.center,
    className,
  );

  return (
    <Component {...rest} className={classNames} ref={ref}>
      {children}
    </Component>
  );
};

export const BaseTypography: BaseTypographyComponent = React.forwardRef(TypographyComponent);
