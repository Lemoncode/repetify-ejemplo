import { css } from '@emotion/css';
import { SxProps } from '@mui/material';
import { Theme } from '@emotion/react';

export const counter = css`
  font-size: 1rem;
  color: #6b7280;
`;

export const word = css`
  font-size: 1.75rem;
  font-weight: 600;
  color: #111827;
  text-align: center;
  min-height: 48px;
`;

export const btnRevealSx: SxProps<Theme> = {
  padding: '8px 16px',
  border: '2px solid #bfdbfe',
  borderRadius: 2,
  backgroundColor: '#eff6ff',
  color: '#1d4ed8',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: '#e0f2fe',
  },
};

export const terminateLink = css`
  margin-top: auto;
  color: #2563eb;
  text-decoration: none;
  font-size: 0.875rem;
  &:hover {
    text-decoration: underline;
  }
`;
