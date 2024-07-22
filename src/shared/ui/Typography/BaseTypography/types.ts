import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@src/shared/types/polymorphic';
import type { BaseTypographyVariant, BaseTypographyColor } from './constants';

type BaseTypographyVariants = `${BaseTypographyVariant}`;
type BaseTypographyColors = `${BaseTypographyColor}`;

export interface BaseBaseTypographyProps {
  color?: BaseTypographyColors;
  variant?: BaseTypographyVariants;
  center?: boolean;
  ellipsis?: boolean;
}

export type BaseTypographyProps<T extends React.ElementType = 'p'> = PolymorphicComponentPropsWithRef<
  T,
  BaseBaseTypographyProps
>;

export type BaseTypographyComponent = <T extends React.ElementType = 'p'>(
  props: BaseTypographyProps<T>,
  ref: PolymorphicRef<T>,
) => React.ReactNode;
