import { useForm, useFormState as useReactFormState } from "react-final-form";
import { MAX_VALUE_LENGTH } from "../../../../constants";
import { withoutFormatting } from "../utils";
import { ChangeEvent } from "react";
import { isNumber, regex } from "../../../../../../utils";

export const useCurrencyField = () => {
    const placeholder = '0.00';
    const form = useForm();
    const { values } = useReactFormState();
    const { amount } = values;

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

    return {
        handleAmountOnFocus,
        handlePaste,
        onlyNumbers,
        preventNonNumericInput,
        placeholder
    }
}