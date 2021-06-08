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
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.medium};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;
export const Grid = styled.div`
  ${() => css`
    max-width: 36rem;
  `}
`;
