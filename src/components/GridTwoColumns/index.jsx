import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const GridTwoColumns = ({ title, content, img }) => {
  return (
    <SectionBackground background={true}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading>{title}</Heading>
          <TextComponent>{content}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImgContainer>
          <img src={img} />
        </Styled.ImgContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: P.node.isRequired,
  content: P.string.isRequired,
  img: P.string.isRequired,
};
