import React from 'react';
import styled, { css } from 'styled-components';

// Component 관련
import Button from './Button';

// layout 관련
import { Center, Flex } from '../../layout/flexbox';

const FullScreen = styled(Center)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
`;

const AskModalBlock = styled.div`
  background-color: white;

  width: 250px;
  height: 150px;

  ${({ theme }) => {
    return css`
      padding: ${theme.space[4]};
    `;
  }}
`;
const AskModalTitle = styled.h3`
  ${({ theme }) => {
    return css`
      font-weight: ${theme.fontWeights.extrabold};
      font-size: ${theme.fontSizes['2xl']};
    `;
  }}
`;

const AskModalBody = styled.div`
  ${({ theme }) => {
    return css`
      font-weight: ${theme.fontWeights.medium};
      font-size: ${theme.fontSizes['md']};
      margin-top: ${theme.space[4]};
    `;
  }}
`;
const AskModalButtonGroup = styled(Flex)`
  justify-content: flex-end;
  ${({ theme }) => {
    return css`
      margin-top: ${theme.space[16]};
      button + button {
        margin-left: ${theme.space[4]};
      }
    `;
  }}
`;

const CancelButton = styled(Button)``;
const DeleteButton = styled(Button)``;

const AskModal = () => {
  return (
    <FullScreen>
      <AskModalBlock>
        <AskModalTitle>포스트 삭제</AskModalTitle>
        <AskModalBody>정말로 삭제 하시겠습니까?</AskModalBody>
        <AskModalButtonGroup>
          <CancelButton color="cyan">취소</CancelButton>
          <DeleteButton color="red">삭제</DeleteButton>
        </AskModalButtonGroup>
      </AskModalBlock>
    </FullScreen>
  );
};

export default AskModal;
