import { Form, Field } from 'react-final-form';
import { ButtonWrapper, FieldWrapper, FormWrapper, InputWrapper, LabelWrapper, MonthDisplayWrapper, SelectorContentWrapper, SelectorWrapper, YearDisplayWrapper, CurrencySign, InputValueWrapper } from './styles';
import { useEffect, useState } from 'react';


const formatMoney = (value: any) => {
    if (!value) return value;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2
    });
    return formatter.format(value);
};

const unformatMoney = (form: any) => (formattedValue: any) => {
    if (!formattedValue?.target?.value) return formattedValue;
    // Removing any non-digit characters and parse it to a float
    console.log({ DUPA: parseFloat(formattedValue?.target.value?.replace(/[^\d.-]/g, '')) })
    if (parseFloat(formattedValue?.target.value?.replace(/[^\d.-]/g, ''))) {
        form.change('amount', parseFloat(formattedValue?.target.value?.replace(/[^\d.-]/g, '')));
    }
};

export const FormContent = () => {
    const [monthAndYear, setMonthAndYear] = useState(new Date());
    const [previousButtonDisabled, setPreviousButtonDisabled] = useState(true);

    const months = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    useEffect(() => {
        if (monthAndYear.getMonth() === currentMonth && monthAndYear.getFullYear() === currentYear) {
            setPreviousButtonDisabled(true)
        }
    }, [monthAndYear])

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const onNextClick = () => {
        if (previousButtonDisabled) {
            setPreviousButtonDisabled(false)
        }

        if (monthAndYear.getMonth() === 11) {
            setMonthAndYear(new Date(monthAndYear.getFullYear() + 1, 0));
        } else {
            setMonthAndYear(new Date(monthAndYear.getFullYear(), monthAndYear.getMonth() + 1));
        }
    };

    const onPreviousClick = () => {
        if (monthAndYear.getMonth() === currentMonth && monthAndYear.getFullYear() === currentYear) {
            return; // Do not go to the previous month
        }

        if (monthAndYear.getMonth() === 0) {
            setMonthAndYear(new Date(monthAndYear.getFullYear() - 1, 11));
        } else {
            setMonthAndYear(new Date(monthAndYear.getFullYear(), monthAndYear.getMonth() - 1));
        }
    };

    const onSubmit = (values: any) => {
        console.log("Form values:", values);
    };



    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{ amount: null, month: 'August 2023' }}
            render={({ handleSubmit, form }: any) => {
                const onFocusAmount = unformatMoney(form);

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
                                                onFocus={onFocusAmount}
                                                placeholder="0.00"
                                            />
                                        </InputWrapper>
                                    )}
                                </Field>
                            </FieldWrapper>
                            <FieldWrapper>
                                <LabelWrapper>Every month until</LabelWrapper>
                                <SelectorWrapper>
                                    <ButtonWrapper onClick={onPreviousClick} disabled={previousButtonDisabled}>{'<'}</ButtonWrapper>
                                    <SelectorContentWrapper>
                                        <MonthDisplayWrapper>{months[monthAndYear.getMonth()]}</MonthDisplayWrapper>
                                        <YearDisplayWrapper>{monthAndYear.getFullYear()}</YearDisplayWrapper>
                                    </SelectorContentWrapper>
                                    <ButtonWrapper onClick={onNextClick}>{'>'}</ButtonWrapper>
                                </SelectorWrapper>
                            </FieldWrapper>
                        </FormWrapper>
                    </form >
                )
            }}
        />
    );
}
