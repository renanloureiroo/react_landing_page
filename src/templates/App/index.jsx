import * as Styled from './styles';

import { Base } from '../Base/index';
import { Gallery } from '../../components/Gallery';

import mock from '../Base/mock';

function Home() {
  return (
    <Styled.Wrapper>
      <Base
        Links={mock.Links}
        LogoData={mock.LogoData}
        footerHtml={mock.footerHtml}
      >
        <Gallery {...mock.Gallery} />
      </Base>
    </Styled.Wrapper>
  );
}

export default Home;
