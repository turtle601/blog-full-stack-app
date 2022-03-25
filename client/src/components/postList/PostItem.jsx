import React from 'react';
import styled, { css } from 'styled-components';

import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import LinkButton from '../common/LinkButton';

const PostItemBlock = styled.li`
  width: 100%;

  ${({ theme }) => {
    return css`
      padding-bottom: ${theme.space[9]};
      margin-bottom: ${theme.space[9]};
      border-bottom: 1px solid ${theme.color.gray[400]};
    `;
  }}
`;

const PostItemTitle = styled.h3`
  line-height: 1.5;

  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes['5xl']};
    `;
  }}
`;

const PostBody = styled.p`
  ${({ theme }) => {
    return css`
      margin-top: ${theme.space[4]};
    `;
  }}
`;

const PostItem = ({ post }) => {
  const { publishedDate, user, tags, title, body, _id } = post;
  return (
    <PostItemBlock>
      <PostItemTitle>
        <LinkButton $noButton to={`/@${user.username}/${_id}`}>
          {title}
        </LinkButton>
      </PostItemTitle>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
        hasMarginTop={2}
      />
      <Tags tags={tags}></Tags>
      <PostBody>{body}</PostBody>
    </PostItemBlock>
  );
};

export default React.memo(PostItem);
