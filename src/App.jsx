import { ThemeProvider, createTheme, useTheme } from '@mui/material';
import Router from './routes/Router'
import * as React from 'react';
import { deepOrange, grey } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ColorModeProvider, { useColorMode } from './contexts/colorModeContext';
import ThemeConfig from './styles/ThemeConfig';
import { ModeToggle } from './components/ModeToggle';

// const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export default function App() {
  return (
    <ColorModeProvider>
      <ThemeConfig>
        <Router />
        
      </ThemeConfig>
    </ColorModeProvider>
  );
}

