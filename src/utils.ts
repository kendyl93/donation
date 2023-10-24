import { locale } from "./Modules/DonationCard/constants";

export const regex = {
  digitsOnly: /[^\d.-]/g,
  numeric: /[0-9]/,
  zeros: /^0+/,
  wholeNumbersOnly: /^\d+$/,
};

export const isNumber = (value: number | string | undefined | null) => {
  const strippedValue = String(value).replace(/,/g, "");

  return (
    !isNaN(Number(strippedValue)) && typeof Number(strippedValue) === "number"
  );
};

export const calculateMonthsDiff = (
  monthIndex: number,
  year: number
): number => {
  const currentMonthIndex = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  return (year - currentYear) * 12 + monthIndex - currentMonthIndex;
};

export const onlyDigits = (value: number | string): number => {
  if (!value) {
    return 0;
  }

  return parseFloat(value.toString().replace(regex.digitsOnly, ""));
};

export const formatDecimal = (value: number): string => {
  if (!value) return "";
  const formatter = new Intl.NumberFormat(locale.US.code, {
    style: "decimal",
    minimumFractionDigits: 0,
  });

  return formatter.format(onlyDigits(value));
};

export const formatCurrency = (value: number): string => {
  if (value === null || value === undefined) return value;

  const formatter = new Intl.NumberFormat(locale.US.code, {
    style: "currency",
    minimumFractionDigits: 0,
    currency: locale.US.currency,
  });
  return formatter.format(value);
};
