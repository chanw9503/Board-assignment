import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hook/useInput';
import Button from '../common/Button';
import LabelInput from '../common/LabelInput';
import LabelTextArea from '../common/LabelTextArea';
import { StyledWrap, StyledWrtingForm } from './styles';
import { v4 as uuidv4 } from 'uuid';
import { addBoard } from '../../modules/board';
import { useNavigate } from 'react-router-dom';

function Write() {
  const [title, onHandlerTitle] = useInput();
  const [writer, onHandlerWriter] = useInput();
  const [contents, onHandlerContents] = useInput();

  const navigate = useNavigate();
  const board = useSelector((state) => state.board);
  const dispatch = useDispatch();

  const getCurrentTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');

    const days = `${year}-${month}-${date}`;
    return days;
  };

  /**
   *   title: '제목입니다',
       body: '게시글입니다.',
       id: 'id 입니다.',
       writer: '작성자 입니다.',
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const day = getCurrentTime();
    const number = board.length;
    console.log(number);
    const newBoard = {
      id: uuidv4(),
      title,
      body: contents,
      writer,
      day,
      no: number,
    };
    console.log(newBoard);
    dispatch(addBoard(newBoard));
    navigate('/');
  };

  return (
    <>
      <StyledWrap>
        <StyledWrtingForm onSubmit={handleSubmit}>
          {/* id, label, placeholder, value, onChange */}
          <LabelInput
            value={writer}
            onChange={onHandlerWriter}
            id="Writer"
            label="작성자"
            placeholder="작성자를 입력해 주세요(10자 이내)"
          />
          <LabelInput
            value={title}
            onChange={onHandlerTitle}
            id="title"
            label="제목"
            placeholder="제목을 입력해 주세요 (50자 이내)"
          />
          <LabelTextArea
            value={contents}
            onChange={onHandlerContents}
            id="contents"
            label="내용 "
            placeholder="작성자를 입력해 주세요 (200자 이내)"
          />
          <div>
            <Button>저장하기</Button>
          </div>
        </StyledWrtingForm>
      </StyledWrap>
    </>
  );
}

export default Write;
