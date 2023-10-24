import { formatCurrency } from '../../../../utils';
import { useFormState } from "../../context/FormStateContext";
import { calculateAccumulatedAmount, formatAmount, formatDeadline } from "./utils";
import { FormValues, FormValuesChangeArgs } from "./types";
import { getNextDate } from '../../utils';

export const useFormContent = () => {
    const { setFormState } = useFormState();
    const [nextMonthIndex, year] = getNextDate();
    const initialValues = { amount: null, monthIndex: nextMonthIndex, year };

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

