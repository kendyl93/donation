import styled from "styled-components";
import { rgba } from "polished";

export const CloseButtonWrapper = styled.div`
    border-radius: ${({ theme }) => theme.spacing * 1.25}px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;,
    transition: background-color .15s ease-in-out;

    &:hover,
    &:active {
      cursor: pointer;
      background-color: ${({ theme }) => rgba(theme.colors.primary.default, 0.2)};
    }
`;