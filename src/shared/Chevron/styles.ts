import styled from "styled-components";

export const ChevronLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.15s ease-in-out;
  border-radius: ${({ theme }) => theme.spacing * 1.25}px;

  &:hover,
  &:active {
    cursor: pointer;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.active};
  }
`;

export const ChevronRightWrapper = styled(ChevronLeftWrapper)`
  transform: rotate(180deg);
`;
