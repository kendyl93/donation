import { Form, Field, FormSpy } from 'react-final-form';
import { ArrowButtonWrapper, FieldWrapper, FormWrapper, InputWrapper, LabelWrapper, MonthDisplayWrapper, SelectorWrapper, CurrencySign, MonthYearDisplayWrapper, MonthWrapper, YearWrapper } from './styles';
import { useFormState } from '../../context/FormStateContext';
import { MAX_VALUE, locale, monthNames } from '../../constants';
import { currentMonthIndex, currentYear } from '../../utils';
import { formatDecimal, isNumber, regex } from '../../../../utils';
import { useDonationForm, useFormContent } from './hooks';

const unformatMoney2 = (formattedValue: string) => {
    if (!formattedValue) return formattedValue;
    return parseFloat(formattedValue.toString().replace(regex.digitsOnly, ''));
};

const formatMoneyCurrency = (value: any) => {
    if (value === null || value === undefined) return value;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        minimumFractionDigits: 0,
        currency: 'USD'
    });
    return formatter.format(value);
};

const calculateAccumulatedAmount = (values: any) => {
    // Calculate the difference in months
    const monthsDifference =
        (values.year - currentYear) * 12 + values.monthIndex - currentMonthIndex;

    // If the difference is negative or zero, that means the specified month and year are in the past or current month
    if (monthsDifference <= 0) {
        console.warn("Specified month and year are in the past or current month. Returning 0.");
        return 0;
    }

    // Calculate the accumulated amount
    const accumulatedAmount = values.amount * monthsDifference;

    return accumulatedAmount;
}

export const FormContent = () => {
    const { initialValues, setFormState, validate, onSubmit } = useFormContent();

    return (
        <Form
            validate={validate}
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={({ handleSubmit }: any) => <form onSubmit={handleSubmit}>
                <>
                    <DonationFormContent />
                    <FormSpy
                        subscription={{ values: true }}
                        onChange={({ values }) => {
                            if (!values) {
                                return;
                            }

                            const unformattedMoney = unformatMoney2(values.amount)
                            const calaculatedWithMonths = calculateAccumulatedAmount({ ...values, amount: unformattedMoney })

                            setFormState({ deadline: `${monthNames[values.monthIndex]} ${values.year}`, amount: formatMoneyCurrency(calaculatedWithMonths) });

                            return values;  // This line is just to satisfy the expected return type
                        }}
                    />
                </>
            </form>}
        />
    );
}

const DonationFormContent = () => {
    const {
        handleAmountOnFocus,
        handlePrevious,
        handleNext,
        handlePaste,
        onlyNumbers,
        preventNonNumericInput,
        isCurrentMonthAndYear,
        values: { monthIndex, year } = {}
    } = useDonationForm()

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
