import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@src/shared/types/polymorphic';
import type { CrossAxisAlignment, FlexFlow, MainAxisAlignment, gapSizes } from './constants';

type Flow = `${FlexFlow}`;
type MainAxis = `${MainAxisAlignment}`;
type CrossAxis = `${CrossAxisAlignment}`;
type GapSize = (typeof gapSizes)[number];

interface BaseFlexProps {
  flow?: Flow;
  mainAxis?: MainAxis;
  crossAxis?: CrossAxis;
  rowGap?: GapSize;
  columnGap?: GapSize;
  gap?: GapSize;
  center?: boolean;
}

export type FlexProps<T extends React.ElementType> = PolymorphicComponentPropsWithRef<T, BaseFlexProps>;

export type FlexComponent = <T extends React.ElementType = 'div'>(
  props: FlexProps<T>,
  ref: PolymorphicRef<T>,
) => React.ReactNode;
