import styled from 'styled-components';

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
`;

export const LabelWrapper = styled.label`
  color: ${({ theme }) => theme.colors.gray.superDark};
  font-family: ${({ theme }) => theme.font.family.workSans};
  font-size: ${({ theme }) => theme.font.fontBase * 1.75};
  font-style: normal;
  font-weight: 500;
  line-height: ${({ theme }) => theme.font.fontBase * 2.25}px;
  padding-bottom: ${({ theme }) => theme.spacing * 0.75}px;
`;

