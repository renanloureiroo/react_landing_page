/* eslint-disable no-unused-vars */
import P from 'prop-types';
import { useState } from 'react';
import * as Styled from './styles';

import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

export const Menu = ({ Links = [], logoData }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Styled.Button
        aria-label="Open/Close menu"
        onClick={() => setVisible((v) => !v)}
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" title="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" title="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks Links={Links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes),
};
