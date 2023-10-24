import { regex, isNumber, calculateMonthsDiff, onlyDigits, formatDecimal, formatCurrency } from './path-to-your-module';
import { currentMonthIndex, currentYear } from "./Modules/DonationCard/utils";

describe("Utility functions", () => {

  describe("isNumber", () => {
    it("should return true for valid numbers", () => {
      expect(isNumber(123)).toBe(true);
      expect(isNumber('123')).toBe(true);
      expect(isNumber('1,234')).toBe(true);
    });

    it("should return false for invalid numbers", () => {
      expect(isNumber('abc')).toBe(false);
      expect(isNumber(undefined)).toBe(false);
      expect(isNumber(null)).toBe(false);
    });
  });

  describe("calculateMonthsDiff", () => {
    it("should calculate the difference in months correctly", () => {
      const result = calculateMonthsDiff(11, currentYear); // assuming currentMonthIndex is 0
      expect(result).toBe(11);
    });

    // Add more tests as needed
  });

  describe("onlyDigits", () => {
    it("should extract only digits from the value", () => {
      expect(onlyDigits('123,456')).toBe(123456);
      expect(onlyDigits('abc123,456def')).toBe(123456);
    });
  });

  describe("formatDecimal", () => {
    it("should format number correctly", () => {
      expect(formatDecimal(123456)).toBe("123,456");
    });
  });

  describe("formatCurrency", () => {
    it("should format currency correctly", () => {
      expect(formatCurrency(123456)).toBe("$123,456");
    });
  });
});
