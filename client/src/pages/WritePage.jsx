import React from 'react';

import Editor from '../components/write/Editor';
import Responsive from '../components/common/Responsive';
import TagBox from '../components/write/TagBox';
import styled, { css } from 'styled-components';

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
      </VResponsive>
    </>
  );
};

export default WritePage;
