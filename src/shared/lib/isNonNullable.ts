export const isNonNullable = <T>(data: Maybe<T>): data is NonNullable<T> => data !== null && data !== undefined;
