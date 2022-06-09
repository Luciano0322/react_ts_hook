import { createTheme, PaletteMode } from '@mui/material';
import { amber, deepOrange, green, grey, orange, teal } from '@mui/material/colors';

export const custTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1080,
      lg: 1200,
      xl: 1536,
    }
  },
  palette: {
    primary: {
      main: teal[600], 
      light: green[300],  
    },
    secondary: {
      main: orange[400],
    },
  }
})

export const withBWTheme = (mode: PaletteMode) => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1080,
      lg: 1200,
      xl: 1536,
    }
  },
  palette: {
    mode,
    primary: {
      ...teal,
      ...(mode === 'dark' && {
        main: teal[300],
      }),
    },
    secondary: {
      ...amber,
      ...(mode === 'dark' && {
        main: amber[300],
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: grey[800],
        paper: grey[800],
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#fff',
            secondary: grey[500],
          }),
    },
  },
});