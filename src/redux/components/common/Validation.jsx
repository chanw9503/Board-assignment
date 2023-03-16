import React from 'react';
import styled from 'styled-components';

function Validation(props) {
  console.log('props.limit', props);
  return <>{props.isError ? <Label>길이 {props.limit}를 초과했습니다.</Label> : null}</>;
}

const Label = styled.label`
  color: red;
  font-size: 15px;
  font-weight: 600;

  display: inline-block;
  margin-left: 20px;
`;
export default Validation;
