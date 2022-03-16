import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { useDarkMode } from '../hooks/useDarkMode';

// 컴포넌트 관련 라이브러리
import Header from '../components/common/Header';

const RegisterLink = styled(Link)`
  ${({ theme }) => {
    return css`
      color: ${theme.color.textColor};
    `;
  }}
`;

const Home = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <>
      <Header />
      <button onClick={setDarkMode}>테스트</button>
      <RegisterLink to="/register">회원가입</RegisterLink>
    </>
  );
};

export default Home;
