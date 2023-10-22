import { useFormState } from "../../context/FormStateContext";
import { currentMonthIndex, currentYear } from "../../utils";
import { AmountWrapper, LabelWrapper, TotalAmountWrapper } from "./styles";

const formatMoney = (value: any) => {
    if (value === null || value === undefined) return value;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        minimumFractionDigits: 0,
        currency: 'USD'
    });
    return formatter.format(value);
};

const calculateAccumulatedAmount = (formState: any) => {
    // Calculate the difference in months
    const monthsDifference =
        (formState.year - currentYear) * 12 + formState.monthIndex - currentMonthIndex;

    // If the difference is negative or zero, that means the specified month and year are in the past or current month
    if (monthsDifference <= 0) {
        console.warn("Specified month and year are in the past or current month. Returning 0.");
        return 0;
    }

    // Calculate the accumulated amount
    const accumulatedAmount = formState.amount * monthsDifference;

    return accumulatedAmount;
}

export const TotalAmount = () => {
    const { formState } = useFormState();

    return (
        <TotalAmountWrapper>
            <LabelWrapper>Total amount</LabelWrapper>
            <AmountWrapper>{formatMoney(calculateAccumulatedAmount(formState) ?? 0)}</AmountWrapper>
        </TotalAmountWrapper>
    );
};