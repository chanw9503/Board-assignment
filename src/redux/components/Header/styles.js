import styled from 'styled-components';

const StyledHeader = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: green;

  max-width: 1200px;
  min-width: 800px;

  height: 10px;
`;

const StyledP = styled.p`
  margin: 0;
`;

export { StyledHeader, StyledP };
