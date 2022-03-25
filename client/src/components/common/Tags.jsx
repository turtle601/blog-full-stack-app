import React from 'react';
import styled, { css } from 'styled-components';
import LinkButton from './LinkButton';

const TagList = styled.ul`
  display: flex;

  ${({ theme }) => {
    return css`
      margin-top: ${theme.space[1]};

      li + li {
        margin-left: ${theme.space[4]};
      }
    `;
  }}
`;

const TagItem = styled.li`
  cursor: pointer;
  ${({ theme }) => {
    return css`
      color: ${theme.color.cyan[400]};
      &:hover {
        color: ${theme.color.cyan[500]};
      }
    `;
  }}
`;

const Tags = ({ tags }) => {
  return (
    <TagList>
      {tags.map(tag => {
        return (
          <TagItem key={tag}>
            <LinkButton to={`/?tags=${tag}`} $noButton>
              #{tag}
            </LinkButton>
          </TagItem>
        );
      })}
    </TagList>
  );
};

export default Tags;
