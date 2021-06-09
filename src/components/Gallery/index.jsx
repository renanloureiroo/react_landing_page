import P from 'prop-types';
import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground/index';
export const Gallery = ({ bg = false, title, description, imgs = [] }) => {
  return (
    <SectionBackground>
      <Styled.Container>
        <Styled.TextContainer></Styled.TextContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

Gallery.propTypes = {
  bg: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  imgs: P.arrayOf(
    P.shap({
      srcImg: P.string.isRequired,
      text: P.string.isRequired,
    }),
  ),
};
