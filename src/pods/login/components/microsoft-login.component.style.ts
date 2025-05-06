import { css } from '@emotion/css';

export const microsoftButton = css`
  position: relative;
  background-color: hsl(0, 0%, 95.3%);
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgb(71, 71, 71);
    transform: scale(1.1);
  }

  img {
    width: 24px;
    position: absolute;
    transition: filter 0.2s;
  }

  &:hover img {
    filter: brightness(0) invert(1);
  }
`;
