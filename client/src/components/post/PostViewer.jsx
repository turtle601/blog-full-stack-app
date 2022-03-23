import React from 'react';
import styled, { css } from 'styled-components';
import { Flex } from '../../layout/flexbox';

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
  return (
    <PostViewerBlock>
      <PostWrapper>
        <PostHead>
          <PostTitle>제목</PostTitle>
          <SubInfo>
            <span>hi</span>
            <span>날짜</span>
          </SubInfo>
          <PostTagList>
            <PostTagItem>#태그1</PostTagItem>
            <PostTagItem>#태그2</PostTagItem>
            <PostTagItem>#태그3</PostTagItem>
          </PostTagList>
        </PostHead>
        <PostContent
          dangerouslySetInnerHTML={{ __html: '<p>hi <h1>내용</h1></p>' }}
        ></PostContent>
      </PostWrapper>
    </PostViewerBlock>
  );
};

export default PostViewer;
