import { css } from '@emotion/css';

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
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const btnEmojiSx = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  border: 2px solid #d1d5db;
  border-radius: 4;
  background-color: #f9fafb;
  cursor: pointer;
  height: 200px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background-color: #f3f4f6;
  }
`;

export const emoji = css`
  font-size: 4rem;
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
