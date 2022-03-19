import React from 'react';
import styled, { css } from 'styled-components';

import Button from '../common/Button';
import Input from '../common/Input';

const TagName = styled.h3`
  ${({ theme }) => {
    return css`
      font-weight: ${theme.fontWeights.bold};
      margin-bottom: ${theme.space[3]};
    `;
  }}
`;

const TagForm = styled.form`
  display: flex;
  width: 200px;

  ${({ theme }) => {
    return css`
      font-weight: ${theme.fontWeights.bold};
      margin-bottom: ${theme.space[3]};
    `;
  }}
`;

const TagButton = styled(Button)`
  width: 50px;
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes['sm']};
    `;
  }}
`;

const TagInput = styled(Input)`
  border: 3px solid black;
`;

const TagListBlock = styled.ul`
  display: flex;
`;

const TagItemBlock = styled.li`
  ${({ theme }) => {
    return css`
      margin-right: ${theme.space[2]};
      color: ${theme.color.gray[400]};
    `;
  }}
`;

const TagItem = React.memo(({ tag }) => <TagItemBlock>#{tag}</TagItemBlock>);

const TagList = React.memo(({ tags }) => {
  return (
    <TagListBlock>
      {tags.map(tag => {
        return <TagItem tag={tag} key={tag} />;
      })}
    </TagListBlock>
  );
});

const TagBox = () => {
  return (
    <>
      <TagName>태그</TagName>
      <TagForm>
        <TagInput placeholder="태그를 입력하세요" />
        <TagButton color="gray">추가</TagButton>
      </TagForm>
      <TagList tags={['태그1', '태그2', '태그3']}></TagList>
    </>
  );
};

export default TagBox;
