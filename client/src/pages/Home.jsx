import React from 'react';

import { useDarkMode } from '../hooks/useDarkMode';

const Home = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <>
      <button onClick={setDarkMode}>테스트</button>
    </>
  );
};

export default Home;
