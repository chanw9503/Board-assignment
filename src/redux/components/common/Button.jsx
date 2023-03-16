import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
function Button(props) {
  return (
    <StyledButton
      onClick={props.onClick}
      background={props.background}
      disabled={props.disable}
      float={props.float}
      width={props.width}
      height={props.height}
      onSubmit={props.submit}
    >
      {props.children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;

  background: #b4f0b4;
  &:hover {
    background: ${lighten(0.1, '#B4F0B4')};
  }
  &:active {
    background: ${darken(0.1, '#B4F0B4')};
  }

  /* 배경색에 대한 이벤트 효과 */
  ${(props) =>
    props.background &&
    css`
      background: ${props.background};
      &:hover {
        background: ${lighten(0.1, props.background)};
      }
      &:active {
        background: ${darken(0.1, props.background)};
      }
    `}

  ${(props) =>
    props.float
      ? css`
          float: ${props.flat};
        `
      : css`
          float: right;
        `}

  ${(props) =>
    props.width
      ? css`
          width: ${props.width};
        `
      : css`
          width: 80px;
        `}

  ${(props) =>
    props.height
      ? css`
          height: ${props.height};
        `
      : css`
          height: 20px;
        `}
`;
export default Button;
