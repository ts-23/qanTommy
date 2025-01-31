// this can be in a new package like type-utils
export type StringKeyOf<BaseType> =
  `${Extract<keyof BaseType, string | number>}`;
