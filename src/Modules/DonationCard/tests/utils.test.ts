import { getNextMonthIndexAndYear } from '../utils';

const ORIGINAL_DATE = Date;

function mockDate(year: number, month: number, day: number): void {
  (global as any).Date = class extends ORIGINAL_DATE {
    constructor() {
      super();
      return new ORIGINAL_DATE(year, month, day);
    }
  };
}

function restoreDate(): void {
  global.Date = ORIGINAL_DATE;
}

describe('getNextMonthIndexAndYear', () => {

  afterEach(() => {
    restoreDate();
  });

  it('returns next month when it is not December', () => {
    mockDate(2022, 10, 15); // November 15th, 2023

    const result = getNextMonthIndexAndYear();
    expect(result).toEqual({ nextMonthIndex: 11, year: 2022 });
  });

  it('returns January of the next year when it is December', () => {
    mockDate(2023, 11, 15); // December 15th, 2023
    const result = getNextMonthIndexAndYear();
    expect(result).toEqual({ nextMonthIndex: 0, year: 2024 });
  });
});
