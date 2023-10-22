import { useFormState } from "../../context/FormStateContext";
import { AmountWrapper, LabelWrapper, TotalAmountWrapper } from "./styles";

const formatMoney = (value: any) => {
    if (value === null || value === undefined) return value;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        minimumFractionDigits: 2,
        currency: 'USD'
    });
    return formatter.format(value);
};

export const TotalAmount = () => {
    const { formState } = useFormState();

    return (
        <TotalAmountWrapper>
            <LabelWrapper>Total amount</LabelWrapper>
            <AmountWrapper>{formatMoney(formState?.amount ?? 0)}</AmountWrapper>
        </TotalAmountWrapper>
    );
};