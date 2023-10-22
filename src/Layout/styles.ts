import styled from "styled-components"

export const LayoutWrapper = styled.div`
    background-color: #f2f2f2; /* Adjust this grey color to your preference */
    min-height: 100vh;
`

export const LayouContenttWrapper = styled.div`
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}){
        padding: 20px;
    }
`