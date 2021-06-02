import React from 'react';
import ReactDOM from 'react-dom';

import { theme } from './styles/theme';

// import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import Home from './templates/App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
