import P from 'prop-types';
import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridText = ({ title, description, bg = false, grids = [] }) => {
  return (
    <SectionBackground bg={bg}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading as="h2">{title}</Heading>
          <TextComponent>{description}</TextComponent>
        </Styled.TextContainer>
        <Styled.GridContainer>
          {grids.map((grid) => {
            return (
              <Styled.Grid key={grid.title}>
                <Heading as="h3" size="medium" uppercase={false}>
                  {grid.title}
                </Heading>
                <TextComponent>{grid.description}</TextComponent>
              </Styled.Grid>
            );
          })}
        </Styled.GridContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  bg: P.bool,
  grids: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ),
};
