import React from 'react';

import Editor from '../components/write/Editor';
import Responsive from '../components/common/Responsive';
import TagBox from '../components/write/TagBox';
import styled, { css } from 'styled-components';
import WriteActionButtons from '../components/write/WriteActionButtons';

const VResponsive = styled(Responsive)`
  flex-direction: column;
  box-sizing: border-box;

  ${({ theme }) => {
    return css`
      padding-left: ${theme.space[5]};
      padding-right: ${theme.space[5]};
    `;
  }}
`;

const WritePage = () => {
  return (
    <>
      <VResponsive>
        <Editor />
        <TagBox />
        <WriteActionButtons />
      </VResponsive>
    </>
  );
};

export default WritePage;
