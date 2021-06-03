import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { TextComponent } from '.';

describe('< TextComponent/>', () => {
  it('should render with default values', () => {
    renderTheme(<TextComponent>texto</TextComponent>);
    expect(screen.getByText('texto')).toBeInTheDocument();
  });

  it('should math snapshot', () => {
    const { container } = renderTheme(<TextComponent>texto</TextComponent>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        color: #0A1128;
        font-size: 1.6rem;
      }

      <p
        class="c0"
      >
        texto
      </p>
    `);
  });
});
