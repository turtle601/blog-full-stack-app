import React from 'react';
import styled, { css } from 'styled-components';

import { Flex } from '../../layout/flexbox';

const ResponsiveBlock = styled(Flex)`
  width: 1023px;
  box-sizing: border-box;

  ${({ theme }) => theme.desktop`
    width : 1023px;
  `}
  ${({ theme }) => theme.laptop`
    width : 1023px;
  `}
  ${({ theme }) => theme.tablet`
    width : 100%;
  `}
  ${({ theme }) => theme.miniTablet`
    width : 100%;
  `}
  ${({ theme }) => theme.mobile`
    width : 100%;
  `}
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
