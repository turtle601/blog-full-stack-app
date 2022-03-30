import React from 'react';
import styled, { css } from 'styled-components';

// Component 관련
import LinkButton from '../common/LinkButton';

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
  const onEdit = () => {
    setDoEdit();
  };

  return (
    <PostActionButtonsBlock>
      <PostUpdateButton to="/write" color="cyan" onClick={onEdit}>
        수정
      </PostUpdateButton>
      <PostDeleteButton to="/" color="cyan" onClick={onRemove}>
        삭제
      </PostDeleteButton>
    </PostActionButtonsBlock>
  );
};

export default PostActionButtons;
