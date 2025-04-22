import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  @media(max-width: 720px) {
    flex-direction: column;
  }
`;

export const card = css`
  padding: 5%;
  text-align: center;
`;
