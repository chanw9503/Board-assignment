import styled, { css } from 'styled-components';

const StyledDiv = styled.div`
  padding: 20px;
  max-width: 700px;
  min-width: 600px;
`;

const StyledTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
`;

const StyledBoardTable = styled.table`
  border-top: 2px solid black;
  max-width: 700px;

  border-collapse: collapse; // 내부의 셀이 공유 테두리를 가질지 또는 별도의 테두리를 가질지 설정(collapse, separate)
`;

const StyledBoardTh = styled.th`
  white-space: nowrap;
  width: ${(props) => props.width}px;
  font-size: 15px;
  font-weight: 500;

  padding: 0.6rem;
  min-width: 6rem;
  text-align: left;
  margin: 0;
`;

const StyledBoardTd = styled.td`
  white-space: nowrap;
  width: ${(props) => props.width}px;
  font-size: 15px;
  font-weight: 500;

  padding: 0.6rem;
  min-width: 6rem;
  text-align: left;
  margin: 0;

  //column 중에 제목을 클릭했을 때 세부 페이지로 넘어가고 싶었다.
  //그래서 제목을 클릭했을 때 세부페이지로 넘어갈 수 있다는 것을 눈으로 보여주기 위해
  //제목에 hover 되었을 때, 선명도를 바꿔주는 효과를 주려고 했다.
  ${(props) =>
    props.isClick &&
    css`
      &:hover {
        color: rgba(0, 0, 0, 0.5);
        text-decoration: underline;
      }
    `}

  cursor: pointer;
`;

const StyledLine = styled.div`
  border: 0.5px solid lightgray;
  width: 100%;
`;

const StyledButtonBox = styled.div`
  width: 100%;
  float: right;
  margin-top: 10px;
`;

const StyledBoardTr = styled.tr`
  border-bottom: 0.5px solid lightgray;

  //제목이 일때는 이부분을 제외시키고 싶었다.
  //그래서 조건을 Td일 때, 효과가 나타나도록 바꾸었다.
  ${(props) =>
    props.isTd &&
    css`
      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        //filter로 하면 글자만 색이 바뀌어서 배경색으로 했다.
      }
    `}
`;

export {
  StyledDiv,
  StyledTitle,
  StyledBoardTh,
  StyledBoardTd,
  StyledBoardTable,
  StyledLine,
  StyledButtonBox,
  StyledBoardTr,
};

/**
 * tr : "table row" 표 내부에서 행을 나타내는 태그
 * th : "table header" 헤더 칸(cell)을 나타내는 태그
 * td : "table data" 일단적인 칸(cell)을 나타내는 태그
 */
