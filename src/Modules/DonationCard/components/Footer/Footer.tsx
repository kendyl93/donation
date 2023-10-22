import { CancelButtonWrapper, ContinueButtonWrapper, FooterWrapper } from "./styles";

export const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <CancelButtonWrapper>Cancel</CancelButtonWrapper>
            <ContinueButtonWrapper>Continue</ContinueButtonWrapper>
        </FooterWrapper>
    );
};