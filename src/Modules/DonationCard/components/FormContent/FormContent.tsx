import { Form, FormSpy } from 'react-final-form';
import { monthNames } from '../../constants';
import { currentMonthIndex, currentYear } from '../../utils';
import { regex } from '../../../../utils';
import { useFormContent } from './hooks';
import { FormBody } from './FormBody';



export const FormContent = () => {
    const { initialValues, handleFormValuesChange, validate, onSubmit } = useFormContent();

    return (
        <Form
            validate={validate}
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={({ handleSubmit }: any) => <form onSubmit={handleSubmit}>
                <>
                    <FormBody />
                    <FormSpy
                        subscription={{ values: true }}
                        onChange={handleFormValuesChange}
                    />
                </>
            </form>}
        />
    );
}