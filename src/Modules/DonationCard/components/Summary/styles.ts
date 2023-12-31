import styled from "styled-components";

export const SummaryWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray.primary};
  padding: ${({ theme }) => theme.spacing * 3}px
    ${({ theme }) => theme.spacing * 2}px;
  border-radius: ${({ theme }) => theme.spacing * 0.625}px;
  width: 100%;
`;

export const SummaryTextWrapper = styled.p`
  font-family: ${({ theme }) => theme.font.family.workSans};
  font-size: ${({ theme }) => theme.font.baseSize * 1.5}px;
  color: ${({ theme }) => theme.colors.gray.dark};
`;

export const HighlightedTextWrapper = styled.span`
  font-family: ${({ theme }) => theme.font.family.inter};
  font-weight: 700;
`;
