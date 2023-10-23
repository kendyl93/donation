import { Field } from 'react-final-form';
import { ArrowButtonWrapper, FieldWrapper, FormWrapper, InputWrapper, LabelWrapper, SelectorWrapper, CurrencySign, MonthYearDisplayWrapper, MonthWrapper, YearWrapper } from './styles';
import { useFormBody } from "./hooks"
import { formatDecimal } from '../../../../../utils';
import { locale, monthNames } from '../../../constants';

export const FormBody = () => {
    const {
        handleAmountOnFocus,
        handlePrevious,
        handleNext,
        handlePaste,
        onlyNumbers,
        preventNonNumericInput,
        isCurrentMonthAndYear,
        values: { monthIndex, year } = {}
    } = useFormBody()

    return (
        <FormWrapper>
            <FieldWrapper>
                <LabelWrapper>I can donate</LabelWrapper>
                <Field name="amount">
                    {() => {
                        return (
                            <InputWrapper>
                                <CurrencySign>{locale.US.currencySign}</CurrencySign>
                                <Field
                                    name="amount"
                                    component="input"
                                    type="text"
                                    format={formatDecimal}
                                    onFocus={handleAmountOnFocus}
                                    placeholder="0.00"
                                    onPaste={handlePaste}
                                    onKeyPress={preventNonNumericInput}
                                    parse={onlyNumbers}
                                    formatOnBlur
                                />
                            </InputWrapper>
                        )
                    }}
                </Field>
            </FieldWrapper>
            <FieldWrapper>
                <LabelWrapper>Every month until</LabelWrapper>
                <SelectorWrapper>
                    <ArrowButtonWrapper title={isCurrentMonthAndYear ? 'Only future months are allowed' : 'Previous month'} disabled={isCurrentMonthAndYear} onClick={handlePrevious}>&lt;</ArrowButtonWrapper>
                    <MonthYearDisplayWrapper>
                        <MonthWrapper>
                            {monthNames[monthIndex]}
                        </MonthWrapper>
                        <YearWrapper>
                            {year}
                        </YearWrapper>
                        <Field name="monthIndex" component="input" type="hidden" />
                        <Field name="year" component="input" type="hidden" />
                    </MonthYearDisplayWrapper>
                    <ArrowButtonWrapper title="Next month" onClick={handleNext}>&gt;</ArrowButtonWrapper>
                </SelectorWrapper>
            </FieldWrapper>
        </FormWrapper>
    )
}
