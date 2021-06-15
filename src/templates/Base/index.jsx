import P from 'prop-types';
import * as Styled from './styles';

import { Menu } from '../../components/Menu';
import { GoTop } from '../../components/GoTop';
import { Footer } from '../../components/Footer';

export const Base = ({ Links = [], LogoData, footerHtml, children }) => {
  return (
    <>
      <Menu Links={Links} logoData={LogoData} />
      <Styled.Container>
        {children}
        <Footer html={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  ...Footer.propTypes,
};
