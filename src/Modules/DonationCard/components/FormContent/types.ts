export type FormValues = {
  amount: number | null;
  monthIndex: number;
  year: number;
};

export type FormValuesChangeArgs = {
  values: FormValues;
};
