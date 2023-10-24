import { type FormApi } from "final-form";
import { onlyDigits } from "../../../../../utils";

export const setDecemberAndDeductYear = (
  form: FormApi,
  selectedYear: number
) => {
  const decemberIndex = 11;

  form.change("monthIndex", decemberIndex);
  form.change("year", selectedYear - 1);
};

export const withoutFormatting =
  (form: FormApi) => (formattedValue: string) => {
    const withoutFormatting = onlyDigits(formattedValue);

    if (withoutFormatting) {
      form.change("amount", withoutFormatting);
    }
  };
