import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

// 레이아웃 관련
import { Flex } from '../../layout/flexbox';

// hooks 관련
import { usePostViewer } from '../../hooks/read';

// Component 가져오기
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import PostActionButtons from './PostActionButtons';

// api 관련
import { deletePost } from '../../api/posts';

const PostViewerBlock = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  ${({ theme }) => {
    return css`
      margin-top: ${theme.space[12]};
    `;
  }}
`;

const PostWrapper = styled(Responsive)`
  flex-direction: column;
`;

const PostHead = styled.header`
  width: 100%;

  ${({ theme }) => {
    return css`
      padding-bottom: ${theme.space[9]};
      margin-bottom: ${theme.space[9]};
      border-bottom: 1px solid ${theme.color.gray[400]};
    `;
  }}
`;

const PostTitle = styled.h1`
  line-height: 1.5;
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes['5xl']};
    `;
  }}
`;

const PostContent = styled.div`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes['xl']};
      color: ${theme.color.gray[800]};
    `;
  }}
`;

const PostViewer = () => {
  const [
    { post, error, loading, ownUser },
    setReadPost,
    setUnloadPost,
    setDoEdit,
  ] = usePostViewer();

  useEffect(() => {
    setReadPost();
    return () => {
      setUnloadPost(); // 언마운트될 때 리덕스에서 없애기
    };
  }, [setReadPost, setUnloadPost]);

  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock> 존재하지 않는 포스트입니다. </PostViewerBlock>;
    }

    return <PostViewerBlock> 오류 발생! </PostViewerBlock>;
  }

  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedDate, tags, _id } = post;

  // 작성자 = 수정 작성자 일치 여부 확인
  const checkOwnPost = (user && user._id) === (ownUser && ownUser._id);

  // 포스트 삭제 기능
  const onRemove = async () => {
    await deletePost(_id);
  };

  return (
    <PostViewerBlock>
      <PostWrapper>
        <PostHead>
          <PostTitle>{title}</PostTitle>
          <SubInfo
            username={user.username}
            publishedDate={publishedDate}
            hasMarginTop={2}
          />
          <Tags tags={tags} />
        </PostHead>
        {checkOwnPost && (
          <PostActionButtons setDoEdit={setDoEdit} onRemove={onRemove} />
        )}
        <PostContent dangerouslySetInnerHTML={{ __html: body }}></PostContent>
      </PostWrapper>
    </PostViewerBlock>
  );
};

export default PostViewer;
