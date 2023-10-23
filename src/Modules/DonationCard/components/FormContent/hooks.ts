import { MAX_VALUE, monthNames } from "../../constants";
import { currentMonthIndex, currentYear } from '../../utils';
import { formatCurrency, onlyDigits } from '../../../../utils';
import { useFormState } from "../../context/FormStateContext";
import { calculateAccumulatedAmount, formatAmount, formatDeadline } from "./utils";
import { FormValues, FormValuesChangeArgs } from "./types";

export const useFormContent = () => {
    const { setFormState } = useFormState();
    const nextMonth = currentMonthIndex + 1;
    const initialValues = { amount: null, monthIndex: nextMonth, year: currentYear };

    const onSubmit = (values: FormValues) => {
        console.log("Form values:", values);
    };

    const handleFormValuesChange = ({ values }: FormValuesChangeArgs) => {
        if (!values) {
            return;
        }

        const formattedAmount = formatAmount(values.amount ?? 0);
        const accumulatedAmount = calculateAccumulatedAmount({ ...values, amount: formattedAmount });

        setFormState({
            deadline: formatDeadline(values.monthIndex, values.year),
            amount: formatCurrency(accumulatedAmount)
        });

        return values;
    }

    return {
        initialValues,
        handleFormValuesChange,
        onSubmit
    };
}

