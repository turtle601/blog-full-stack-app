import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;

  ${({ theme }) => {
    return css`
      background-color: ${theme.color.primary};
      font-size: ${theme.fontSizes['md']};
      font-weight: ${theme.fontWeights[700]};
      padding: ${theme.space[1]} ${theme.space[2]};
      border-radius: ${theme.space[0.5]};
      background-color: ${theme.color.gray[700]};

      &:hover {
        background-color: ${theme.color.gray[200]};
      }
    `;
  }}

  ${props => {
    return (
      props.fullWidth &&
      css`
        width: 100%;
        padding-top: ${props.theme.space[3]};
        padding-bottom: ${props.theme.space[3]};
        font-size: ${props.theme.fontSizes['xl']};
      `
    );
  }}

  ${props => {
    return (
      props.cyan &&
      css`
        background-color: ${props.theme.color.cyan[500]};
        &:hover {
          background-color: ${props.theme.color.cyan[400]};
        }
      `
    );
  }}
`;

export const Button = props => <StyledButton {...props} />;
