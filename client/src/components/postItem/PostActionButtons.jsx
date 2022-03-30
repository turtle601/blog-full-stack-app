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

const PostActionButtons = () => {
  return (
    <PostActionButtonsBlock>
      <PostUpdateButton to="#" color="cyan">
        수정
      </PostUpdateButton>
      <PostDeleteButton to="#" color="cyan">
        삭제
      </PostDeleteButton>
    </PostActionButtonsBlock>
  );
};

export default PostActionButtons;
