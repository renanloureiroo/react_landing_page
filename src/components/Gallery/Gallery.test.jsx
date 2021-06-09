import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Gallery } from '.';

import mock from './mock';

describe('<Gallery />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Gallery {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
