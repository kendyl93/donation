import { MAX_VALUE, monthNames } from "../../constants";
import { currentMonthIndex, currentYear } from '../../utils';
import { formatCurrency, onlyDigits } from '../../../../utils';
import { useFormState } from "../../context/FormStateContext";
import { calculateAccumulatedAmount } from "./utils";

export const useFormContent = () => {
    const { setFormState } = useFormState();
    const initialValues = { amount: null, monthIndex: currentMonthIndex + 1, year: currentYear };

    const validate = (values: any) => { //TODO: not sure - to remove probably
        const errors = {
            amount: ''
        };

        if (values.amount && parseFloat(values.amount) > MAX_VALUE) {
            errors.amount = `Amount can't exceed ${MAX_VALUE}`;
        }

        return errors;
    }

    const onSubmit = (values: any) => {
        console.log("Form values:", values);
    };

    const handleFormValuesChange = ({ values }: any) => {
        if (!values) {
            return;
        }

        const unformattedMoney = onlyDigits(values.amount)
        const calaculatedWithMonths = calculateAccumulatedAmount({ ...values, amount: unformattedMoney })

        setFormState({ deadline: `${monthNames[values.monthIndex]} ${values.year}`, amount: formatCurrency(calaculatedWithMonths) });

        return values;  // This line is just to satisfy the expected return type
    }

    return {
        initialValues,
        handleFormValuesChange,
        validate,
        onSubmit
    };
}

