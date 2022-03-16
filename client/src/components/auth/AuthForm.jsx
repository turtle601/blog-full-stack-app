import React, { useEffect, useState } from 'react';

// 리액트 라우터 관련 라이브러리
import { Link, useNavigate } from 'react-router-dom';

// style-component 라이브러리
import styled, { css } from 'styled-components';

// custom 컴포넌트
import { Button } from '../../customs/button';
import { ErrorMessage } from '../../customs/errorMessage';
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
  const [error, setError] = useState(null);

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

  // 에러 처리
  // 1. 하나라도 비어있다면 에러
  // 2. 비밀번호 일치 여부 에러  => 비밀번호 초기화 시켜주기
  // 3. 409 에러
  // 4. 기타 백엔드 에러

  // 회원가입 or 로그인 성공/실패 처리
  useEffect(() => {
    if (authError) {
      if (authError.response.status === 400) {
        // 올바른 username, password 방식이 아닐 경우 => 정규화 방식 필요 ??
        setError('회원 가입 실패');
        return;
      }

      // 409에러
      if (authError.response.status === 409) {
        setError('해당 이름의 유저가 존재합니다');
        return;
      }

      // Unauthorized
      if (authError.response.status === 401) {
        // user가 DB에 존재하지 않을 경우
        // 해당 유저가 없거나 비밀번호가 틀렸을 때
        setError('로그인 실패');
        return;
      }

      // 기타 이유
      setError('서버에 문제가 있습니다.');
      return;
    }
    if (auth) {
      setUserCheck();
    }
  }, [auth, authError]);

  useEffect(() => {
    if (user) {
      navigator('/');
    }
  }, [user]);

  const onSubmit = e => {
    e.preventDefault();

    if (Object.values(form).includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }

    if (type === 'register') {
      const { username, password, passwordConfirm } = form;
      if (password !== passwordConfirm) {
        setError('비밀번호를 다시 확인해주세요');
        setField('password', '');
        setField('passwordConfirm', '');
        return;
      }
      setRegister(username, password);
    } else if (type === 'login') {
      const { username, password } = form;
      setLogin(username, password);
      return;
    }
  };

  const onChange = e => {
    const { name, value } = e.target;
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

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <ButtonMarginTop fullWidth color={'cyan'}>
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
