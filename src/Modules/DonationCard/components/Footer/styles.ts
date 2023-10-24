import styled from 'styled-components';
import { rgba } from "polished";

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
        background-color: ${({ theme }) => rgba(theme.colors.primary.default, 0.1)};
    }

    &:active {
        background-color: ${({ theme }) => rgba(theme.colors.primary.default, 0.25)};
    }
`;

export const ContinueButtonWrapper = styled(Button)`
    background-color: ${props => props.theme.colors.primary.default};
    color: #fff;

    &:hover {
        background-color: ${props => props.theme.colors.primary.light};
    }

    &:active {
        background-color: ${props => props.theme.colors.primary.dark};
    }
`;







