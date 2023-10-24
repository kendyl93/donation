import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';
import theme from '../styles/theme';

export const renderWithTheme = (component: ReactNode) => {
    return rtlRender(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

const ORIGINAL_DATE = Date;

export const mockDate = (year: number, month: number, day: number): void => {
  (global as any).Date = class extends ORIGINAL_DATE {
    constructor() {
      super();
      return new ORIGINAL_DATE(year, month, day);
    }
  };
}

export const restoreDate = (): void => {
  global.Date = ORIGINAL_DATE;
}
