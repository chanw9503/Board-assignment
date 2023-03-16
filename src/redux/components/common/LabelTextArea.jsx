import React from 'react';
import styled from 'styled-components';
import Validation from './Validation';

function LabelTextArea(props) {
  return (
    <>
      <div>
        <StyledLabel htmlfor={props.id}>{props.label}</StyledLabel>
        <Validation isError={props.isError} limit={props.limit} />
      </div>
      <StyledTextArea
        required
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        maxLength={props.limit + 1}
      />
    </>
  );
}

export default LabelTextArea;

const StyledTextArea = styled.textarea`
  height: 95%;
  width: 95%;
  border: 0;
  border-radius: 5px;
  outline: none;
  font-size: 0.75rem;
  border: none;
  resize: none;
`;

const StyledLabel = styled.label`
  font-weight: 700;
`;
