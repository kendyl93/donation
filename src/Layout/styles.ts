import styled from "styled-components"
import { NAVBAR_HEIGHT } from "./components/Navbar/styles"

export const LayoutWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background.light});
    height: 100vh;
`
export const LayouContenttWrapper = styled.div`
    height: 100%;
    
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}){
        height: calc(100% - ${NAVBAR_HEIGHT}px);
    }
`