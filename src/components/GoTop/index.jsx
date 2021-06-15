import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined';

export const GoTop = () => {
  return (
    <Styled.Container
      href={'#'}
      aria-label="Ir para o topo"
      title="Ir para o topo"
    >
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
