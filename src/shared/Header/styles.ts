import styled from "styled-components";

export const HeaderWrapper = styled.h1`
  color: ${({ theme }) => theme.colors.primary.default};
  font-size: ${({ theme }) => theme.font.baseSize * 4}px;
  margin-bottom: ${({ theme }) => theme.spacing * 0.5}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}){
    font-size: ${({ theme }) => theme.font.baseSize * 3}px;
  }
`;