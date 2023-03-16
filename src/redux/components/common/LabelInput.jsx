import React from 'react';
import styled, { css } from 'styled-components';
import Validation from './Validation';

function LabelInput(props) {
  if (props.isError == true) console.log('LabelInput', props);

  return (
    <div>
      <StyledLabel htmlfor={props.id}>{props.label}</StyledLabel>
      <Validation isError={props.isError} limit={props.limit} />
      <StyledInput
        required
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        size={props.size}
        maxLength={props.limit + 1}
      />
    </div>
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

  font-size: '1.25rem';
  outline: none;

  ${sizeStyles}
`;

const StyledLabel = styled.label`
  font-weight: 700;
`;
