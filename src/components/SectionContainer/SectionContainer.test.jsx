import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { SectionContainer } from '.';

describe('<SectionContainer />', () => {
  it('should render', () => {
    renderTheme(<SectionContainer>Children</SectionContainer>);
    expect(screen.getByText('Children'));
  });
});
