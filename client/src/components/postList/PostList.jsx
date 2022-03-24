import React from 'react';
import styled, { css } from 'styled-components';

// common Component
import Button from '../common/Button';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';

// layout 관련
import { Flex } from '../../layout/flexbox';

const PostListBlock = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  ${({ theme }) => {
    return css`
      margin-top: ${theme.space[10]};
    `;
  }}
`;

const PostListWrapper = styled(Responsive)``;

const List = styled.div``;

const Item = styled.div``;

const ItemTitle = styled.h2``;

const ItemSubInfo = styled.div``;

const ItemTags = styled(Flex)``;

const ItemTag = styled.div``;

const PostList = () => {
  return (
    <PostListBlock>
      <PostListWrapper>
        <List>
          <Item>
            <ItemTitle>제목</ItemTitle>
            <ItemSubInfo>작성자 이름 + publishedDate</ItemSubInfo>
            <ItemTags>
              <ItemTag>#hi</ItemTag>
              <ItemTag>#bye</ItemTag>
            </ItemTags>
          </Item>
          <Item>post2</Item>
          <Item>post3</Item>
        </List>
      </PostListWrapper>
    </PostListBlock>
  );
};

export default PostList;
