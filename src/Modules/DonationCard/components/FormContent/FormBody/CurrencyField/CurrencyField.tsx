import { InputWrapper, StyledField } from "./styles";
import { Field } from "../../../../../../shared/Form/Field";
import { useCurrencyField } from "./hooks";
import { formatDecimal } from "../../../../../../utils";
import { DollarSign } from "../../../../../../shared/DollarSign";

export const CurrencyField = () => {
  const {
    handleAmountOnFocus,
    handlePaste,
    onlyNumbers,
    preventNonNumericInput,
    placeholder,
  } = useCurrencyField();

  return (
    <>
      <Field label="I can donate">
        <InputWrapper>
          <DollarSign />
          <StyledField
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
      </Field>
    </>
  );
};
