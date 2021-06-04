import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${() => css`
    display: flex;
    text-decoration: none;
    color: inherit;

    & > img {
      max-height: 3rem;
    }
  `}
`;
