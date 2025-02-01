type FormatCurrencyOptions = {
  maximumFractionDigits: Intl.NumberFormatOptions["maximumFractionDigits"];
};

// can potentially live in the utils package depending on your design decisions
export const formatCurrency = (
  value: number,
  options?: FormatCurrencyOptions
) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: options?.maximumFractionDigits ?? 2,
  });

  return formatter.format(value);
};
