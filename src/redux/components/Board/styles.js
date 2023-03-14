import styled from 'styled-components';

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
