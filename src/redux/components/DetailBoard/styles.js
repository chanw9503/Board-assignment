import styled from 'styled-components';

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

export {
  StyledPosWrap,
  StyledHeader,
  StyledTitle,
  StyledSubTitle,
  StyledBody,
  StyledButtonBox,
};
