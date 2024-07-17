import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@src/shared/types/polymorphic';

export type UnstyledButtonProps<T extends React.ElementType> = PolymorphicComponentPropsWithRef<T, unknown>;

export type UnstyledButtonComponent = <T extends React.ElementType = 'button'>(
  props: UnstyledButtonProps<T>,
  ref: PolymorphicRef<T>,
) => React.ReactNode;
