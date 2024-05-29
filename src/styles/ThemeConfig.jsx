import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

import { useColorMode } from '../contexts/colorModeContext';
import { darkTheme, lightTheme } from './theme';

// const getTheme = (mode) => createTheme({
//     palette: {
//         mode,
//         ...(mode === 'light' ? lightTheme : darkTheme),
//     },
// });
const getTheme = (mode) => createTheme();

export default function ThemeConfig({ children }) {
    const { mode } = useColorMode();
    const theme = React.useMemo(() => getTheme(mode), [mode]);

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}
