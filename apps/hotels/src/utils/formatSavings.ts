import { formatCurrency } from "./formatCurrency";

export const formatSavings = (dollar: number) => {
  if (!dollar) return "";
  return `Save ${formatCurrency(dollar)}~`;
};
