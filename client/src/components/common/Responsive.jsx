import React from 'react';
import styled, { css } from 'styled-components';

const ResponsiveBlock = styled.div`
  ${({ theme }) => {
    theme.laptop`
      width : 768px;
    `;
  }}

  ${({ theme }) => {
    theme.tablet`
      width : 100%;
    `;
  }}
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
