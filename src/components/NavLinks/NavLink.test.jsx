import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { NavLinks } from '.';

import mock from './mock';
import { theme } from '../../styles/theme';
describe('<NavLink />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks Links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should render not links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });
  it('should render links mobile', () => {
    renderTheme(<NavLinks Links={mock} />);
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column nowrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should math snapshot', () => {
    const { container } = renderTheme(<NavLinks Links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
