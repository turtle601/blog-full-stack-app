import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

// layout 스타일 가져오기
import { VCenter } from '../../layout/flexbox';

const AuthTemplateBlock = styled(VCenter)`
  width: 100vw;
  height: 100vh;
  ${({ theme }) => {
    return css`
      background-color: ${theme.color.gray[400]};
    `;
  }}
`;

const WhiteBox = styled.div`
  width: 50%;
  ${({ theme }) => {
    return css`
      background-color: white;
      padding: ${theme.space[6]};
    `;
  }}
`;

const TitleBox = styled(VCenter)`
  ${({ theme }) => {
    return css`
      margin-bottom: ${theme.space[4]};
      letter-spacing: ${theme.space[0.5]};
      font-weight: ${theme.fontWeights.bold};
    `;
  }}
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <TitleBox>
          <Link to="/">REACTERS</Link>
        </TitleBox>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
