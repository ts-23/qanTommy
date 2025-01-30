import { formatCurrency } from "./formatCurrency";

export const formatSavings = (dollar: number) => {
  return `Save ${formatCurrency(dollar)}`;
};
