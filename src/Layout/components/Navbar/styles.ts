import styled from "styled-components";

export const NAVBAR_HEIGHT = 80;

export const NavbarWrapper = styled.div`
    display: none;
    height: ${NAVBAR_HEIGHT}px;
    background-color: white;
    border-bottom: 1px solid #e0e0e0;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}){
      display: flex;
      align-items: center;
      justify-content: left;
      padding-left: ${({ theme }) => theme.spacing * 5}px
    }
  `