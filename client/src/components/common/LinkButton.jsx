import React from 'react';

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  border: none;
  outline: none;
  cursor: pointer;

  ${({ theme }) => {
    return css`
      font-weight: ${theme.fontWeights[700]};
      padding: ${theme.space[1]} ${theme.space[2]};
      border-radius: ${theme.space[0.5]};
      background-color: ${theme.color.gray[700]};

      &:hover {
        background-color: ${theme.color.gray[200]};
      }
    `;
  }}

  // fullWidth - 버튼의 너비를 최대로 하는 속성 + 높이도 채우기
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
      props.color &&
      css`
        background-color: ${props.theme.color[props.color][500]};
        &:hover {
          background-color: ${props.theme.color[props.color][400]};
        }
      `
    );
  }}

  // noButton - button과 같은 배경색을 없애는 속성
  ${props => {
    return (
      props.$noButton &&
      css`
        background: none;
        padding: 0;

        &:hover {
          background: none;
        }
      `
    );
  }}

  // textColor - link의 글자색 속성 + hover
  ${props => {
    return (
      props.$textColor &&
      css`
        color: ${props.theme.color[props.$textColor][400]};

        &:hover {
          color: ${props.theme.color[props.$textColor][500]};
        }
      `
    );
  }}
`;

const LinkButton = ({ ...rest }) => {
  return <StyledLink {...rest}></StyledLink>;
};

export default LinkButton;
