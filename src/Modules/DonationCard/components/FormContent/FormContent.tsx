import { Form, Field, FormSpy } from 'react-final-form';
import { ArrowButtonWrapper, FieldWrapper, FormWrapper, InputWrapper, LabelWrapper, MonthDisplayWrapper, SelectorWrapper, CurrencySign, MonthYearDisplayWrapper, MonthWrapper, YearWrapper } from './styles';
import { useFormState } from '../../context/FormStateContext';
import { useEffect, useState } from 'react';
import { monthNames } from '../../constants';
import { currentMonthIndex, currentYear } from '../../utils';


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

const unformatMoney2 = (formattedValue: string, source?: string) => {

    if (!formattedValue) return formattedValue;
    return parseFloat(formattedValue.toString().replace(/[^\d.-]/g, ''));

};

export const FormContent = () => {
    const { setFormState } = useFormState();
    // const [previousButtonDisabled, setPreviousButtonDisabled] = useState(true);

    // useEffect(() => {
    //     if (monthAndYear.getMonth() === currentMonth && monthAndYear.getFullYear() === currentYear) {
    //         setPreviousButtonDisabled(true)
    //     }
    // }, [monthAndYear])




    const onSubmit = (values: any) => {
        console.log("Form values:", values);
    };

    const onlyNumbers = (value: string) => {
        // This will only return numbers, and will ignore any other character.
        return value.replace(/[^\d]/g, '');
    };


    const preventNonNumericInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/[0-9]/.test(e.key) || (e.key === '0' && !e.currentTarget.value)) {
            e.preventDefault();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const pastedData = e.clipboardData.getData('text');
        if (pastedData && (!/^\d+$/.test(pastedData) || /^0+/.test(pastedData))) {
            e.preventDefault();
        }
    };

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{ amount: null, monthIndex: new Date().getMonth(), year: new Date().getFullYear() }}
            render={({ handleSubmit, form, values: { monthIndex, year } }: any) => {
                const onFocusAmount = unformatMoney(form);

                const handlePrevious = () => {
                    if (monthIndex === currentMonthIndex && currentYear && year) {
                        return;
                    }

                    if (monthIndex === 0) {
                        form.change('monthIndex', 11);
                        form.change('year', year - 1);
                    } else {
                        form.change('monthIndex', monthIndex - 1);
                    }
                };

                const handleNext = () => {
                    if (monthIndex === 11) {
                        form.change('monthIndex', 0);
                        form.change('year', year + 1);
                    } else {
                        form.change('monthIndex', monthIndex + 1);
                    }
                };

                const isCurrentMonthAndYear = monthIndex === currentMonthIndex && year === currentYear;
                return (
                    <form onSubmit={handleSubmit}>
                        <FormWrapper>
                            <FieldWrapper>
                                <LabelWrapper>I can donate</LabelWrapper>
                                <Field name="amount">
                                    {({ input }: any) => (
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
                                    )}
                                </Field>
                            </FieldWrapper>
                            <FieldWrapper>
                                <LabelWrapper>Every month until</LabelWrapper>
                                <SelectorWrapper>
                                    <ArrowButtonWrapper title={isCurrentMonthAndYear ? 'Cannot set past date' : 'Previous month'} disabled={isCurrentMonthAndYear} onClick={handlePrevious}>&lt;</ArrowButtonWrapper>
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
                                console.log({ subsc: values })
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
