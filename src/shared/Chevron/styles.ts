import styled from "styled-components";

export const ChevronLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing}px;
`

export const ChevronRightWrapper = styled(ChevronLeftWrapper)`
  transform: rotate(180deg);
  `