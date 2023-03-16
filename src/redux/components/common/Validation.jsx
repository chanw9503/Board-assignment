import React from 'react';
import styled from 'styled-components';

function Validation(props) {
  //isError 가 값이 없으면 undefined로 들어오긴하는데 삼항연자가는 undefined가 false  이기
  // 때문에 상관없다.
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
