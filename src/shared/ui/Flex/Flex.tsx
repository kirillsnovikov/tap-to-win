import React from 'react';
import { clsx } from 'clsx';

import { capitalize } from '@src/shared/lib/capitalize';
import { PolymorphicRef } from '@src/shared/types/polymorphic';

import type { FlexComponent, FlexProps } from './types';

import styles from './Flex.module.css';

function FlexBase<T extends React.ElementType = 'div'>(props: FlexProps<T>, ref: PolymorphicRef<T>) {
  const { as, center, crossAxis, mainAxis, flow, columnGap, gap, rowGap, children, className, ...rest } = props;

  const flowClassName = flow && styles[`${flow}`];
  const crossAxisClassName = crossAxis && styles[`cross${capitalize(crossAxis)}`];
  const mainAxisClassName = mainAxis && styles[`main${capitalize(mainAxis)}`];
  const gapClassName = gap && styles[`gap${gap}`];
  const columnGapClassName = columnGap && styles[`columnGap${columnGap}`];
  const rowGapClassName = rowGap && styles[`rowGap${rowGap}`];

  const classNames = clsx(
    styles.flex,
    crossAxisClassName,
    mainAxisClassName,
    flowClassName,
    gapClassName,
    columnGapClassName,
    rowGapClassName,
    center && styles.center,
    className,
  );
  const Component = as ?? 'div';

  return (
    <Component {...rest} ref={ref} className={classNames}>
      {children}
    </Component>
  );
}

export const Flex: FlexComponent = React.forwardRef(FlexBase);
