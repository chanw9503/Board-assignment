import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
function Button({ onClick, children, background }) {
  return (
    <StyledButton onClick={onClick} background={background}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 80px;
  height: 20px;
  float: right;

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
`;
export default Button;
