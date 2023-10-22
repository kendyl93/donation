import { Form, Field, FormSpy } from 'react-final-form';
import { ArrowButtonWrapper, FieldWrapper, FormWrapper, InputWrapper, LabelWrapper, MonthDisplayWrapper, SelectorWrapper, CurrencySign, MonthYearDisplayWrapper, MonthWrapper, YearWrapper } from './styles';
import { useFormState } from '../../context/FormStateContext';
import { monthNames } from '../../constants';
import { currentMonthIndex, currentYear } from '../../utils';

const calculateMonthsLeft = (monthIndex: number, year: number) => {
    return (year - currentYear) * 12 + monthIndex - currentMonthIndex;
};

const isNumber = (value: any) => {
    const strippedValue = String(value).replace(/,/g, '');
    return !isNaN(Number(strippedValue)) && typeof Number(strippedValue) === 'number';
}

const MAX_VALUE = 1000000;

const formatMoney = (value: any) => {
    if (!value) return value;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2
    });
    return formatter.format(value);
};

const unformatMoney = (form: any) => (formattedValue: string) => {
    if (!formattedValue) return formattedValue;
    // Removing any non-digit characters and parse it to a float
    if (parseFloat(formattedValue.toString().replace(/[^\d.-]/g, ''))) {
        form.change('amount', parseFloat(formattedValue.toString().replace(/[^\d.-]/g, '')));
    }
};

const unformatMoney2 = (formattedValue: string) => {

    if (!formattedValue) return formattedValue;
    return parseFloat(formattedValue.toString().replace(/[^\d.-]/g, ''));

};

export const FormContent = () => {
    const { setFormState } = useFormState();

    const onSubmit = (values: any) => {
        console.log("Form values:", values);
    };

    const onlyNumbers = (value: string) => {
        return value.replace(/[^\d]/g, '');
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const pastedData = e.clipboardData.getData('text');
        if (pastedData && (!/^\d+$/.test(pastedData) || /^0+/.test(pastedData))) {
            e.preventDefault();
        }
    };

    const validate = (values: any) => {
        const errors = {
            amount: ''
        };

        if (values.amount && parseFloat(values.amount) > MAX_VALUE) {
            errors.amount = `Amount can't exceed ${MAX_VALUE}`;
        }

        return errors;
    }



    return (
        <Form
            validate={validate}
            onSubmit={onSubmit}
            initialValues={{ amount: null, monthIndex: currentMonthIndex + 1, year: currentYear }}
            render={({ handleSubmit, form, values: { amount, monthIndex, year } }: any) => {
                const onFocusAmount = unformatMoney(form);

                const handlePrevious = () => {
                    if (monthIndex === 0) {
                        form.change('monthIndex', 11);
                        form.change('year', year - 1);
                    } else {
                        form.change('monthIndex', monthIndex - 1);
                    }
                };

                const handleNext = () => {
                    // Calculate the next month and year
                    let nextMonthIndex, nextYear;
                    if (monthIndex === 11) {
                        nextMonthIndex = 0;
                        nextYear = year + 1;
                    } else {
                        nextMonthIndex = monthIndex + 1;
                        nextYear = year;
                    }

                    // Check if the totalAmount for next month exceeds MAX_VALUE
                    const monthsLeftNext = calculateMonthsLeft(nextMonthIndex, nextYear);
                    const totalAmountNext = Number(unformatMoney2(form.getFieldState('amount').value)) * monthsLeftNext;

                    if (totalAmountNext > MAX_VALUE) {
                        alert("Advancing to the next month would exceed the maximum amount.");
                        return; // Prevent the advancement to the next month
                    }

                    // Continue to advance to the next month
                    form.change('monthIndex', nextMonthIndex);
                    form.change('year', nextYear);
                };




                const isCurrentMonthAndYear = monthIndex === currentMonthIndex + 1 && year === currentYear;
                return (
                    <form onSubmit={handleSubmit}>
                        <FormWrapper>
                            <FieldWrapper>
                                <LabelWrapper>I can donate</LabelWrapper>
                                <Field name="amount">
                                    {() => {
                                        const preventNonNumericInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
                                            if ((isNumber(amount) && amount?.length > 6) || !/[0-9]/.test(e.key) || (e.key === '0' && !e.currentTarget.value)) {
                                                console.log({ amount })
                                                e.preventDefault();
                                            }
                                        };

                                        return (
                                            <InputWrapper>
                                                <CurrencySign>$</CurrencySign>
                                                <Field
                                                    name="amount"
                                                    component="input"
                                                    type="text"
                                                    format={formatMoney}
                                                    formatOnBlur
                                                    onFocus={(event: any) => onFocusAmount(event?.target?.value)}
                                                    placeholder="0.00"
                                                    onPaste={handlePaste}
                                                    onKeyPress={preventNonNumericInput}
                                                    parse={onlyNumbers}
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
                        <FormSpy
                            subscription={{ values: true }}
                            onChange={({ values }) => {
                                if (!values) {
                                    return;
                                }

                                const unformatted = unformatMoney2(values.amount)

                                setFormState({ ...values, amount: unformatted });

                                return values;  // This line is just to satisfy the expected return type
                            }}
                        />
                    </form >
                )
            }}
        />
    );
}
