import { mockDate, restoreDate } from '../../../tests/utils';
import { getNextDate } from '../utils';

describe('getNextDate', () => {
  afterEach(() => {
    restoreDate();
  });

  it('returns next month when it is not December', () => {
    mockDate(2022, 10, 15);

    const result = getNextDate();
    expect(result).toEqual([11, 2022]);
  });

  it('returns January of the next year when it is December', () => {
    mockDate(2023, 11, 15); 
    const result = getNextDate();
    expect(result).toEqual([0, 2024]);
  });
});
