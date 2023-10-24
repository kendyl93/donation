const today = new Date();

const currentMonthIndex = today.getMonth();
const currentYear = today.getFullYear();

export const getNextMonthIndexAndYear = () => {
  let nextMonthIndex = currentMonthIndex + 1;
  let year = currentYear;

  if (nextMonthIndex > 11) {
    nextMonthIndex = 0; 
    year += 1;
  }

  return { nextMonthIndex, year };
}
