import { SxProps, Theme } from '@mui/material/styles';
import { theme } from '#core/theme/theme.ts';

export const microsoftButton: SxProps<Theme> = {
  position: 'relative',
  backgroundColor: theme.palette.grey[200],
  border: 'none',
  borderRadius: '50%',
  width: '3rem',
  aspectRatio: '1/1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: theme.palette.grey[700],
    transform: 'scale(1.1)',
  },

  '& img': {
    width: '24px',
    position: 'absolute',
    transition: 'filter 0.2s',
  },

  '&:hover img': {
    filter: 'brightness(0) invert(1)',
  },
};
