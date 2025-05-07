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

export const feedbackButtons = css`
  display: flex;
  gap: 16px;
`;

export const btnEmojiSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '12px',
  border: '2px solid #d1d5db',
  borderRadius: 4,
  cursor: 'pointer',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
};

export const emoji = css`
  font-size: 2rem;
`;

export const terminateLink = css`
  margin-top: auto;
  color: #2563eb;
  text-decoration: none;
  font-size: 0.875rem;
  &:hover {
    text-decoration: underline;
  }
`;
