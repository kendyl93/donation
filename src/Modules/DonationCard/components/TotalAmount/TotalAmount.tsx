import { useFormState } from "../../context/FormStateContext";
import { AmountWrapper, LabelWrapper, TotalAmountWrapper } from "./styles";

export const TotalAmount = () => {
  const { formState } = useFormState();

  if (!formState?.amount) {
    return <></>;
  }

  return (
    <TotalAmountWrapper>
      <LabelWrapper>Total amount</LabelWrapper>
      <AmountWrapper>{formState.amount}</AmountWrapper>
    </TotalAmountWrapper>
  );
};
