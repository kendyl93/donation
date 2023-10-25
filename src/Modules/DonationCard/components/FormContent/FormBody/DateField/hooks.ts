import { useForm, useFormState as useReactFormState } from "react-final-form";
import { MAX_VALUE_LENGTH } from "../../../../constants";
import {
  currentMonthIndex,
  currentYear,
  getNextMonthAndYear,
} from "../../../../utils";
import { setDecemberAndDeductYear } from "../utils";
import { calculateMonthsDiff, onlyDigits } from "../../../../../../utils";
import { useEffect, useMemo, useState } from "react";

const isCurrentMonthAndYear = (monthIndex: number, year: number): boolean =>
  monthIndex === currentMonthIndex + 1 && year === currentYear;

export const useDateField = () => {
  const [disabledArrowButtonRight, setDisabledArrowButtonRight] =
    useState<boolean>();
  const [disabledArrowButtonLeft, setDisabledArrowButtonLeft] =
    useState<boolean>();
  const form = useForm();
  const { values } = useReactFormState();
  const { monthIndex, year, amount } = values;
  const isCurrentDate = useMemo(
    () => isCurrentMonthAndYear(monthIndex, year),
    [monthIndex, year]
  );
  const [nextMonthIndex, nextYear] = useMemo(
    () => getNextMonthAndYear(monthIndex, year),
    [monthIndex, year]
  );

  const nextTotalAmountReachedMaximum = (
    nextMonthIndex: number,
    nextYear: number,
    amount: string
  ): boolean => {
    const monthsLeftNext = calculateMonthsDiff(nextMonthIndex, nextYear);
    const totalAmountNext = onlyDigits(amount) * monthsLeftNext;

    return totalAmountNext.toString().length > MAX_VALUE_LENGTH;
  };

  const maybeNextTotalReachedMax = useMemo(
    () => nextTotalAmountReachedMaximum(nextMonthIndex, nextYear, amount),
    [nextMonthIndex, nextYear, amount]
  );

  useEffect(() => {
    if (isCurrentDate) {
      setDisabledArrowButtonLeft(true);
    } else if (disabledArrowButtonLeft) {
      setDisabledArrowButtonLeft(undefined);
    }

    if (maybeNextTotalReachedMax) {
      setDisabledArrowButtonRight(true);
    } else if (
      disabledArrowButtonRight &&
      onlyDigits(amount).toString.length < MAX_VALUE_LENGTH
    ) {
      setDisabledArrowButtonRight(undefined);
    }
  }, [
    isCurrentDate,
    maybeNextTotalReachedMax,
    amount,
    disabledArrowButtonLeft,
    disabledArrowButtonRight,
  ]);

  const handlePrevious = (): void => {
    if (isCurrentMonthAndYear(monthIndex, year)) {
      return;
    }

    const isCurrentMonthJanuary = monthIndex === 0;

    if (isCurrentMonthJanuary) {
      setDecemberAndDeductYear(form, year);
    } else {
      form.change("monthIndex", monthIndex - 1);
    }
  };

  const handleNext = (): void => {
    if (maybeNextTotalReachedMax) {
      return;
    }

    form.change("monthIndex", nextMonthIndex);

    if (nextYear !== year) {
      form.change("year", nextYear);
    }
  };

  return {
    disabledArrowButtonRight,
    disabledArrowButtonLeft,
    handlePrevious,
    handleNext,
    values,
  };
};
