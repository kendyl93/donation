import { renderHook, act } from '@testing-library/react';
import { useFormContent } from '../hooks';
import { useFormState } from "../../../context/FormStateContext";
import { calculateAccumulatedAmount, formatAmount, formatDeadline } from '../utils';
import { formatCurrency } from '../../../../../utils';
import { getNextDate } from '../../../utils';


jest.mock("../../../context/FormStateContext");

describe("useFormContent hook", () => {
    beforeEach(() => {
        (useFormState as jest.Mock).mockReturnValue({
            setFormState: jest.fn()
        });
    });

    it("should have correct initial values", () => {
        const [nextMonthIndex, year]  = getNextDate();
        const { result } = renderHook(() => useFormContent());

        expect(result.current.initialValues).toEqual({
            amount: null,
            monthIndex: nextMonthIndex,
            year
        });
    });

    it("should call setFormState with correct values on handleFormValuesChange", () => {
        const { result } = renderHook(() => useFormContent());
        const mockValues = { 
            amount: 10, 
            monthIndex: 5, 
            year: 2022 
        };
        const expectedFormattedAmount = formatAmount(mockValues.amount);
        const expectedAccumulatedAmount = calculateAccumulatedAmount({ 
            ...mockValues, 
            amount: expectedFormattedAmount 
        });

        act(() => {
            result.current.handleFormValuesChange({ values: mockValues });
        });

        expect(useFormState().setFormState).toHaveBeenCalledWith({
            deadline: formatDeadline(mockValues.monthIndex, mockValues.year),
            amount: formatCurrency(expectedAccumulatedAmount)
        });
    });
});
