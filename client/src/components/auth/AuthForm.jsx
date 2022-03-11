import React from 'react';

//
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

const AuthForm = () => {
  return (
    <form>
      <Input underline type="text" placeholder="아이디" />
      <Input underline type="text" placeholder="비밀번호" />
      <ButtonMarginTop fullWidth cyan>
        회원가입
      </ButtonMarginTop>

      <FooterBox>
        <Link to="/login"> &rarr; 로그인</Link>
      </FooterBox>
    </form>
  );
};

export default AuthForm;
