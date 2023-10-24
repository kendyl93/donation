export const currentMonthIndex = new Date().getMonth();
export const currentYear = new Date().getFullYear();

export const getNextMonthAndYear = (
  monthIndex: number,
  year: number
): number[] => {
  let nextMonthIndex: number = monthIndex + 1;
  let nextYear: number = year;
  const isDecember = monthIndex === 11;

  if (isDecember) {
    nextMonthIndex = 0;
    nextYear = year + 1;
  }

  return [nextMonthIndex, nextYear];
};

export const getNextDate = (): number[] => {
  const today = new Date();

  const currentMonthIndex = today.getMonth();
  const currentYear = today.getFullYear();

  return getNextMonthAndYear(currentMonthIndex, currentYear);
};
