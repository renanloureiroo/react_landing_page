import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    margin: 0 auto;
    max-width: 58rem;
    grid-template-columns: 1fr;
    text-align: center;
    justify-content: center;
    ${Title} {
      margin-bottom: ${theme.spacing.large};
    }
  `}
`;

export const Html = styled.div`
  ${({ theme }) => css`
  & p{
    margin-bottom: ${theme.spacing.large}};
  }
  `}
`;
