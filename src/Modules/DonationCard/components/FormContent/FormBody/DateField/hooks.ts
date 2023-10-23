import { useForm, useFormState as useReactFormState } from "react-final-form";
import { MAX_VALUE } from "../../../../constants";
import { currentMonthIndex, currentYear } from "../../../../utils";
import { getNextMonthAndYear, setDecemberAndDeductYear } from "../utils";
import { calculateMonthsDiff, onlyDigits } from "../../../../../../utils";

export const useDateField = () => {
    const form = useForm();
    const { values } = useReactFormState();
    const { monthIndex, year, amount } = values;

    const handlePrevious = (): void => {
        const isCurrentMonthJanuary = monthIndex === 0

        if (isCurrentMonthJanuary) {
            setDecemberAndDeductYear(form, year);
        } else {
            form.change('monthIndex', monthIndex - 1);
        }
    };

    const nextTotalAmountReachedMaximum = (nextMonthIndex: number, nextYear: number, amount: string): boolean => {
        const monthsLeftNext = calculateMonthsDiff(nextMonthIndex, nextYear);
        const totalAmountNext = onlyDigits(amount) * monthsLeftNext;

        return totalAmountNext > MAX_VALUE;
    }

    const handleNext = (): void => {
        const [nextMonthIndex, nextYear] = getNextMonthAndYear(monthIndex, year);
        const maybeNextTotalAmountReachedMaximum = nextTotalAmountReachedMaximum(nextMonthIndex, nextYear, amount)

        if (maybeNextTotalAmountReachedMaximum) {
            return;
        }

        form.change('monthIndex', nextMonthIndex);
        form.change('year', nextYear);
    };


    const isCurrentMonthAndYear: boolean = monthIndex === currentMonthIndex + 1 && year === currentYear;

    return {
        handlePrevious,
        handleNext,
        isCurrentMonthAndYear,
        values
    }
}