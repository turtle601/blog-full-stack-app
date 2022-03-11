// react 관련 라이브러리
import React from 'react';

// react-router 관련 라이브러리
import { Route, Routes } from 'react-router-dom';

// styled-components 관련 라이브러리
import { ThemeProvider } from 'styled-components';

// style 관련
import { GlobalStyle } from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';

// hook 관련
import { useDarkMode } from './hooks/useDarkMode';

// page 관련
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
