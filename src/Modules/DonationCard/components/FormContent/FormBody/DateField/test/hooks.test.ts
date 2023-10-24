import { renderHook, act } from "@testing-library/react";
import { mockDate, restoreDate } from "../../../../../../../tests/utils";
import { useDateField } from "../hooks";
import { useForm, useFormState } from "react-final-form";
import { mockForm } from "../../../../../../../tests/mocks/form";

jest.mock("react-final-form", () => {
  return {
    useForm: jest.fn(),
    useFormState: jest.fn(() => ({ values: mockForm.values })),
  };
});

describe("useDateField hook", () => {
  afterEach(() => {
    restoreDate();
  });

  it("should handle previous date change when month is January", () => {
    const initialState = {
      monthIndex: 0, // January
      year: 2022,
      amount: "1234",
    };
    (useForm as jest.Mock).mockReturnValue(mockForm);
    (useFormState as jest.Mock).mockReturnValueOnce({ values: initialState });

    const { result } = renderHook(() => useDateField());

    act(() => {
      result.current.handlePrevious();
    });

    const formMock = (useForm as jest.Mock).mock.results[0].value;
    expect(formMock.change).toHaveBeenCalledTimes(2);
    expect(formMock.change).toHaveBeenNthCalledWith(1, "monthIndex", 11); // december
    expect(formMock.change).toHaveBeenNthCalledWith(2, "year", 2021); // previous year
  });

  it("should handle previous date change for months other than January", () => {
    const initialState = {
      monthIndex: 5,
      year: 2022,
      amount: "1234",
    };
    (useForm as jest.Mock).mockReturnValue(mockForm);
    (useFormState as jest.Mock).mockReturnValueOnce({ values: initialState });

    const { result } = renderHook(() => useDateField());

    act(() => {
      result.current.handlePrevious();
    });
    const formMock = (useForm as jest.Mock).mock.results[0].value;

    expect(formMock.change).toHaveBeenCalledTimes(1);
    expect(formMock.change).toHaveBeenNthCalledWith(1, "monthIndex", 4);
  });

  it("should handle next date change", () => {
    mockDate(2022, 10, 15);
    const initialState = {
      monthIndex: 5,
      year: 2022,
      amount: null,
    };
    (useForm as jest.Mock).mockReturnValue(mockForm);
    (useFormState as jest.Mock).mockReturnValueOnce({ values: initialState });

    const { result } = renderHook(() => useDateField());

    act(() => {
      result.current.handleNext();
    });

    const formMock = (useForm as jest.Mock).mock.results[0].value;

    expect(formMock.change).toHaveBeenCalledTimes(1);
    expect(formMock.change).toHaveBeenNthCalledWith(1, "monthIndex", 6);
  });

  it("should handle next date change with year", () => {
    mockDate(2022, 10, 15);
    const initialState = {
      monthIndex: 11,
      year: 2022,
      amount: null,
    };
    (useForm as jest.Mock).mockReturnValue(mockForm);
    (useFormState as jest.Mock).mockReturnValueOnce({ values: initialState });

    const { result } = renderHook(() => useDateField());

    act(() => {
      result.current.handleNext();
    });

    const formMock = (useForm as jest.Mock).mock.results[0].value;

    expect(formMock.change).toHaveBeenCalledTimes(2);
    expect(formMock.change).toHaveBeenNthCalledWith(1, "monthIndex", 0);
    expect(formMock.change).toHaveBeenNthCalledWith(2, "year", 2023);
  });
});
