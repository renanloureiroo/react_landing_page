import P from 'prop-types';
import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground/index';
export const Gallery = ({ children }) => {
  return (
    <SectionBackground>
      <Styled.Container>
        <h1>{children}</h1>
      </Styled.Container>
    </SectionBackground>
  );
};

Gallery.propTypes = {
  children: P.node.isRequired,
};
