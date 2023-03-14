import React from 'react';
import Button from '../common/Button';
import {
  StyledBoardTable,
  StyledBoardTd,
  StyledBoardTh,
  StyledBoardTr,
  StyledButtonBox,
  StyledDiv,
  StyledLine,
  StyledTitle,
} from './styles';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Board() {
  const navigate = useNavigate();

  const HandleWritingPageLinkclick = () => {
    navigate('/writing');
  };

  const board = useSelector((state) => state.board);

  return (
    <StyledDiv>
      <StyledTitle>자유 게시판</StyledTitle>
      <StyledBoardTable>
        <thead>
          <StyledBoardTr>
            <StyledBoardTh width={30}>No.</StyledBoardTh>
            <StyledBoardTh width={450}>제목</StyledBoardTh>
            <StyledBoardTh width={90}>글쓴이</StyledBoardTh>
            <StyledBoardTh width={90}>작성시간</StyledBoardTh>
          </StyledBoardTr>
        </thead>
        <tbody>
          {board.map((item) => {
            return (
              <StyledBoardTr key={item.id}>
                <StyledBoardTd width={30}>{item.no}</StyledBoardTd>
                <StyledBoardTd width={480}>{item.title}</StyledBoardTd>
                <StyledBoardTd width={50}>{item.writer}</StyledBoardTd>
                <StyledBoardTd width={50}>{item.day}</StyledBoardTd>
              </StyledBoardTr>
            );
          })}
        </tbody>
      </StyledBoardTable>
      <StyledButtonBox>
        <Button onClick={HandleWritingPageLinkclick}>글쓰기</Button>
      </StyledButtonBox>
    </StyledDiv>
  );
}

export default Board;
