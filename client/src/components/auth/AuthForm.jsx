import React from 'react';

// 리액트 라우터 관련 라이브러리
import { Link } from 'react-router-dom';

// style-component 라이브러리
import styled, { css } from 'styled-components';

// custom 컴포넌트
import { Button } from '../../customs/button';
import { Input } from '../../customs/input';

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
  return (
    <form>
      <Title>{authType[type]}</Title>
      {type === 'login' && (
        <>
          <Input underline type="text" placeholder="아이디" />
          <Input underline type="text" placeholder="비밀번호" />
        </>
      )}

      {type == 'register' && (
        <>
          <Input underline type="text" placeholder="아이디" />
          <Input underline type="text" placeholder="비밀번호" />
          <Input underline type="text" placeholder="비밀번호 확인" />
        </>
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
