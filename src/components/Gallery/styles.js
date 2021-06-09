import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css``}
`;
export const TextContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.huge};
  `}
`;
export const GridContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    gap: ${theme.spacing.medium};

    & div {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      overflow: hidden;
    }

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;
export const Grid = styled.img`
  transition: all 300ms ease-in-out;
  ${() => css`
    width: 100%;
    height: 100%;

    &:hover {
      transform: scale(1.2) rotate(7deg);
    }
  `}
`;
