import P from 'prop-types';
import * as Styled from './styles';

import { SectionContainer } from '../SectionContainer';

export const Footer = ({ html }) => {
  return (
    <SectionContainer>
      <Styled.Container>
        <Styled.TextFooter>{html}</Styled.TextFooter>
      </Styled.Container>
    </SectionContainer>
  );
};

Footer.propTypes = {
  html: P.string.isRequired,
};
