import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(
      <MenuLink link={'https://www.google.com.br/'}>Children</MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });
  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink newTab={true} link={'https://www.google.com.br/'}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should render snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link={'https://www.google.com.br/'}>Children</MenuLink>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 1.6rem;
        color: #0A1128;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.75rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: #dc143c;
        -webkit-transition: 300ms all ease-in-out;
        transition: 300ms all ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="https://www.google.com.br/"
        target="_self"
      >
        Children
      </a>
    `);
  });
});
