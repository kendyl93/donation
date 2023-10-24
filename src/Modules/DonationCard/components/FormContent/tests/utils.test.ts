import { calculateMonthsDiff, onlyDigits } from "../../../../../utils";
import {
  calculateAccumulatedAmount,
  formatAmount,
  formatDeadline,
} from "../utils";

// Mocking the necessary utilities
jest.mock("../../../../../utils", () => ({
  calculateMonthsDiff: jest.fn(),
  onlyDigits: jest.fn(),
}));

describe("Utility functions", () => {
  describe("calculateAccumulatedAmount", () => {
    it("should return 0 if amount is not specified", () => {
      const result = calculateAccumulatedAmount({
        monthIndex: 5,
        year: 2023,
        amount: null,
      });
      expect(result).toBe(0);
    });

    it("should return 0 if month and year are in the past or current month", () => {
      (calculateMonthsDiff as jest.Mock).mockReturnValueOnce(0);
      const result = calculateAccumulatedAmount({
        monthIndex: 5,
        year: 2023,
        amount: 1000,
      });
      expect(result).toBe(0);
    });

    it("should return accumulated amount for future months", () => {
      (calculateMonthsDiff as jest.Mock).mockReturnValueOnce(5);
      const result = calculateAccumulatedAmount({
        monthIndex: 5,
        year: 2023,
        amount: 1000,
      });
      expect(result).toBe(5000); // 5 months * 1000
    });

    it("should return accumulated amount for future months and year", () => {
      (calculateMonthsDiff as jest.Mock).mockReturnValueOnce(15);
      const result = calculateAccumulatedAmount({
        monthIndex: 5,
        year: 2023,
        amount: 123,
      });
      expect(result).toBe(1845); // 12 months * 123
    });
  });

  describe("formatAmount", () => {
    it("should format amount using onlyDigits utility", () => {
      (onlyDigits as jest.Mock).mockReturnValueOnce("1234");
      const result = formatAmount(1234.56);
      expect(result).toBe("1234");
    });
  });

  describe("formatDeadline", () => {
    it("should format deadline using monthNames and return February 2023", () => {
      const result = formatDeadline(1, 2023);
      expect(result).toBe("February 2023");
    });

    it("should format deadline using monthNames and return January 2022", () => {
      const result = formatDeadline(0, 2022);
      expect(result).toBe("January 2022");
    });

    it("should format deadline using monthNames and return December 1993r", () => {
      const result = formatDeadline(11, 1993);
      expect(result).toBe("December 1993");
    });
  });
});
