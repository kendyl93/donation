import styled from 'styled-components';

export const FooterWrapper = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing * 1.375}px;
    justify-content: center;
`;

const Button = styled.button`
    border: none;
    flex-grow: 1;
    padding: ${({ theme }) => theme.spacing * 2}px ${({ theme }) => theme.spacing * 3}px;
    border-radius: ${({ theme }) => theme.spacing}px;
    cursor: pointer;
    transition: background-color 0.2s;
    text-align: center;
    font-family: ${({ theme }) => theme.font.family.workSans};
    font-size: ${({ theme }) => theme.font.baseSize * 2}px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25;
    width: 100%;
    height: 100%;
    
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
    }
    `;


export const ButtonWrapper = styled.div<{ hideMobile?: boolean }>`
    width: 100%;
    padding: ${({ theme }) => theme.spacing}px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        display:  ${({ hideMobile }) => hideMobile ? 'none' : 'block'};
    }
`;

export const CancelButtonWrapper = styled(Button)`
    background-color: transparent;
    border: 2px solid ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondary};
    

    &:hover {
        background-color: ${props => props.theme.colors.gray.primary};
    }
`;

export const ContinueButtonWrapper = styled(Button)`
    background-color: ${props => props.theme.colors.primary};
    color: #fff;

    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    }
`;







