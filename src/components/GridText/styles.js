import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-rows: 1fr 2fr;
    gap: ${theme.spacing.large};

    ${Title} {
      margin-bottom: ${theme.spacing.small};
    }

    @media ${theme.media.lteMedium} {
      display: block;
    }
  `}
`;
export const TextContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.large};
  `}
`;

export const GridContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: ${theme.spacing.large};
    counter-reset: grid-counter;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;
export const Grid = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.medium};
    ${Title} {
      position: relative;
      left: 5rem;
    }

    ${Title}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: ${theme.spacing.xhuge};
      font-weight: bold;
      transform: rotate(10deg);
      left: -5rem;
      top: -2rem;
    }
  `}
`;
