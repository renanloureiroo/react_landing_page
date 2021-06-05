import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.sizes.medium};
  `,

  medium: (theme) => css`
    font-size: ${theme.sizes.large};
  `,

  big: (theme) => css`
    font-size: ${theme.sizes.xlarge};
  `,

  huge: (theme) => css`
    font-size: ${theme.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.sizes.xlarge};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, size, uppercase }) => css`
    ${titleSize[size](theme)}
    ${titleCase(uppercase)}
  `}
`;
