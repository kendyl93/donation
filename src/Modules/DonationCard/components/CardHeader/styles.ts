import styled from 'styled-components';
import { CloseButton } from '../../../../shared/CloseButton';

export const HeaderContainerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing * 2}px ${({ theme }) => theme.spacing * 3}px ${({ theme }) => theme.spacing * 3.5}px;
  background-color: #FCD5CE; 
  border-radius: 8px 8px 0 0; 
  
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}){
      flex-direction: row;
      padding: ${({ theme }) => theme.spacing * 4}px ${({ theme }) => theme.spacing * 5}px ${({ theme }) => theme.spacing * 3}px;
  }
`;

export const IconWrapper = styled.div`
  // Placeholder for the SVG styling
  // Insert SVG here or use an <img> tag to import and display the SVG
`;

export const HeaderContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing * 2}px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}){
        text-align: left;
        margin-top: 0;
        margin-left: ${({ theme }) => theme.spacing * 2.5}px;
    }
`;

export const CloseButtonWrapper = styled(CloseButton).attrs({
    className: "custom-close-button"
})`
    &.custom-close-button {
        position: absolute;
        right: 8px;
        top: 8px;

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}){
            display: none;
        }
    }
`;



