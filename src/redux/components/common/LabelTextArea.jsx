import React from 'react';
import styled from 'styled-components';

function LabelTextArea({ id, label, placeholder, value, onChange }) {
  return (
    <>
      <StyledLabel htmlfor={id}>{label}</StyledLabel>
      <StyledTextArea
        required
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
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
  padding: 10px;
  margin-right: 10px;
  outline: none;
  font-size: 0.75rem;
  border: none;
  resize: none;
`;

const StyledLabel = styled.label`
  margin-right: 10px;
  font-weight: 700;
`;
