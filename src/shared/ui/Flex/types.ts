import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@src/shared/types/polymorphic';

import type { CrossAxisAlignment, FlexFlow, MainAxisAlignment, gapSizes } from './constants';

type FlexFlows = `${FlexFlow}`;
type MainAxisAlignments = `${MainAxisAlignment}`;
type CrossAxisAlignments = `${CrossAxisAlignment}`;
type GapSize = (typeof gapSizes)[number];

interface BaseFlexProps {
  flow?: FlexFlows;
  mainAxis?: MainAxisAlignments;
  crossAxis?: CrossAxisAlignments;
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
