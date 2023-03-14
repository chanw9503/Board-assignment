import styled from 'styled-components';

const StyledWrap = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrtingForm = styled.form`
  border: 1px solid lightgray;
  width: 400px;
  height: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
`;

export { StyledWrap, StyledWrtingForm };
