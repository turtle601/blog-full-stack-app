import React, { useEffect } from 'react';

import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';

import { login } from '../api/auth';

const LoginPage = () => {
  return (
    <>
      <AuthTemplate>
        <AuthForm type="login" />
      </AuthTemplate>
    </>
  );
};

export default LoginPage;
