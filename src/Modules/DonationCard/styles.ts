import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background.primary};
  }
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 100%;
  box-shadow: 0px 16px 32px 0px rgba(30, 42, 50, 0.08);
  background-color: #fff;
  height: 100vh;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: inherit;
    height: auto;
    width: 600px;
    min-width: auto;
    border-radius: ${({ theme }) => theme.spacing}px;
  }
`;

export const CardInnerContentWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing * 4}px
    ${({ theme }) => theme.spacing * 5}px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const SummaryWrapper = styled.div`
  border: solid 1px ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.spacing * 0.5}px;
  padding-top: ${({ theme }) => theme.spacing * 3}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.spacing * 4}px;
    border: none;
  }
`;
