import P from 'prop-types';
import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridOneColumn = ({ title, content }) => {
  return (
    <SectionBackground>
      <Styled.Container>
        <Heading>{title}</Heading>
        <TextComponent>{content}</TextComponent>
      </Styled.Container>
    </SectionBackground>
  );
};

GridOneColumn.propTypes = {
  title: P.string.isRequired,
  content: P.string.isRequired,
};
