import {
  currentMonthIndex,
  currentYear,
} from "../../Modules/DonationCard/utils";

export const mockForm = {
  change: jest.fn(),
  values: {
    monthIndex: currentMonthIndex + 1,
    year: currentYear,
    amount: "1234",
  },
};
