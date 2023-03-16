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
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '../Icon/DeleteIcon/DeleteIcon';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteBoard, getBoard } from '../../../api/board';

function Board() {
  const navigate = useNavigate();
  //const dispatch = useDispatch();
  const handleWritingPageLinkclick = () => {
    navigate('/writing');
  };
  //const board = useSelector((state) => state.board);

  const queryClient = useQueryClient();
  const mutation = useMutation(deleteBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries('board');
    },
  });

  const handlerClickDelete = (id) => {
    //dispatch(deleteBoard(id));
    mutation.mutate(id);
  };

  const handlerClickTitle = (id) => {
    console.log('id : ', id);
    navigate(`/post/${id}`);
  };

  const { isLoading, isError, data } = useQuery('board', getBoard);

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다....!</p>;
  }

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
            <StyledBoardTh textAlign="center" width={10}>
              삭제
            </StyledBoardTh>
          </StyledBoardTr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <StyledBoardTr isTd={true} key={item.id}>
                <StyledBoardTd width={30}>{item.no}</StyledBoardTd>
                <StyledBoardTd
                  isClick={true}
                  onClick={() => handlerClickTitle(item.id)}
                  width={480}
                >
                  {item.title}
                </StyledBoardTd>
                <StyledBoardTd width={50}>{item.writer}</StyledBoardTd>
                <StyledBoardTd width={50}>{item.day}</StyledBoardTd>
                <StyledBoardTd textAlign="center" width={50}>
                  <DeleteIcon onClick={() => handlerClickDelete(item.id)} />
                </StyledBoardTd>
              </StyledBoardTr>
            );
          })}
        </tbody>
      </StyledBoardTable>
      <StyledButtonBox>
        <Button background="#B4F0B4" onClick={handleWritingPageLinkclick}>
          글쓰기
        </Button>
      </StyledButtonBox>
    </StyledDiv>
  );
}

export default Board;
