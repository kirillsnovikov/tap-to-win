import React from 'react';
import { clsx } from 'clsx';

import { BaseTypography } from '../BaseTypography';

import type { PolymorphicRef } from '@src/shared/types/polymorphic';
import type { BaseTypographyProps } from '../BaseTypography/types';
import type { TypographyComponent, TypographyProps } from './types';

import styles from './Typography.module.css';

const TypographyBase = <T extends React.ElementType>(props: TypographyProps<T>, ref: PolymorphicRef<T>) => {
  const { weight = 'regular', uppercase = false, className, ...rest } = props;

  const weightClassName = styles[`${weight}`];
  const classNames = clsx(styles.typography, weightClassName, uppercase && styles.uppercase, className);
  const baseTypographyProps: BaseTypographyProps = {
    ...rest,
    ref,
    className: classNames,
  };

  return <BaseTypography {...baseTypographyProps} />;
};

export const Typography: TypographyComponent = React.forwardRef(TypographyBase);
