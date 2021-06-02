import styled, { css } from 'styled-components';

export const Para = styled.p`
  ${({ theme, colorDark }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    font-size: ${theme.sizes.small};
  `}
`;
