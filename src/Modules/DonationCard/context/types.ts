export type FormState = {
  deadline: string;
  amount: string;
};

export type FormStateContextProps = {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
};
