import { css } from '@emotion/css';
import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';

export const content = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const title = css`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #111827;
  text-align: center;
`;

export const subtitle = css`
  font-size: 1.25rem;
  text-wrap: pretty;
  margin-bottom: 2rem;
  color: #111827;
  text-align: center;
`;

export const cards = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;
`;

export const navigationButtonSx = (color: { bg: string; border: string }): SxProps<Theme> => ({
  backgroundColor: color.bg,
  border: `2px solid ${color.border}`,
  borderRadius: 3,
  padding: 4,
  width: '100%',
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  textDecoration: 'none',
});

export const cardText = (color: { text: string }) => css`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${color.text};
`;
