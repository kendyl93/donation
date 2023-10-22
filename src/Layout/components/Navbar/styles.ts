import styled from "styled-components";

export const NavbarWrapper = styled.div`
    display: none;
    padding: 20px;
    background-color: white;
    border-bottom: 1px solid #e0e0e0;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}){
      display: block;
    }
  `