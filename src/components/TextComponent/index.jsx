import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({ children, colorDark = true }) => {
  return <Styled.Para colorDark={colorDark}>{children}</Styled.Para>;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
};
