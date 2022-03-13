import React, { useEffect } from 'react';

import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';

import { login } from '../api/auth';

const LoginPage = () => {
  useEffect(async () => {
    // 테스트 코드
    const res = await login({ username: 'turtle601', password: 'js1891024' });
    console.log(res.data);
  }, []);
  return (
    <>
      <AuthTemplate>
        <AuthForm type="login" />
      </AuthTemplate>
    </>
  );
};

export default LoginPage;
