import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f0f0f0; // This is a placeholder grey. Adjust to match your theme.
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  // Optional shadow effect
  background-color: #fff;
  border-radius: ${({ theme }) => theme.spacing}px;
  height: inherit;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}){
    height: auto;
    width: 600px;
    min-width: auto;
  }
`;

export const CardInnerContentWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing * 4}px ${({ theme }) => theme.spacing * 5}px;
`;

export const SummaryWrapper = styled.div`
  border: solid 1px ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.spacing * 0.5}px;
  padding-top: ${({ theme }) => theme.spacing * 3}px;

@media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}){
    margin-bottom: ${({ theme }) => theme.spacing * 4}px;
    border: none;
  }
`;




