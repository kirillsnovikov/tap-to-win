import clsx from 'clsx';
import React from 'react';

import { capitalize } from '@src/shared/lib/capitalize';
import { Button as HeadlessButton } from '@headlessui/react';

import { unstyledButtonClassName } from '../UnstyledButton';

import type { ForwardRefRenderFunction } from 'react';
import type { ButtonProps } from './types';

import styles from './Button.module.css';

const defaultComponent = 'button';

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = function ButtonBase(props, ref) {
  const {
    as,
    fullWidth = false,
    loading = false,
    gradient = false,
    size = 'm',
    variant = 'filled',
    color = 'primary',
    className,
    icon,
    disabled,
    ...rest
  } = props;

  const asComponent = disabled ? defaultComponent : as;

  const variantClassName = styles[`${variant}`];
  const colorClassName = gradient ? styles[`gradient${capitalize(color)}`] : styles[`${color}`];
  const sizeClassName = styles[`button${capitalize(size)}`];

  const classNames = clsx(
    styles.button,
    fullWidth && styles.fullWidth,
    loading && styles.loading,
    variantClassName,
    colorClassName,
    sizeClassName,
    className,
    unstyledButtonClassName,
  );

  return <HeadlessButton {...rest} ref={ref} as={asComponent} className={classNames} disabled={disabled} />;
};

export const Button = React.forwardRef(ButtonBase);
