import styled from 'styled-components';

export const SelectorWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.colors.gray.superLight};
    border-radius: ${({ theme }) => theme.spacing * 1.25}px;
    overflow: hidden; 
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing * 1.5}px;
`;

const MonthDisplayWrapper = styled.div`
    flex: 1;  // Take maximum available space
    text-align: center;
    padding: 10px 0;  // Top and bottom padding
    font-size: 1.2em;  // Slightly larger text for month
`;

export const YearDisplayWrapper = styled(MonthDisplayWrapper)`  // Inherits styles from MonthDisplay
  font-size: 0.9em;  // Slightly smaller text for year
`;

export const ArrowButtonWrapper = styled.button`
    background-color: transparent;  // Transparent background
    border: none;
`;

export const MonthYearDisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MonthWrapper = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-family:  ${({ theme }) => theme.font.family.rubik};
  font-size: ${({ theme }) => theme.font.baseSize * 2}px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
`;

export const YearWrapper = styled.div`
color: ${({ theme }) => theme.colors.secondary};
font-family:  ${({ theme }) => theme.font.family.workSans};
font-size: ${({ theme }) => theme.font.baseSize * 1.5}px;
font-style: normal;
font-weight: 500;
line-height: ${({ theme }) => theme.font.baseSize * 2}px;
`;

