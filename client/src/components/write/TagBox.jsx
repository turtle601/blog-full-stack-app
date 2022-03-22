import React, { useState, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';

import Button from '../common/Button';
import Input from '../common/Input';

// hooks 관련 라이브러리
import { useTagField } from '../../hooks/write';

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
  height: 40px;

  ${({ theme }) => {
    return css`
      font-weight: ${theme.fontWeights.bold};
      margin-bottom: ${theme.space[3]};
    `;
  }}
`;

const TagButton = styled(Button)`
  width: 60px;
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

const TagItem = React.memo(({ tag, onRemove }) => {
  return <TagItemBlock onClick={() => onRemove(tag)}>#{tag}</TagItemBlock>;
});

const TagList = React.memo(({ tags, onRemove }) => {
  return (
    <TagListBlock>
      {tags.map(tag => {
        return <TagItem tag={tag} key={tag} onRemove={onRemove} />;
      })}
    </TagListBlock>
  );
});

const TagBox = () => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);
  const [reduxTags, setChangeTagField] = useTagField();

  const insertTag = useCallback(tag => {
    if (!tag) return; // 공백이라면 추가 X
    if (localTags.includes(tag)) return; // 이미 존재한다면 추가 X
    const newTags = [...localTags, tag];
    setLocalTags(newTags);
    setChangeTagField(newTags);
  });

  const onRemove = useCallback(
    tag => {
      const newTags = localTags.filter(t => t !== tag);
      setLocalTags(newTags);
      setChangeTagField(newTags);
    },
    [localTags],
  );

  const onChange = useCallback(e => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      insertTag(input.trim()); // 아ㅠ뒤 공백을 없앤 후 등록
      setInput('');
    },
    [input, insertTag],
  );

  useEffect(() => {
    setLocalTags(reduxTags);
  }, [reduxTags]);

  return (
    <>
      <TagName>태그</TagName>
      <TagForm onSubmit={onSubmit}>
        <TagInput
          placeholder="태그를 입력하세요"
          value={input}
          onChange={onChange}
        />
        <TagButton color="gray">추가</TagButton>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove}></TagList>
    </>
  );
};

export default TagBox;
