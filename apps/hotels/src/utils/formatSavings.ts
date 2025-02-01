import { formatCurrency } from "./formatCurrency";

// can potentially live in the utils package depending on your design decisions
export const formatSavings = (dollar: number) => {
  if (!dollar) return "";
  return `Save ${formatCurrency(dollar)}~`;
};
