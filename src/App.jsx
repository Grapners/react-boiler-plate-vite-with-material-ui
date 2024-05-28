
import Router from './routes/Router'
import * as React from 'react';

export default function App() {
  

  // const theme = React.useMemo(() => createTheme({
  //   palette: {
  //     mode,
  //     ...(mode === 'light'
  //       ? {
  //         // palette values for light mode
  //         primary: {
  //           light: '#757ce8',
  //           main: '#fff',
  //           dark: '#002884',
  //           contrastText: '#121212',
  //         },
  //         secondary: {
  //           light: '#ff7961',
  //           main: '#f44336',
  //           dark: '#ba000d',
  //           contrastText: '#000',
  //         },
  //         divider: "#0000001f",
  //         background: {
  //           default: "#fff",
  //           paper: "#fff",
  //         },
  //         text: {
  //           primary: "#121212",
  //           secondary: grey[800],
  //         },
  //       }
  //       : {
  //         // palette values for dark mode
  //         primary: deepOrange,
  //         divider: "#ffffff1f",
  //         background: {
  //           default: "#121212",
  //           paper: "#121212",
  //         },
  //         text: {
  //           primary: '#fff',
  //           secondary: grey[500],
  //         },
  //       }),
  //   },
  // }),
  //   [mode],
  // );

  return (
        <Router />
  );
}
