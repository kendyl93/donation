import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}){
    flex-direction: row;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelWrapper = styled.label`
  font-size: 16px;
  margin-right: 15px;
`;

export const InputValueWrapper = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 120px; // Adjust as needed
`;

export const SelectorWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid #E0E0E0;  // Light gray border
    border-radius: 20px;  // More rounded edges
    overflow: hidden;  // To ensure child elements don't overflow
`;

export const SelectorContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MonthDisplayWrapper = styled.div`
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
    width: 40px;  // Fixed width for buttons
    height: 100%;  // Full height of parent
    cursor: pointer;
    font-size: 1.2em;  // Size of arrow
    color: #B0B0B0;  // Light gray arrow

    &:disabled {
    color: #E0E0E0;  // Even lighter gray for disabled state
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid #E0E0E0;
    border-radius: 10px;
    overflow: hidden;
`;

export const CurrencySign = styled.span`
  padding: 0 10px;  // Add some padding for spacing
  font-size: 1em;
`;

export const MonthYearDisplayWrapper = styled.div`
  padding: 10px 20px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MonthWrapper = styled.div`
  font-size: 24px;
`;

export const YearWrapper = styled.div`
  font-size: 12px;
`;

