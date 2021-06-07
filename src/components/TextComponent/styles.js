import styled, { css } from 'styled-components';

export const Para = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.sizes.small};
    line-height: ${theme.sizes.medium};
  `}
`;
