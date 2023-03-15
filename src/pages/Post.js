import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CustomLine from '../redux/components/common/CustomLine';
import Button from '../redux/components/common/Button';
import LabelInput from '../redux/components/common/LabelInput';
import useInput from '../redux/hook/useInput';
import LabelTextArea from '../redux/components/common/LabelTextArea';
function Post() {
  const location = useLocation();
  //주소값을 읽어온다. 주소값에 내가 설정한 post/id=0 값을 불러온다.
  //주소값에서 내가 필요한 id 값만 parsing하기 위해서 아래와 같이 자른다.
  const id = location.pathname.slice(1).split('id', 2)[1].slice(1);

  //useSelector로 store에 있는 state 값을 불러와서
  //내가 필요한 id에 있는 data 값만 가져온다.
  const filterBoard = useSelector((state) =>
    state.board.filter((item) => item.id === id)
  );

  //filter는 배열을 결과값으로 내보낸다. 하지만 어짜피
  //결과값이 1개이므로 '0'번째 값으로 설정한다.
  const board = filterBoard[0];

  const [isEdit, setEdit] = useState(false);
  const [contents, setContents] = useState('');

  const [title, setTitle] = useState('');

  const handlerClickEdit = () => {
    setTitle(board.title);
    setContents(board.body);
    setEdit(!isEdit);
  };

  const handlerChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  });

  const handlerChangeContents = useCallback((e) => {
    setContents(e.target.value);
  });

  console.log('isEdit', isEdit);
  return (
    <StyledPosWrap>
      <div>
        <h3>게시글입니다.</h3>
      </div>
      <CustomLine thick="3px" />
      <StyledHeader>
        <StyledTitle>
          {isEdit ? (
            <LabelInput
              value={title}
              onChange={handlerChangeTitle}
              size="large"
              placeholder={board.title}
            ></LabelInput>
          ) : (
            <strong>{board.title}</strong>
          )}
        </StyledTitle>
        <StyledSubTitle>
          <span>{board.writer}</span>
          <span> | {board.day}</span>
        </StyledSubTitle>
      </StyledHeader>
      <CustomLine thick="1px" color="lightgray" />
      <StyledBody>
        {isEdit ? (
          <LabelTextArea
            value={contents}
            onChange={handlerChangeContents}
            placeholder={board.body}
          ></LabelTextArea>
        ) : (
          <div>{board.body}</div>
        )}
      </StyledBody>
      <CustomLine thick="3px" />
      <StyledButtonBox>
        <Button onClick={handlerClickEdit}>수정하기</Button>
      </StyledButtonBox>
    </StyledPosWrap>
  );
}

const StyledPosWrap = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  padding: 20px;
`;

const StyledHeader = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledTitle = styled.div`
  font-size: 20px;
`;

const StyledSubTitle = styled.div`
  font-size: 10px;
`;

const StyledBody = styled.div`
  margin-top: 10px;
  height: 500px;
`;

const StyledButtonBox = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: right;
  gap: 10px;
`;

export default Post;
