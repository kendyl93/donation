import { monthNames } from "../../constants";
import { useFormState } from "../../context/FormStateContext";
import { HighlightedTextWrapper, SummaryTextWrapper, SummaryWrapper } from "./styles";

export const Summary: React.FC = () => {
    const { formState } = useFormState();

    if (!formState?.amount || !formState?.deadline) {
        return <></>
    }

    return (
        <SummaryWrapper>
            <SummaryTextWrapper>
                You will be sending <HighlightedTextWrapper>{formState.amount}</HighlightedTextWrapper> every month,
                until <HighlightedTextWrapper>{monthNames[formState.monthIndex]} {formState.deadline}</HighlightedTextWrapper>. Thank you!
            </SummaryTextWrapper>
        </SummaryWrapper>
    );
};