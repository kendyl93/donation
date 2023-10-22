import { monthNames } from "../../constants";
import { useFormState } from "../../context/FormStateContext";
import { HighlightedTextWrapper, SummaryTextWrapper, SummaryWrapper } from "./styles";

const formatMoney = (value: any) => {
    if (value === null || value === undefined) return value;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        minimumFractionDigits: 2,
        currency: 'USD'
    });
    return formatter.format(value);
};

export const Summary: React.FC = () => {
    const { formState } = useFormState();

    return (
        <SummaryWrapper>
            <SummaryTextWrapper>
                You <HighlightedTextWrapper>will be sending {formatMoney(formState?.amount ?? 0)}</HighlightedTextWrapper> every month,
                until <HighlightedTextWrapper>{monthNames[formState.monthIndex]} {formState.year}</HighlightedTextWrapper>. Thank you!
            </SummaryTextWrapper>
        </SummaryWrapper>
    );
};