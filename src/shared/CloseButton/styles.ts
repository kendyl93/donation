import styled from "styled-components";
import { rgba } from "polished";

export const CloseButtonWrapper = styled.div`
    border-radius: ${({ theme }) => theme.spacing * 1.25}px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    &:active {
      background-color: ${({ theme }) => rgba(theme.colors.primary, 0.2)};
    }
`;