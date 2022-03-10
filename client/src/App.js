import React from 'react';

import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { useDarkMode } from './hooks/useDarkMode';

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <button onClick={setDarkMode}>테스트</button>
    </ThemeProvider>
  );
};

export default App;
