import { useForm, useFormState as useReactFormState } from "react-final-form";
import { MAX_VALUE } from "../../../../constants";
import {
  currentMonthIndex,
  currentYear,
  getNextMonthAndYear,
} from "../../../../utils";
import { setDecemberAndDeductYear } from "../utils";
import { calculateMonthsDiff, onlyDigits } from "../../../../../../utils";
import { useState } from "react";

enum Arrows {
  LEFT = "left",
  RIGHT = "right",
}

export const useDateField = () => {
  const [disabledArrowButton, setDisabledArrowButton] = useState<Arrows | null>(
    null
  );
  const form = useForm();
  const { values } = useReactFormState();
  const { monthIndex, year, amount } = values;

  const isCurrentMonthAndYear: boolean =
    monthIndex === currentMonthIndex + 1 && year === currentYear;

  const handlePrevious = (): void => {
    if (isCurrentMonthAndYear) {
      setDisabledArrowButton(Arrows.LEFT);
      return;
    }

    const isCurrentMonthJanuary = monthIndex === 0;

    if (isCurrentMonthJanuary) {
      setDecemberAndDeductYear(form, year);
    } else {
      form.change("monthIndex", monthIndex - 1);
    }

    setDisabledArrowButton(null);
  };

  const nextTotalAmountReachedMaximum = (
    nextMonthIndex: number,
    nextYear: number,
    amount: string
  ): boolean => {
    const monthsLeftNext = calculateMonthsDiff(nextMonthIndex, nextYear);
    const totalAmountNext = onlyDigits(amount) * monthsLeftNext;

    return totalAmountNext > MAX_VALUE;
  };

  const handleNext = (): void => {
    const [nextMonthIndex, nextYear] = getNextMonthAndYear(monthIndex, year);
    const maybeNextTotalAmountReachedMaximum = nextTotalAmountReachedMaximum(
      nextMonthIndex,
      nextYear,
      amount
    );
    if (maybeNextTotalAmountReachedMaximum) {
      setDisabledArrowButton(Arrows.RIGHT);
      return;
    }

    form.change("monthIndex", nextMonthIndex);

    if (nextYear !== year) {
      form.change("year", nextYear);
    }

    setDisabledArrowButton(null);
  };

  return {
    disabledArrowButtonRight: disabledArrowButton === Arrows.RIGHT,
    disabledArrowButtonLeft: disabledArrowButton === Arrows.LEFT,
    handlePrevious,
    handleNext,
    values,
  };
};
