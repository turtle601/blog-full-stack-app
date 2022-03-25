import React from 'react';
import styled, { css } from 'styled-components';

// 레이아웃 관련
import { Flex } from '../../layout/flexbox';
import LinkButton from './LinkButton';

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
          <LinkButton to={`/@${username}`} $textColor="gray" $noButton>
            {username}
          </LinkButton>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </StyledSubInfo>
  );
};

export default SubInfo;
