import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { LogoLink } from '.';

describe('<LogoLink/>', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink text="Logo" link="#target" />);
    const heading = screen.getByRole('heading', { name: 'Logo' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });
  it('should render image logo', () => {
    renderTheme(<LogoLink text="Logo" srcImg="image.jpg" link="#target" />);
    screen.getByRole('heading', { name: 'Logo' });
    expect(screen.getByRole('img', { name: 'Logo' })).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink text="Logo" srcImg="image.jpg" link="#target" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
