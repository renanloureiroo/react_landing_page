import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: ${theme.sizes.medium};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }

    ${Title} {
      margin-bottom: ${theme.spacing.large};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacing.large};
    }
  `}
`;
export const ImageContainer = styled.div`
  ${() => css`
    height: 100%;
    width: 100%;
  `}
`;

export const Image = styled.img`
  ${() => css`
    height: 100%;
    width: 100%;
  `}
`;
