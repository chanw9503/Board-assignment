import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { userSignUp } from '../api/login';
import Button from '../redux/components/common/Button';
import LabelInput from '../redux/components/common/LabelInput';
import useInput from '../redux/hook/useInput';

// id={props.id}
// placeholder={props.placeholder}
// value={props.value}
// onChange={props.onChange}
// size={props.size}
// maxLength={length}

function SignUp() {
  const [id, handlerId] = useInput();
  const [pw, handlerPw] = useInput();

  const queryClient = useQueryClient();
  const mutation = useMutation(userSignUp, {
    onSuccess: () => {
      queryClient.invalidateQueries('login');
    },
  });

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log('id', id, 'pasward', pw);
    const body = { id: id, password: pw };
    mutation.mutate(body);
  };
  const navigate = useNavigate();

  return (
    <StyledWrap>
      <Form>
        <LabelInput
          id={0}
          value={id}
          onChange={handlerId}
          label="아이디 : "
          placeholder="아이디를 입력하세요."
        />
        <LabelInput
          id={1}
          type="password"
          label="비빌번호 : "
          value={pw}
          onChange={handlerPw}
          placeholder="비밀번호를 입력하세요."
        />
        <StyledButtonBox>
          <Button onClick={handlerSubmit} height="40px" width="500px" float="left">
            가입하기
          </Button>
        </StyledButtonBox>
      </Form>
    </StyledWrap>
  );
}

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
