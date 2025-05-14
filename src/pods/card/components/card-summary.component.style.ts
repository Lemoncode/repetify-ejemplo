import { css } from '@emotion/css';

export const finished = css`
  text-align: center;
  > h2 {
    font-size: 1.5rem;
    color: #111827;
    margin-bottom: 16px;
  }
  > a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`;
