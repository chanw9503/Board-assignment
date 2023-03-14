import React from 'react';
import styled from 'styled-components';

function LabelInput({ id, label, placeholder, value, onChange }) {
  return (
    <>
      <StyledLabel htmlfor={id}>{label}</StyledLabel>
      <StyledInput id={id} placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
}

export default LabelInput;

const StyledInput = styled.input`
  height: 50px;
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
