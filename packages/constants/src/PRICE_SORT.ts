import type { StringKeyOf } from "@repo/types";

export const PRICE_SORT = {
  ASC: "ASC",
  DSC: "DSC",
} as const;

export type PriceSortKey = StringKeyOf<typeof PRICE_SORT>;
