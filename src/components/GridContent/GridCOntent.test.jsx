// import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GridContent } from '.';

import mock from './mock';

describe('< />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
