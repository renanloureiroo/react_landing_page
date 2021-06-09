import P from 'prop-types';
import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground/index';
import { Heading } from '../Heading/index';
import { TextComponent } from '../TextComponent/index';

export const Gallery = ({ bg = false, title, description, images = [] }) => {
  return (
    <SectionBackground bg={bg}>
      <Styled.Container>
        <Heading>{title}</Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.GridContainer>
          {images.map((image) => {
            return (
              <Styled.GridElement key={image.id}>
                <Styled.Image src={image.srcImg} alt={image.text} />
              </Styled.GridElement>
            );
          })}
        </Styled.GridContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

Gallery.propTypes = {
  bg: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  images: P.arrayOf(
    P.shape({
      id: P.number.isRequired,
      srcImg: P.string.isRequired,
      text: P.string.isRequired,
    }),
  ),
};
