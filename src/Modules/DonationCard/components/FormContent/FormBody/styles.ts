import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing * 3}px; 
  gap: ${({ theme }) => theme.spacing * 3}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}){
    flex-direction: row;
  }
`;
