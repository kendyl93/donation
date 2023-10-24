export const currentMonthIndex = new Date().getMonth();
export const currentYear = new Date().getFullYear()

export const getNextMonthIndexAndYear = () => {
  const today = new Date();
  const currentMonthIndex = today.getMonth();
  const currentYear = today.getFullYear();

  let nextMonthIndex = currentMonthIndex + 1;
  let year = currentYear;

  if (nextMonthIndex > 11) {
    nextMonthIndex = 0; 
    year += 1;
  }

  return { nextMonthIndex, year };
}
