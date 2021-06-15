import { renderTheme } from '../../styles/renderTheme';
import { Footer } from './index';

describe('<Footer />', () => {
  const html =
    '<p><a href="https://www.instagram.com/renanloureiroo">&nbsp;@renanloureiroo</a><br>&nbsp;</p>';
  it('should render', () => {
    const { container } = renderTheme(<Footer html={html} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
