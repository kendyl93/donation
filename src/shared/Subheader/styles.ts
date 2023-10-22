import styled from "styled-components";

export const SubheaderWrapper = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.baseSize * 2}px;
`;