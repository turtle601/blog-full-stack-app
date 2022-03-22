import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

import { useNavigate } from 'react-router-dom';

import { useWrittenState } from '../../hooks/writeAction';

const WriteActionButtonsBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

// TagBox에서 사용하는 버튼과 일치하는 높이로 설정한 후 서로 간의 여백 지정
const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = () => {
  const navigator = useNavigate();
  const [{ title, body, tags, post, postError }, setPublish] =
    useWrittenState();

  const onCancel = () => {
    navigator(-1);
  };

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      navigator(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [post, postError, navigator]);
  return (
    <WriteActionButtonsBlock>
      <StyledButton color="cyan" onClick={setPublish}>
        포스트 등록
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
