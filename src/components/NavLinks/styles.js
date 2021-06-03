import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;

    @media ${theme.media.lteMedium} {
      flex-flow: column nowrap;
      align-items: center;

      & > a {
        border-bottom: 0.1rem solid ${theme.colors.mediumGray};
        width: 50%;
        text-align: center;
      }
    }
  `}
`;
