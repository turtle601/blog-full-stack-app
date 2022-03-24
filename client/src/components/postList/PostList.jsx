import React from 'react';
import styled, { css } from 'styled-components';

// common Component
import Button from '../common/Button';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

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

const PostListWrapper = styled(Responsive)`
  flex-direction: column;
`;

const List = styled.div``;

const Item = styled.div`
  width: 100%;

  ${({ theme }) => {
    return css`
      padding-bottom: ${theme.space[9]};
      margin-bottom: ${theme.space[9]};
      border-bottom: 1px solid ${theme.color.gray[400]};
    `;
  }}
`;

const ItemTitle = styled.h1`
  line-height: 1.5;
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes['5xl']};
    `;
  }}
`;

const PostList = () => {
  return (
    <PostListBlock>
      <PostListWrapper>
        <List>
          <Item>
            <ItemTitle>제목</ItemTitle>
            <SubInfo
              username="유저이름"
              publishedDate={new Date()}
              hasMarginTop={2}
            />
            <Tags tags={['1', '2', '3']} />
          </Item>
          <Item>
            <ItemTitle>제목</ItemTitle>
            <SubInfo
              username="유저이름"
              publishedDate={new Date()}
              hasMarginTop={2}
            />
            <Tags tags={['1', '2', '3']} />
          </Item>
          <Item>
            <ItemTitle>제목</ItemTitle>
            <SubInfo
              username="유저이름"
              publishedDate={new Date()}
              hasMarginTop={2}
            />
            <Tags tags={['1', '2', '3']} />
          </Item>
        </List>
      </PostListWrapper>
    </PostListBlock>
  );
};

export default PostList;
