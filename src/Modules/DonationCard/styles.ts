import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // This assumes that the card should be centered vertically on the whole viewport
  background-color: #f0f0f0; // This is a placeholder grey. Adjust to match your theme.
`;

export const CardContentWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
min-width: 100%;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  // Optional shadow effect
background-color: #fff;
border-radius: ${({ theme }) => theme.border.radius};
height: inherit;

@media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}){
  height: auto;
    max-width: 400px;
    min-width: auto;
  },
`;
