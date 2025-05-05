import { createTheme, responsiveFontSizes } from '@mui/material';

const defaultTheme = createTheme({
  typography: {
    fontFamily: 'Figtree, sans-serif',
  },
});

export const theme = responsiveFontSizes(defaultTheme);
