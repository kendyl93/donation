import { Field as ReactFinalFormField } from "react-final-form"
import { CurrencySign, InputWrapper } from "./styles"
import { Field } from "../../../../../../shared/Form/Field"
import { useCurrencyField } from "./hooks"
import { locale } from "../../../../constants"
import { formatDecimal } from "../../../../../../utils"

export const CurrencyField = () => {
    const {
        handleAmountOnFocus,
        handlePaste,
        onlyNumbers,
        preventNonNumericInput,
        placeholder
    } = useCurrencyField()

    return (
        <Field label="I can donate">
            <InputWrapper>
                <CurrencySign>{locale.US.currencySign}</CurrencySign>
                <ReactFinalFormField
                    name="amount"
                    component="input"
                    type="text"
                    format={formatDecimal}
                    onFocus={handleAmountOnFocus}
                    placeholder={placeholder}
                    onPaste={handlePaste}
                    onKeyPress={preventNonNumericInput}
                    parse={onlyNumbers}
                    formatOnBlur
                />
            </InputWrapper>
        </Field >
    )
}