import React, { useState } from 'react';
import styled, { css } from 'styled-components';

// Component 관련
import LinkButton from '../common/LinkButton';
import AskModal from '../common/AskModal';
import Button from '../common/Button';

// layout 관련
import { Flex } from '../../layout/flexbox';

const PostActionButtonsBlock = styled(Flex)`
  justify-content: flex-end;
  ${({ theme }) => {
    return css`
      margin-top: ${theme.space[4]};
      a + a {
        margin-left: ${theme.space[2]};
      }
    `;
  }}
`;

const PostUpdateButton = styled(LinkButton)``;
const PostDeleteButton = styled(LinkButton)``;

const PostActionButtons = ({ setDoEdit, onRemove }) => {
  const [modal, setModal] = useState(false);

  const removeClick = () => {
    setModal(true);
  };

  const doCancel = () => {
    setModal(false);
  };

  const doRemove = () => {
    setModal(false);
    onRemove();
  };

  const onEdit = () => {
    setDoEdit();
  };

  return (
    <>
      <PostActionButtonsBlock>
        <PostUpdateButton to="/write" color="cyan" onClick={onEdit}>
          수정
        </PostUpdateButton>
        <PostDeleteButton to="#" color="cyan" onClick={removeClick}>
          삭제
        </PostDeleteButton>
      </PostActionButtonsBlock>
      {modal && <AskModal doCancel={doCancel} doRemove={doRemove} />}
    </>
  );
};

export default PostActionButtons;
