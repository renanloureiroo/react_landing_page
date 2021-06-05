import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

// eslint-disable-next-line no-unused-vars
const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    right: 0;
    left: 0;
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};
    transition: all 300ms ease-in-out;

    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      min-height: 100vh;
      margin-bottom: 0;
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible()}

      & ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        align-items: center;
        height: 100vh;
        overflow-y: auto;
      }
      & ${Heading} {
        padding-bottom: ${theme.spacing.large};
        display: flex;
        justify-content: center;
      }
    } ;
  `}
`;
export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
    } ;
  `}
`;
export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    display: none;
    position: fixed;
    z-index: 6;
    right: 2rem;
    top: 2rem;
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    border-radius: 10%;

    & svg {
      width: 3.5rem;
      height: 3.5rem;
    }

    @media${theme.media.lteMedium} {
      display: block;
    }
  `}
`;
