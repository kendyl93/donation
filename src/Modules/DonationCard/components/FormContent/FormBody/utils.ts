import { onlyDigits } from "../../../../../utils";

export const setDecemberAndDeductYear = (form: any, selectedYear: number) => {
  const decemberIndex = 11;

  form.change("monthIndex", decemberIndex);
  form.change("year", selectedYear - 1);
};

export const withoutFormatting = (form: any) => (formattedValue: string) => {
  const withoutFormatting = onlyDigits(formattedValue);

  if (withoutFormatting) {
    form.change("amount", withoutFormatting);
  }
};
