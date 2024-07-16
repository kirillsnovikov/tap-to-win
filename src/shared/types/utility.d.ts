declare const brand: unique symbol;

interface Brand<B> {
  [brand]: B;
}

type Branded<T, B extends string> = T & Brand<B>;

type Nullable<T> = T | null;
type Optional<T> = T | undefined;
type Maybe<T> = T | undefined | null;
type NonNullableProps<T> = { [K in keyof T]: T[K] extends Nullable<T[K]> ? NonNullable<T[K]> : T[K] };

type Unique<T> = T;
type List<T> = readonly T[];
type EmptyList = readonly [];
type EmptyString = '';
type NonEmptyList<T> = readonly [T, ...T[]];
type EmptyObject = {
  [K in string | number]: never;
};

type AsyncFn = (...args: unknown[]) => Promise<unknown>;
type NoOp = () => void;
