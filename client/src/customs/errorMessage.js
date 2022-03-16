import styled, { css } from 'styled-components';

import { Center } from '../layout/flexbox';

export const ErrorMessage = styled(Center)`
  background: none;
  border: none;
  outline: none;

  ${({ theme }) => {
    return css`
      font-weight: ${theme.fontSizes.bold};
      color: ${theme.color.red[400]};
      padding: ${theme.space[4]};
    `;
  }}
`;
