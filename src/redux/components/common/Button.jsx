import React from 'react';
import styled from 'styled-components';

function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  width: 80px;
  height: 20px;
  float: right;
`;
export default Button;
