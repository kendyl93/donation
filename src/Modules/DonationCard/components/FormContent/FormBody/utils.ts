import { onlyDigits } from "../../../../../utils";

export const getNextMonthAndYear = (monthIndex: number, year: number): number[] => {
    let nextMonthIndex: number = monthIndex + 1;
    let nextYear: number = year;
    const isDecember = monthIndex === 11;

    if (isDecember) {
        nextMonthIndex = 0;
        nextYear = year + 1;
    }

    return [nextMonthIndex, nextYear]
}

export const setDecemberAndDeductYear = (form: any, selectedYear: number) => {
    const decemberIndex = 11;

    form.change('monthIndex', decemberIndex);
    form.change('year', selectedYear - 1);
}

export const withoutFormatting = (form: any) => (formattedValue: string) => {
    const withoutFormatting = onlyDigits(formattedValue);

    if (withoutFormatting) {
        form.change('amount', withoutFormatting);
    }
};