import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  width: 100%;

  outline: none;
  border: none;
  background: none;

  box-sizing: border-box;

  ${({ theme }) => {
    return css`
      border: 1px solid ${theme.color.gray[500]};

      font-size: ${theme.fontSizes.md};

      &:focus {
        color: ${theme.color.gray[900]};
        border: 1px solid ${theme.color.gray[900]};
      }

      & + & {
        margin-top: ${theme.space[4]};
      }
    `;
  }}

  ${props => {
    return (
      props.underline &&
      css`
        border: none;
        border-bottom: 1px solid ${props.theme.color.gray[500]};

        &:focus {
          border: none;
          border-bottom: 1px solid ${props.theme.color.gray[900]};
        }
      `
    );
  }}
`;

export const Input = props => <StyledInput {...props} />;
