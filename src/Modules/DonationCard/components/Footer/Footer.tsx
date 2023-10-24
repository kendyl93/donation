import {
  ButtonWrapper,
  CancelButtonWrapper,
  ContinueButtonWrapper,
  FooterWrapper,
} from "./styles";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <ButtonWrapper hideMobile>
        <CancelButtonWrapper>Cancel</CancelButtonWrapper>
      </ButtonWrapper>
      <ButtonWrapper>
        <ContinueButtonWrapper>Continue</ContinueButtonWrapper>
      </ButtonWrapper>
    </FooterWrapper>
  );
};
