import React from 'react';
import styled, { css } from 'styled-components';

// 리액트 라우터 관련
import { Link } from 'react-router-dom';

// 레이아웃 관련
import { Flex } from '../../layout/flexbox';

const StyledSubInfo = styled(Flex)`
  ${props => {
    return (
      props.hasMarginTop &&
      css`
        margin-top: ${props.theme.space[props.hasMarginTop]};
      `
    );
  }}

  ${({ theme }) => {
    return css`
      color: ${theme.color.gray[400]};

      span + span {
        margin-left: ${theme.space[4]};
      }
    `;
  }}
`;

const SubInfo = ({ username, publishedDate, hasMarginTop }) => {
  return (
    <StyledSubInfo hasMarginTop={hasMarginTop}>
      <span>
        <b>
          <Link to={`/@${username}`}>{username}</Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </StyledSubInfo>
  );
};

export default SubInfo;
