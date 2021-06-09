import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';
import { Para } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${Title} {
      margin-bottom: ${theme.spacing.small};
    }
    ${Para} {
      margin-bottom: ${theme.spacing.large};
    }
  `}
`;
export const GridContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    justify-content: center;
    gap: ${theme.spacing.large};
  `}
`;
export const GridElement = styled.div`
  ${() => css`
    overflow: hidden;
    border-radius: 50%;
  `}
`;
export const Image = styled.img`
  ${() => css`
    transition: all 300ms ease-in-out;
    width: 100%;
    height: 100%;

    &:hover {
      transform: scale(1.2) rotate(10deg);
    }
  `}
`;
