import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { usePostList } from '../../hooks/postList';

// common Component
import LinkButton from '../common/LinkButton';
import Responsive from '../common/Responsive';
import PostItem from './PostItem';

// layout 관련
import { RightAlign } from '../../layout/flexbox';

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

const PostItemList = styled.ul``;

const WriteButton = styled(LinkButton)`
  width: max-content;
  box-sizing: border-box;

  ${({ theme }) => {
    return css`
      padding-left: ${theme.space[4]};
      padding-right: ${theme.space[4]};
    `;
  }}
`;

const PostList = () => {
  const [{ posts, error, loading, userInfo }, setPostList] = usePostList();
  // 쿼리 별 데이터를 가져오도록 하기 위해서
  useEffect(() => {
    setPostList();
  }, []);

  if (error) {
    return (
      <PostListBlock>
        <PostListWrapper>에러가발생!</PostListWrapper>
      </PostListBlock>
    );
  }

  return (
    <PostListBlock>
      <PostListWrapper>
        <RightAlign>
          {userInfo && (
            <WriteButton to={'/write'} color="cyan">
              새 글 작성
            </WriteButton>
          )}
        </RightAlign>
        <PostItemList>
          {!loading &&
            posts &&
            posts.map(post => {
              return <PostItem key={post._id} post={post} />;
            })}
        </PostItemList>
      </PostListWrapper>
    </PostListBlock>
  );
};

export default PostList;
