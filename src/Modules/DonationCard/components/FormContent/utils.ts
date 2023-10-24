import { calculateMonthsDiff, onlyDigits } from "../../../../utils";
import { monthNames } from "../../constants";
import { type FormValues } from "./types";

export const calculateAccumulatedAmount = ({
  monthIndex,
  year,
  amount,
}: FormValues): number => {
  if (!amount) {
    return 0;
  }

  const monthsDifference = calculateMonthsDiff(monthIndex, year);

  if (monthsDifference <= 0) {
    console.warn(
      "Specified month and year are in the past or current month. Returning 0."
    );
    return 0;
  }

  const accumulatedAmount = amount * monthsDifference;

  return accumulatedAmount;
};

export const formatAmount = (amount: number) => onlyDigits(amount);
export const formatDeadline = (monthIndex: number, year: number) =>
  `${monthNames[monthIndex]} ${year}`;
