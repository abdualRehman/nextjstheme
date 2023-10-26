// src/lightTheme.ts
import { createTheme } from '@mui/material/styles';
// import { lightTheme as colorScheme } from './colorSchemes';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
    //   main: colorScheme.primary,
    },
    secondary: {
    //   main: colorScheme.secondary,
    },
  },
});

export default theme;
