import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

// 레이아웃 관련
import { Flex } from '../../layout/flexbox';

// hooks 관련
import { usePostViewer } from '../../hooks/read';

// Component 가져오기
import Responsive from '../common/Responsive';

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

const SubInfo = styled(Flex)`
  ${({ theme }) => {
    return css`
      margin-top: ${theme.space[2]};
      color: ${theme.color.gray[400]};

      span + span {
        margin-left: ${theme.space[4]};
      }
    `;
  }}
`;

const PostTagList = styled(Flex)`
  ${({ theme }) => {
    return css`
      margin-top: ${theme.space[1]};

      div + div {
        margin-left: ${theme.space[4]};
      }
    `;
  }}
`;

const PostTagItem = styled.div`
  cursor: pointer;
  ${({ theme }) => {
    return css`
      color: ${theme.color.cyan[400]};
      &:hover {
        color: ${theme.color.cyan[600]};
      }
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
  const [{ post, error, loading }, setReadPost, setUnloadPost] =
    usePostViewer();

  useEffect(() => {
    setReadPost();
    return () => {
      setUnloadPost(); // 언마운트될 때 리덕스에서 없애기
    };
  }, []);

  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock> 존재하지 않는 포스트입니다. </PostViewerBlock>;
    }

    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedDate, tags } = post;

  return (
    <PostViewerBlock>
      <PostWrapper>
        <PostHead>
          <PostTitle>{title}</PostTitle>
          <SubInfo>
            <span>{user.username}</span>
            <span>{new Date(publishedDate).toLocaleDateString()}</span>
          </SubInfo>
          <PostTagList>
            {tags.map(tag => {
              return <PostTagItem key={tag}>#{tag}</PostTagItem>;
            })}
          </PostTagList>
        </PostHead>
        <PostContent dangerouslySetInnerHTML={{ __html: body }}></PostContent>
      </PostWrapper>
    </PostViewerBlock>
  );
};

export default PostViewer;
