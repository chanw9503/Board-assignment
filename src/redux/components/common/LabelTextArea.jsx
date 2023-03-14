import React from 'react';
import styled from 'styled-components';

function LabelTextArea({ id, label, placeholder, value, onChange }) {
  return (
    <>
      <StyledLabel htmlfor={id}>{label}</StyledLabel>
      <StyledTextArea
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
  height: 250px;
  width: 400px;
  border: 0;
  border-radius: 5px;
  padding-left: 10px;

  font-size: 5px;
  border: 0.5px solid lightgray;
`;

const StyledLabel = styled.label`
  margin-right: 10px;
  font-weight: 700;
`;
