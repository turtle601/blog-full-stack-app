import React from 'react';
import styled, { css } from 'styled-components';

// 컴포넌트
import Responsive from './Responsive';
import Button from './Button';
import LinkButton from './LinkButton';

// hooks 관련
import { useUserCheck } from '../../hooks/user';

const HeaderBlock = styled.header`
  display: flex;
  justify-content: center;

  position: fixed;
  width: 100%;
  background-color: white;
  box-shadow: 0px 2px 4px rdba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => {
    return css`
      height: ${theme.space[16]};
      padding-left: ${theme.space[4]};
      padding-right: ${theme.space[4]};
    `;
  }}
`;

const HeaderLogo = styled.div`
  letter-spacing: 2px;
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.lg};
      font-weight: ${theme.fontWeights.extrabold};
    `;
  }}
`;

const HeaderRight = styled.div``;

const Spacer = styled.div`
  ${({ theme }) => {
    return css`
      height: ${theme.space[16]};
    `;
  }}
`;

const Header = () => {
  const [user, setUserCheck] = useUserCheck();
  console.log(user);
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <HeaderLogo>REACTERS</HeaderLogo>
          <HeaderRight>
            {user ? (
              <>
                <div>{user.username}</div>
                <Button color="cyan">로그아웃</Button>
              </>
            ) : (
              <>
                <LinkButton color="cyan" to="/login">
                  로그인
                </LinkButton>
              </>
            )}
          </HeaderRight>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
