import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({ children, darkColor = true }) => {
  return <Styled.Para darkColor={darkColor}>{children}</Styled.Para>;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
  darkColor: P.bool,
};
