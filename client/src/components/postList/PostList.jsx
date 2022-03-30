import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { usePostList } from '../../hooks/postList';

// common Component
import LinkButton from '../common/LinkButton';
import Responsive from '../common/Responsive';
import PostItem from './PostItem';

// layout 관련
import { RightAlign } from '../../layout/flexbox';

// utils 관련
import { buildLink, extractQuery } from '../../utils/queryLink';
import { useLocation, useParams } from 'react-router-dom';

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

const PageNationBlock = styled.div`
  display: flex;
  justify-content: space-around;
  ${({ theme }) => {
    return css`
      margin-bottom: ${theme.space[12]};
    `;
  }}
`;

const PostList = () => {
  const [
    { posts, error, loading, userInfo, lastPage, tag, page, username },
    setPostList,
  ] = usePostList();
  // 쿼리 별 데이터를 가져오도록 하기 위해서
  useEffect(() => {
    setPostList();
  }, [setPostList]);

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

        <PageNationBlock>
          {page === 1 ? (
            <LinkButton $disabled to="#">
              이전
            </LinkButton>
          ) : (
            <LinkButton
              to={buildLink({ username, tag, page: page - 1 })}
              color="gray"
            >
              이전
            </LinkButton>
          )}

          <p>{page}</p>

          {page === lastPage ? (
            <LinkButton $disabled to="#">
              다음
            </LinkButton>
          ) : (
            <LinkButton
              to={buildLink({ username, tag, page: page + 1 })}
              color="gray"
            >
              다음
            </LinkButton>
          )}
        </PageNationBlock>
      </PostListWrapper>
    </PostListBlock>
  );
};

export default PostList;
