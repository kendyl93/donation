import { useForm, useFormState as useReactFormState } from "react-final-form";
import { MAX_VALUE, MAX_VALUE_LENGTH } from "../../constants";
import { currentMonthIndex, currentYear } from '../../utils';
import { calculateMonthsDiff, isNumber, onlyDigits, regex } from '../../../../utils';
import { ChangeEvent } from "react";
import { getNextMonthAndYear, setDecemberAndDeductYear, withoutFormatting } from "./utils";
import { useFormState } from "../../context/FormStateContext";

export const useDonationForm = () => {
    const form = useForm();
    const { values } = useReactFormState();
    const { monthIndex, year, amount } = values;

    const formAmountWithoutFormatting = withoutFormatting(form);

    const handleAmountOnFocus = (event: ChangeEvent<HTMLInputElement>) => formAmountWithoutFormatting(event?.target?.value)

    const onlyNumbers = (value: string): number => {
        return Number(value.replace(regex.digitsOnly, ''));
    };

    const preventNonNumericInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const keyPressed = event.key;
        const maybeReachedMaximum = (isNumber(amount) && amount?.toString()?.length > MAX_VALUE_LENGTH);
        const isKeyPressedNumeric = regex.numeric.test(keyPressed);

        if (maybeReachedMaximum || !isKeyPressedNumeric || (keyPressed === '0' && !event.currentTarget.value)) {
            event.preventDefault();
        }
    };

    const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        const pastedData = event.clipboardData.getData('text');
        const maybeZeros = regex.zeros.test(pastedData);
        const maybeDataIsNumeric = regex.wholeNumbersOnly.test(pastedData)

        if (pastedData && (!maybeDataIsNumeric || maybeZeros)) {
            event.preventDefault();
        }
    };

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
        handleAmountOnFocus,
        handlePrevious,
        handleNext,
        handlePaste,
        onlyNumbers,
        preventNonNumericInput,
        isCurrentMonthAndYear,
        values
    }
}

export const useFormContent = () => {
    const { setFormState } = useFormState();
    const initialValues = { amount: null, monthIndex: currentMonthIndex + 1, year: currentYear };

    const validate = (values: any) => {
        const errors = {
            amount: ''
        };

        if (values.amount && parseFloat(values.amount) > MAX_VALUE) {
            errors.amount = `Amount can't exceed ${MAX_VALUE}`;
        }

        return errors;
    }

    const onSubmit = (values: any) => {
        console.log("Form values:", values);
    };


    return {
        initialValues,
        setFormState,
        validate,
        onSubmit
    };
}