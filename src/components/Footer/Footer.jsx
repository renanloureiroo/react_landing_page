import P from 'prop-types';
import * as Styled from './styles';

import { SectionContainer } from '../SectionContainer';

export const Footer = ({ children }) => {
  return (
    <SectionContainer>
      <Styled.Container>
        <Styled.TextFooter>{children}</Styled.TextFooter>
      </Styled.Container>
    </SectionContainer>
  );
};

Footer.propTypes = {
  children: P.node.isRequired,
};
