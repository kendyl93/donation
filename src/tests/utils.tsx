import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';
import theme from '../styles/theme';

export const renderWithTheme = (component: ReactNode) => {
    return rtlRender(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};
