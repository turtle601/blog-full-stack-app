import React from 'react';

// custom 컴포넌트
import { Button } from '../../customs/button';
import { Input } from '../../customs/input';

const AuthForm = () => {
  return (
    <form>
      <Input underline />
      <Input underline />
      <Button fullWidth cyan>
        회원가입
      </Button>
    </form>
  );
};

export default AuthForm;
