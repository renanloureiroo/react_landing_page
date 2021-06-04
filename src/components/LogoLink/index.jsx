import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading/index';

export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Heading>
      <Styled.Container href={link} size={'small'}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
