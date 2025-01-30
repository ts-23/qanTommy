type FormatCurrencyOptions = {
  maximumFractionDigits: Intl.NumberFormatOptions["maximumFractionDigits"];
};

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
