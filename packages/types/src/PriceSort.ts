import type { StringKeyOf } from "./StringKeyOf";

export const PriceSort = {
  ASC: "ASC",
  DSC: "DSC",
} as const;

export type PriceSortKey = StringKeyOf<typeof PriceSort>;
