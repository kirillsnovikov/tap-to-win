import type { ButtonProps as HeadlessButtonProps } from '@headlessui/react';
// import type { PolymorphicRef } from '@src/shared/types/polymorphic';
import type { ButtonVariant, ButtonSize, ButtonColor } from './constants';

type ButtonVariants = `${ButtonVariant}`;
type ButtonSizes = `${ButtonSize}`;
type ButtonColors = `${ButtonColor}`;

export interface BaseButtonProps {
  size?: ButtonSizes;
  variant?: ButtonVariants;
  color?: ButtonColors;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  gradient?: boolean;
}

export type ButtonProps<T extends React.ElementType = 'button'> = HeadlessButtonProps<T> & BaseButtonProps;
