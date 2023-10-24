import styled from "styled-components";

export const ChevronLeftWrapper = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.15s ease-in-out;
  border-radius: ${({ theme }) => theme.spacing * 1.25}px;
  opacity: ${({ disabled }) => (disabled ? "0.2" : "1")};

  &:hover,
  &:active {
    cursor: ${({ disabled }) => (disabled ? "help" : "pointer")};
  }

  &:hover {
    background-color: ${({ theme, disabled }) =>
      !disabled && theme.colors.hover};
  }

  &:active {
    background-color: ${({ theme, disabled }) =>
      !disabled && theme.colors.active};
  }
`;

export const ChevronRightWrapper = styled(ChevronLeftWrapper)`
  transform: rotate(180deg);
`;
