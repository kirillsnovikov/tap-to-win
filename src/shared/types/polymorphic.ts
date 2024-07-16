type OwnProps<T> = { [K in keyof T]: T[K] };

// type PropsOf<T extends React.ElementType> = React.ComponentPropsWithRef<T>

// export type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref']

// export type PolymorphicProps<T extends React.ElementType = React.ElementType, TProps = {}> = {
//   as?: T
// } & OwnProps<TProps> &
//   Omit<PropsOf<T>, keyof TProps | 'as' | 'ref'> & { ref?: PolymorphicRef<T> }

type BasePropsWithRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>;
type BasePropsWithoutRef<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;

export type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'];

interface AsProp<T extends React.ElementType> {
  as?: T | React.ElementType;
}

export type OverrideableProps<TExtendedProps, TOverrideProps> = TOverrideProps &
  Omit<TExtendedProps, keyof TOverrideProps>;

type InheritableElementPropsWithRef<T extends React.ElementType, TProps> = OverrideableProps<
  BasePropsWithRef<T>,
  TProps
>;
type InheritableElementPropsWithoutRef<T extends React.ElementType, TProps> = OverrideableProps<
  BasePropsWithoutRef<T>,
  TProps
>;

type PropsWithRef<T extends React.ElementType, TProps> = InheritableElementPropsWithRef<T, TProps & AsProp<T>>;
type PropsWithoutRef<T extends React.ElementType, TProps> = InheritableElementPropsWithoutRef<T, TProps & AsProp<T>>;

export type PolymorphicComponentPropsWithRef<T extends React.ElementType, TProps> = PropsWithRef<
  T,
  OwnProps<TProps>
> & { ref?: PolymorphicRef<T> };

export type PolymorphicComponentPropsWithoutRef<T extends React.ElementType, TProps> = PropsWithoutRef<T, TProps>;
