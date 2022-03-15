import React, { useEffect } from 'react';

// 리액트 라우터 관련 라이브러리
import { Link, useNavigate } from 'react-router-dom';

// style-component 라이브러리
import styled, { css } from 'styled-components';

// custom 컴포넌트
import { Button } from '../../customs/button';
import { Input } from '../../customs/input';

// hooks 가져오기
import {
  useChangeField,
  useInitializeForm,
  useSetAuth,
} from '../../hooks/auth';
import { useUserCheck } from '../../hooks/user';

const ButtonMarginTop = styled(Button)`
  ${({ theme }) => {
    return css`
      margin-top: ${theme.space[3]};
    `;
  }}
`;

const FooterBox = styled.div`
  ${({ theme }) => {
    return css`
      margin-top: ${theme.space[3]};
      text-align: end;
    `;
  }}
`;

const Title = styled.h2`
  ${({ theme }) => {
    return css`
      font-weight: ${theme.fontWeights.semibold};
      margin-bottom: ${theme.space[3]};
    `;
  }}
`;

const authType = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type }) => {
  const navigator = useNavigate();

  // useChagneField = 입력 field 관련 hook
  const [{ form, auth, authError }, setField] = useChangeField(type);
  // useUserCheck = user 여부를 체크하는 hook
  const [user, setUserCheck] = useUserCheck();

  // useInitializeForm = form 초기화 관련 hook
  const [choiceField, resetField] = useInitializeForm(type);
  // useSetRegister = 회원가입 관련 action hook
  const [setRegister, setLogin] = useSetAuth(type);

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    resetField();
  }, []);

  // 회원가입 성공/실패 처리
  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      setUserCheck();
    }
  }, [auth, authError]);

  useEffect(() => {
    if (user) {
      console.log('check API 성공');
      navigator('/');
    }
  }, [user]);

  const onSubmit = e => {
    e.preventDefault();
    console.log(type);
    if (type === 'register') {
      const { username, password, passwordConfirm } = form;
      console.log('register');
      if (password !== passwordConfirm) {
        // 오류 처리
        return;
      }
      setRegister(username, password);
    } else if (type === 'login') {
      console.log('login');
      const { username, password } = form;
      setLogin(username, password);
    }
  };

  const onChange = e => {
    const { name, value } = e.target;
    console.log(form);

    setField(name, value);
  };

  return (
    <form onSubmit={onSubmit}>
      <Title>{authType[type]}</Title>

      <Input
        underline
        name="username"
        type="text"
        placeholder="아이디"
        onChange={onChange}
        value={form.username}
      />
      <Input
        underline
        name="password"
        type="password"
        placeholder="비밀번호"
        onChange={onChange}
        value={form.password}
      />

      {type == 'register' && (
        <Input
          underline
          name="passwordConfirm"
          type="password"
          placeholder="비밀번호 확인"
          onChange={onChange}
          value={form.passwordConfirm}
        />
      )}

      <ButtonMarginTop fullWidth cyan>
        {authType[type]}
      </ButtonMarginTop>

      <FooterBox>
        {type === 'login' && <Link to="/register"> &rarr; 회원가입</Link>}
        {type === 'register' && <Link to="/login"> &rarr; 로그인</Link>}
      </FooterBox>
    </form>
  );
};

export default AuthForm;
