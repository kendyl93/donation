import { renderHook, act } from "@testing-library/react";
import { useCurrencyField } from "../hooks";
import { useForm, useFormState } from "react-final-form";
import { formMock } from "../../../../../../../tests/mocks/form";

jest.mock("react-final-form", () => {
  return {
    useForm: jest.fn(),
    useFormState: jest.fn(),
  };
});

describe("useCurrencyField hook", () => {
  beforeEach(() => {
    (useForm as jest.Mock).mockReturnValue(formMock);
    (useFormState as jest.Mock).mockReturnValue({
      values: { amount: "1234" },
    });
  });

  it("should handle focus on amount", () => {
    const { result } = renderHook(() => useCurrencyField());
    const mockEvent = {
      target: {
        value: "1000",
      },
    };
    act(() => {
      result.current.handleAmountOnFocus(mockEvent as any);
    });
  });

  it("should return only numbers from a string", () => {
    const { result } = renderHook(() => useCurrencyField());
    expect(result.current.onlyNumbers("123abc")).toBe(123);
  });

  it("should prevent non-numeric input", () => {
    const { result } = renderHook(() => useCurrencyField());
    const mockEvent = {
      key: "a",
      preventDefault: jest.fn(),
      currentTarget: {
        value: "123",
      },
    };
    act(() => {
      result.current.preventNonNumericInput(mockEvent as any);
    });
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });

  it("should handle paste event", () => {
    const { result } = renderHook(() => useCurrencyField());
    const mockEvent = {
      clipboardData: {
        getData: jest.fn().mockReturnValue("abc"),
      },
      preventDefault: jest.fn(),
    };
    act(() => {
      result.current.handlePaste(mockEvent as any);
    });
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});
