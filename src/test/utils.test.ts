import { mockDate, restoreDate } from "../testSetup/utils";
import {
  isNumber,
  calculateMonthsDiff,
  onlyDigits,
  formatDecimal,
  formatCurrency,
} from "../utils";

describe("Utility functions", () => {
  afterEach(() => {
    restoreDate();
  });

  describe("isNumber", () => {
    it("should return true for valid numbers", () => {
      expect(isNumber(123)).toBe(true);
      expect(isNumber("123")).toBe(true);
      expect(isNumber("1,234")).toBe(true);
    });

    it("should return false for invalid numbers", () => {
      expect(isNumber("abc")).toBe(false);
      expect(isNumber(undefined)).toBe(false);
      expect(isNumber(null)).toBe(false);
    });
  });

  describe("calculateMonthsDiff", () => {
    it("should calculate the difference in months correctly and return 22", () => {
      mockDate(2022, 1, 1);
      const result = calculateMonthsDiff(11, 2023);
      expect(result).toBe(22);
    });

    it("should calculate the difference in months correctly and return 0", () => {
      mockDate(2022, 0, 1);
      const result = calculateMonthsDiff(0, 2022);
      expect(result).toBe(0);
    });
  });

  describe("onlyDigits", () => {
    it("should extract only digits from the value", () => {
      expect(onlyDigits("123,456")).toBe(123456);
      expect(onlyDigits("abc123,456def")).toBe(123456);
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
