import styled, { css } from 'styled-components';

export const Para = styled.p`
  ${({ theme, darkColor }) => css`
    color: ${darkColor ? theme.colors.primaryColor : theme.colors.white};
    font-size: ${theme.sizes.small};
  `}
`;
