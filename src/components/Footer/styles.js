import styled, { css } from 'styled-components';

import { TextComponent } from '../TextComponent/index';
export const Container = styled.div`
  ${({ theme }) => css`
    & a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.sizes.small};
    }
    text-align: center;
  `}
`;

export const TextFooter = styled(TextComponent).attrs('div')``;
