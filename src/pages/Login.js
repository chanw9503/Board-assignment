import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { userCheck } from '../api/login';
import Button from '../redux/components/common/Button';
import LabelInput from '../redux/components/common/LabelInput';

// id={props.id}
// placeholder={props.placeholder}
// value={props.value}
// onChange={props.onChange}
// size={props.size}
// maxLength={length}

function SignUp() {
  const { isLoading, isErorr, data } = useQuery('login', userCheck);
  console.log('data', data);
  const handlerSubmit = () => {};
  const navigate = useNavigate();

  const handlerClickSignUp = () => {
    console.log('test');
    navigate('/signup');
  };
  return (
    <StyledWrap>
      <Form>
        <LabelInput id={0} label="아이디 : " placeholder="아이디를 입력하세요." />
        <LabelInput
          id={1}
          type="password"
          label="비빌번호 : "
          placeholder="비밀번호를 입력하세요."
        />
        <StyledButtonBox>
          <StyledInput type={'submit'} value="로그인" />
          <Button onClick={handlerClickSignUp} height="30px" width="200px" float="left">
            회원가입
          </Button>
        </StyledButtonBox>
      </Form>
    </StyledWrap>
  );
}

const StyledInput = styled.input`
  background: #b4f0b4;
  border: none;
  border-radius: 5px;
  width: 200px;
  height: 30px;
`;

const StyledWrap = styled.div`
  display: flex;
  width: 95vw;
  height: 96vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
  width: 500px;
  height: 300px;
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 10px;
  gap: 30px;
`;

const StyledButtonBox = styled.div`
  display: flex;
  gap: 15px;
`;
export default SignUp;
