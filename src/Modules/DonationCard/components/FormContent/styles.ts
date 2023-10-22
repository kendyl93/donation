import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelWrapper = styled.label`
  font-size: 16px;
  margin-right: 15px;
`;

export const InputWrapper = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 120px; // Adjust as needed
`;

export const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #007BFF;  // Blue border
  border-radius: 16px;  // Rounded edges
  overflow: hidden;  // To make sure child elements don't overflow
`;

export const SelectorContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MonthDisplayWrapper = styled.div`
  flex: 1;  // Take maximum available space
  background-color: #F8F9FA;  // Light gray background
  text-align: center;
  padding: 10px;
`;

export const YearDisplayWrapper = styled(MonthDisplayWrapper)`  // Inherits styles from MonthDisplay
  font-size: 0.8em;  // Slightly smaller text for year
`;

export const ButtonWrapper = styled.button`
  background-color: #007BFF;  // Blue background
  color: white;  // White text
  border: none;
  width: 40px;  // Fixed width for buttons
  height: 100%;  // Full height of parent
  cursor: pointer;
  font-size: 1.2em;  // Increase arrow size

  &:disabled {
    background-color: #ADC6E0;  // Lighter blue for disabled state
  }
`;