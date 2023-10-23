import styled from 'styled-components';
import { Field } from 'react-final-form';

export const StyledField = styled(Field)`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.font.family.rubik};
  font-size: ${({ theme }) => theme.font.baseSize * 3}px;
  font-style: normal;
  font-weight: 500;
  line-height: ${({ theme }) => theme.font.baseSize * 3.5}px;
  padding: ${({ theme }) => theme.spacing * 2}px;
  padding-left: 0;
  width: 100%;
`;


export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.colors.gray.superLight};
    border-radius: ${({ theme }) => theme.spacing * 1.25}px;
    overflow: hidden;
    margin-bottom: ${({ theme }) => theme.spacing * 2}px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}){
      margin-bottom: 0;
    }
`;