import styled from 'styled-components';

export const FooterWrapper = styled.div`
    display: flex;
    gap: 16px; // adjust the space between buttons if needed
    justify-content: center;
    padding: 16px 0;
`;

const Button = styled.button`
    border: none;
    padding: 12px 24px;
    border-radius: ${props => props.theme.border.radius};
    font-size: ${props => props.theme.fontSize.regular};
    cursor: pointer;
    transition: background-color 0.2s;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${props => props.theme.colors.primary};
    }
`;

export const CancelButtonWrapper = styled(Button)`
    background-color: transparent;
    border: 2px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};

    &:hover {
        background-color: ${props => props.theme.colors.grey};
    }
`;

export const ContinueButtonWrapper = styled(Button)`
    background-color: ${props => props.theme.colors.primary};
    color: #fff;

    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    }
`;







