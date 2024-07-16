import { PolymorphicComponentPropsWithoutRef } from '@src/shared/types/polymorphic';

export type ContainerProps<T extends React.ElementType = 'section'> = PolymorphicComponentPropsWithoutRef<T, unknown>;
