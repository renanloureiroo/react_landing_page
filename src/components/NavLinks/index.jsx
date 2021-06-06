import P from 'prop-types';
import { MenuLink } from '../MenuLink';
import * as Styled from './styles';

export const NavLinks = ({ Links = [] }) => {
  return (
    <Styled.Container aria-label="Main menu">
      {Links.map((Link) => (
        <MenuLink key={Link.link} {...Link} />
      ))}
    </Styled.Container>
  );
};

NavLinks.propTypes = {
  Links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};
