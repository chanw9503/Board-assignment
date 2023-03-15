import React from 'react';
import styled, { css } from 'styled-components';

function LabelInput({ id, label, placeholder, value, onChange, size }) {
  return (
    <>
      <StyledLabel htmlfor={id}>{label}</StyledLabel>
      <StyledInput
        required
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        size={size}
      />
    </>
  );
}

export default LabelInput;

const sizes = {
  large: {
    height: '3rem',
    width: '45rem',
    fontSize: '1.25rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
  },
};

const sizeStyles = css`
  ${({ size }) =>
    size &&
    css`
      height: $(sizes[size].height);
      font-size: ${sizes[size].fontSize};
      width: ${sizes[size].width};
    `}
`;

const StyledInput = styled.input`
  height: 1.75rem;
  width: 400px;
  border: none;
  border-radius: 5px;
  padding-left: 10px;
  font-size: '1.25rem';
  outline: none;

  ${sizeStyles}
`;

const StyledLabel = styled.label`
  margin-right: 10px;
  font-weight: 700;
`;
