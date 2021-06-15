import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GoTop } from './index';

describe('<GoTop />', () => {
  it('should render GoTop', () => {
    const { container } = renderTheme(<GoTop />);
    expect(
      screen.getByRole('link', { name: 'Ir para o topo' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Ir para o topo' }),
    ).toHaveAttribute('href', '#');

    expect(container.firstChild).toMatchSnapshot();
  });
});
