import React from 'react';
import styled, { css } from 'styled-components';

import { Flex } from '../../layout/flexbox';

const ResponsiveBlock = styled(Flex)`
  width: 1023px;

  ${({ theme }) => theme.desktop`
    width : 1023px;
    margin-left : 2rem;
    margin-right : 2rem;
  `}
  ${({ theme }) => theme.laptop`
    width : 1023px;
    margin-left : 2rem;
    margin-right : 2rem;
  `}
  ${({ theme }) => theme.tablet`
    width : 100%;
    margin-left : 2rem;
    margin-right : 2rem;

  `}
  ${({ theme }) => theme.miniTablet`
    width : 100%;
    margin-left : 2rem;
    margin-right : 2rem;
  `}
  ${({ theme }) => theme.mobile`
    width : 100%;
    margin-left : 2rem;
    margin-right : 2rem;
  `}
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
