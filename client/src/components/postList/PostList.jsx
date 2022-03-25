import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { usePostList } from '../../hooks/postList';

// common Component
import Responsive from '../common/Responsive';
import PostItem from './PostItem';

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
