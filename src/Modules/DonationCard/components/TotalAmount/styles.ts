import styled from "styled-components";
import { ellipsisOverflow } from "../../../../styles/mixins";

export const TotalAmountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing * 2}px;
  gap: ${({ theme }) => theme.spacing}px;
  margin-bottom: ${({ theme }) => theme.spacing * 3}px;
  align-items: center;
`;

export const LabelWrapper = styled.div`
  font-family: ${({ theme }) => theme.font.family.workSans};
  font-size: ${({ theme }) => theme.font.baseSize * 2.5}px;
  color: ${({ theme }) => theme.colors.gray.dark};
  font-weight: 500;
  ${ellipsisOverflow()}
`;

export const AmountWrapper = styled.span`
  font-family: ${({ theme }) => theme.font.family.inter};
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.baseSize * 4}px;
  color: ${({ theme }) => theme.colors.secondary};
  font-style: normal;
  line-height: 1.2;
  ${ellipsisOverflow()}
`;
