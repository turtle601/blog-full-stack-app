import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// 리액트 라우터 관련 라이브러리
import { Link } from 'react-router-dom';

// style-component 라이브러리
import styled, { css } from 'styled-components';

// custom 컴포넌트
import { Button } from '../../customs/button';
import { Input } from '../../customs/input';

// hooks 가져오기
import {
  useChangeField,
  useInitializeForm,
  useSetRegister,
} from '../../hooks/auth';
import { register } from '../../stores/auth';

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
  const [{ form, auth, authError }, setField] = useChangeField(type);
  const [choiceField, resetField] = useInitializeForm(type);
  const setRegister = useSetRegister(type);

  // const dispatch = useDispatch();

  useEffect(() => {
    resetField();
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    console.log(username, password, passwordConfirm);
    if (password !== passwordConfirm) {
      // 오류 처리
      return;
    }

    setRegister(username, password);
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
        value={form.username || ''}
      />
      <Input
        underline
        name="password"
        type="password"
        placeholder="비밀번호"
        onChange={onChange}
        value={form.password || ''}
      />

      {type == 'register' && (
        <Input
          underline
          name="passwordConfirm"
          type="password"
          placeholder="비밀번호 확인"
          onChange={onChange}
          value={form.passwordConfirm || ''}
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
