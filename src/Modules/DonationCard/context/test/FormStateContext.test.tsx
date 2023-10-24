import { render, screen } from "@testing-library/react";
import { FormStateProvider, useFormState } from "../FormStateContext"; // Adjust the import path
import { createContext } from "react";

describe("FormStateContext", () => {
  // Testing the FormStateProvider
  it("should provide the default form state", () => {
    const TestComponent = () => {
      const { formState } = useFormState();
      return <div data-testid="amount">{formState.amount}</div>;
    };

    render(
      <FormStateProvider>
        <TestComponent />
      </FormStateProvider>
    );

    expect(screen.getByTestId("amount").textContent).toBe(""); // The default value for amount is an empty string
  });

  describe("useFormState hook", () => {
    it("should return the form state context", () => {
      let contextData;
      const TestComponent = () => {
        contextData = useFormState();
        return null;
      };
      render(
        <FormStateProvider>
          <TestComponent />
        </FormStateProvider>
      );
      expect(contextData).toHaveProperty("formState");
      expect(contextData).toHaveProperty("setFormState");
    });

    it("should throw error if used outside of FormStateProvider", () => {
      const TestComponent = () => {
        useFormState();
        return null;
      };

      const consoleError = console.error;
      console.error = jest.fn();
      expect(() => render(<TestComponent />)).toThrow(
        "useFormState must be used within a FormStateProvider"
      );
      console.error = consoleError;
    });
  });
});
