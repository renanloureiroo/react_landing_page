import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: ${theme.sizes.small};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    } ;
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    & h1 {
      margin-bottom: ${theme.sizes.small};
    }
  `}
`;
export const ImgContainer = styled.div`
  ${() => css`
    width: 100%;
    height: 100%;
    margin: 0 auto;

    & img {
      width: 100%;
      height: 100%;
    }
  `}
`;
