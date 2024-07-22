import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@src/shared/types/polymorphic';
import type { BaseBaseTypographyProps } from '../BaseTypography/types';
import type { TypographyWeight } from './constants';

type TypographyWeights = `${TypographyWeight}`;

type BaseTypographyProps = {
  weight?: TypographyWeights;
  uppercase?: boolean;
} & BaseBaseTypographyProps;

export type TypographyProps<T extends React.ElementType = 'p'> = PolymorphicComponentPropsWithRef<
  T,
  BaseTypographyProps
>;

export type TypographyComponent = <T extends React.ElementType = 'p'>(
  props: TypographyProps<T>,
  ref: PolymorphicRef<T>,
) => React.ReactNode;
