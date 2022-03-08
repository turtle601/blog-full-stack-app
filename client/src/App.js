import React from 'react';

import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
