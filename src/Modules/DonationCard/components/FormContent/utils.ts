import { locale } from "../../constants";
import { currentMonthIndex, currentYear } from "../../utils";



export const calculateAccumulatedAmount = (values: any) => {
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