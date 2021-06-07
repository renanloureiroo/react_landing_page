import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({ children }) => {
  return <Styled.Para>{children}</Styled.Para>;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
